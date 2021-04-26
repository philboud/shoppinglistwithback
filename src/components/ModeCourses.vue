<template>
  <div>
    <div class="returnbutt">
      <b-button @click="goToMenu()">Retour</b-button>
    </div>
    <div class="container">
      <div class="subtitle">
        <h4>C'est parti pour grosses les courses!!!</h4>
      </div>
      <b-table :fields="fields" :items="selected">
        <template id="products" v-slot:cell(action)="row">
          <b-icon
            icon="basket"
            style="width: 30px; height: 30px"
            @click="deleteItem(row.index)"
          ></b-icon>
        </template>
      </b-table>
      <div class="subtitle" v-if="visible"><h1>Courses terminées!</h1></div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ModeCourse',
  data () {
    return {
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
      visible: false,
      selected: [],
      products: [],
      selectedTemp: [],
      freeList: ''
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    goToMenu () {
      this.$router.push({name: 'ManageList'})
    },
    deleteItem (index) {
      this.selected.splice(index, 1)
      if (this.selected.length === 0) {
        this.visible = true
      }
    },
    getData () {
      this.selected = JSON.parse(localStorage.getItem('selected'))
    }
  }
}
</script>
<style>
.returnbutt{
  margin: 0 auto;
  width: 80px;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
