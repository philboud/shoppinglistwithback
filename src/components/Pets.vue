<template>
  <div>
    <div class="subtitle">
      <h4>Animalerie</h4>
    </div>
    <div class="articles">
      <div class="selectInList">
        <b-form-select
          class="selectSize"
          v-model="selected"
          :options="pets"
          @change="addTolist"
        ></b-form-select>
      </div>
      <div>
        <b-modal
          ref="my-modal"
          hide-footer
          title="Combien en veux tu?"
          centered
        >
          <div class="d-block text-center">
            <b-form-select v-model="qtys" :options="unites"></b-form-select>
            <b-alert
              :show="dismissCountDown1"
              dismissible
              fade
              variant="warning"
              @dismiss-count-down="countDownChanged1"
            >
              Selectionne combien tu en veux...?
            </b-alert>
            <b-input
              v-model="qty"
              placeholder="Ou ecris ce que tu veux!"
            ></b-input>
            <b-alert
              :show="dismissCountDown2"
              dismissible
              fade
              variant="warning"
              @dismiss-count-down="countDownChanged2"
            >
              Ou écris combien tu en veux...?
            </b-alert>
          </div>
          <b-button class="mt-3" variant="success" block @click="hideModal"
            >Validez!</b-button
          >
        </b-modal>
      </div>
    </div>
    <div class="buttSave">
      <b-button variant="success" @click="goToCat()"
        >Enregistre et retourne aux catégories</b-button
      >
    </div>
    <div class="tabList">
      <b-table striped hover :items="listeEnCours" :fields="fields">
        <template v-slot:cell(produit)="row">
          <b-form-input v-model="row.item.produit" />
        </template>
        <template v-slot:cell(qty)="row">
          <b-form-input v-model="row.item.qty" />
        </template>
        <template v-slot:cell(action)="row">
          <b-icon
            icon="trash"
            style="width: 30px; height: 30px"
            @click="deleteList(row.index)"
          ></b-icon>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import json from '../json/pets.json'
import ListsService from '../../services/ListsService.js'

export default {
  name: 'Pets',
  data () {
    return {
      dismissSecs1: 3,
      dismissCountDown1: 0,
      dismissSecs2: 3,
      dismissCountDown2: 0,
      qtys: null,
      qty: '',
      selected: null,
      listeEnCours: [],
      fields: [ {
        key: 'produit',
        label: 'Produits'
      },
      {
        key: 'qty',
        label: 'Quantité'
      },
      {
        key: 'action',
        label: ''
      }
      ],
      pets: [],
      unites: [{value: null, text: 'Choisis ta quantité'}, '1', '1 litre', '1 kg', '2', '2 litre', '2 kg', '3', '3 litre', '3 kg', '4', '4 litre', '4 kg']
    }
  },
  mounted () {
    this.getLists()
    this.pets = json
  },
  methods: {
    countDownChanged1 (dismissCountDown) {
      this.dismissCountDown1 = dismissCountDown
    },
    showAlert1 () {
      this.dismissCountDown1 = this.dismissSecs1
    },
    countDownChanged2 (dismissCountDown) {
      this.dismissCountDown2 = dismissCountDown
    },
    showAlert2 () {
      this.dismissCountDown2 = this.dismissSecs2
    },
    goToCat () {
      localStorage.setItem('selected', JSON.stringify(this.listeEnCours))
      this.$router.push({name: 'ListeCreat'})
    },
    addTolist () {
      if (this.qty === '') {
        this.showModal()
      }
    },
    showModal () {
      this.$refs['my-modal'].show()
    },
    deleteList (index) {
      this.deleteListBack(index)
      this.listeEnCours.splice(index, 1)
    },
    hideModal () {
      if (this.qtys === null && this.qty === '') {
        this.showAlert1()
      }
      if (this.qty === '' && this.qtys === null) {
        this.showAlert2()
      } else {
        if (this.qtys !== null) {
          this.qty = this.qtys
          this.$refs['my-modal'].hide()
        }
        if (this.qty !== '') {
          console.log(this.selected)
          this.listeEnCours.push({produit: this.selected, qty: this.qty, checked: true})
          this.addProduit()
          this.qty = ''
          this.qtys = null
          this.selected = null
          this.$refs['my-modal'].hide()
        }
      }
    },
    async getLists () {
      const response = await ListsService.fetchLists()
      this.listeEnCours = response.data.lists
    },
    async deleteListBack (index) {
      var id = this.listeEnCours[index]._id
      await ListsService.deleteList(id)
    },
    async addProduit () {
      console.log(this.selected)
      await ListsService.addList({
        produit: this.selected,
        qty: this.qty
      })
    }
  }
}
</script>
