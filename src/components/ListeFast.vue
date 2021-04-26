<template>
  <div>
    <div class="pdfbutt">
      <b-button @click="generatePdf()">Imprimer</b-button>
      <b-button v-if="!visible" @click="modifList()">Modifie</b-button>
      <b-button @click="goBackMenu()">Retour</b-button>
    </div>
    <div class="container">
      <div>
        <h4>Ta p'tite liste des courses rapides!!!</h4>
      </div>
      <b-table
        id="products"
        striped
        hover
        :fields="fields"
        :items="selectedFast"
      >
        <template v-if="visible" v-slot:cell(produit)="row">
          <b-form-input v-model="row.item.produit" />
        </template>
        <template v-if="visible" v-slot:cell(qty)="row">
          <b-form-input v-model="row.item.qty" />
        </template>
        <template v-if="visible" v-slot:cell(action)="row">
          <b-icon
            icon="trash"
            style="width: 30px; height: 30px"
            @click="deleteItem(row.index)"
          ></b-icon>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import JSPDF from 'jspdf'
import 'jspdf-autotable'

export default {
  name: 'ListeFast',
  data () {
    return {
      visible: false,
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
      listePerso: [],
      selectedFast: [],
      selectedTmp: [],
      dismissSecs1: 4,
      dismissCountDown1: 0
    }
  },
  mounted () {
    this.listePerso = JSON.parse(localStorage.getItem('listePerso'))
    this.selectedFast = JSON.parse(localStorage.getItem('selectedFast'))
  },
  methods: {
    modifList () {
      this.$router.push({name: 'EssentielList'})
    },
    goBackMenu () {
      this.$router.push({name: 'ManageList'})
    },
    generatePdf () {
      const doc = new JSPDF({
        orientation: 'p',
        unit: 'mm',
        format: [297, 210]
      })
      doc.text('liste de courses', 10, 10)
      doc.autoTable({html: '#products'})
      doc.save('liste_de_courses.pdf')
    }
  }
}
</script>

<style>
.pdfbutt{
  text-align: center;
  margin: 0 auto;
  width: 280px;
}
</style>
