<template>
  <div>
    <div class="alignDiv">
      <div class="subtitle">
        <h5>Fais ta liste rapide en cochant tes produits</h5>
      </div>
      <div class="itemRunner">
        <b-img
          :src="require('../assets/roadrunner.jpg')"
          fluid
          alt="liste"
          @click="gotoFastList()"
        ></b-img>
      </div>
    </div>
    <div>
      <div class="buttonSave">
        <b-button variant="success" @click="goToCat()">Enregistre</b-button>
      </div>
    </div>
    <div class="tablePosition">
      <b-table
        id="products"
        striped
        hover
        :items="essentielsTab"
        :fields="fields"
      >
        <template v-slot:cell(checkbox)="row">
          <b-form-checkbox
            v-model="row.item.checked"
            @change="clickRow($event, row.item, row.index)"
          ></b-form-checkbox>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'EssentielList',
  data () {
    return {
      qty: '',
      fastListTab: [],
      listePerso: [],
      listePersoNew: [],
      selectedFastFast: [],
      liste: [],
      fields: [ {
        key: 'value',
        label: 'Produits'
      },
      {
        key: 'checkbox',
        label: ''
      }
      ],
      essentielsTab: []
    }
  },
  mounted () {
    this.listePerso = JSON.parse(localStorage.getItem('listePerso'))
    localStorage.removeItem('selectedFast')
    localStorage.setItem('selectedFast', JSON.stringify(this.selectedFast))
    this.essentielsTab = this.listePerso
    if (this.listePerso.length === 0) {
      this.$router.push({name: 'Parametrages'})
    }
    this.essentielsTab = this.listePerso
  },
  methods: {
    clickRow ($event, item, index) {
      if ($event === true) {
        this.essentielsTab.slice(index, 1)
        this.essentielsTab.slice(index, 1, {'text': item.text, 'value': item.value, 'checked': true})
      }
      if ($event === false) {
        this.essentielsTab.slice(index, 1)
        this.essentielsTab.slice(index, 1, {'text': item.text, 'value': item.value, 'checked': false})
      }
    },
    goToCat () {
      for (var j = 0; j < this.essentielsTab.length; j++) {
        if (this.essentielsTab[j].checked === true) {
          this.fastListTab.push({produit: this.essentielsTab[j].text})
        }
      }
      localStorage.setItem('selectedFast', JSON.stringify(this.fastListTab))
      localStorage.setItem('listePerso', JSON.stringify(this.essentielsTab))
      this.fastListTab = []
      this.$router.push({name: 'ListeFast'})
    }
  }
}
</script>

<style>
.tablePosition{
  margin-top: 50px;
}
  .buttonSave{
  position: fixed;
  margin: 0 auto;
  margin-left: 37%;
  margin-top: 0px;
  width: 300px;
}
.alignDiv{
  display: flex;
  margin: 0 auto;
  width: 300px;
}
.itemRunner{
  width: 56px;
}
.qtysize{
    width: 130px;
}
  textarea.form-control{
    height: 600px !important;
  }
</style>
