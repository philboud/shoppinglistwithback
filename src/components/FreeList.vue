<template>
  <div>
    <div class="subtitle">
      <h2>Liste Libre</h2>
    </div>
    <div>
      <div class="buttSave">
        <b-button variant="success" @click="goToCat()"
          >Enregistre et retourne aux catégories</b-button
        >
        <b-alert
          :show="dismissCountDown3"
          dismissible
          fade
          variant="warning"
          @dismiss-count-down="countDownChanged3"
        >
          tu n'as pas ajouté l'article à ta liste...!
        </b-alert>
      </div>
      <b-input
        type="text"
        v-model="freeListData"
        placeholder="Ecris tes articles ici"
      ></b-input>
      <b-alert
        :show="dismissCountDown1"
        dismissible
        fade
        variant="warning"
        @dismiss-count-down="countDownChanged1"
      >
        Tu n'as pas mis d'article...!
      </b-alert>
      <div>
        <input
          class="qtysize"
          type="text"
          v-model="qty"
          placeholder="Quantité"
        />
        <b-alert
          :show="dismissCountDown2"
          dismissible
          fade
          variant="warning"
          @dismiss-count-down="countDownChanged2"
        >
          Combien tu en veux...?
        </b-alert>
        <b-button variant="success" @click="addToFreeList()"
          >Ajoute à ta liste</b-button
        >
      </div>
    </div>
    <b-table striped hover :items="freeListTab" :fields="fields">
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
          @click="deleteItem(row.index)"
        ></b-icon>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'FreeList',
  data () {
    return {
      selected: [],
      qty: '',
      freeListData: '',
      freeListTab: [],
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
      dismissSecs1: 3,
      dismissCountDown1: 0,
      dismissSecs2: 3,
      dismissCountDown2: 0,
      dismissSecs3: 3,
      dismissCountDown3: 0
    }
  },
  mounted () {
    this.freeListTab = JSON.parse(localStorage.getItem('selected'))
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
    countDownChanged3 (dismissCountDown) {
      this.dismissCountDown3 = dismissCountDown
    },
    showAlert3 () {
      this.dismissCountDown3 = this.dismissSecs3
    },
    addToFreeList () {
      if (this.freeListData === '') {
        this.showAlert1()
      } else {
        this.freeListTab.push({produit: this.freeListData, qty: this.qty})
        this.qty = ''
        this.freeListData = ''
      }
    },
    deleteItem (index) {
      this.freeListTab.splice(index, 1)
    },
    goToCat () {
      if ((this.freeListData !== '' && this.qty !== '') || (this.freeListData !== '') || (this.qty !== '')) {
        this.showAlert3()
      } else {
        localStorage.setItem('selected', JSON.stringify(this.freeListTab))
        this.$router.push({name: 'ManageList'})
      }
    }
  }
}
</script>

<style>
.qtysize{
    width: 130px;
}
  textarea.form-control{
    height: 600px !important;
  }
</style>
