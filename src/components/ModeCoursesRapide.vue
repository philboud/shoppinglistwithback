<template>
  <div>
    <div class="returnbutt">
      <b-button @click="goToMenu()">Retour</b-button>
    </div>
    <div class="container">
      <div class="subtitle">
        <h4>C'est parti pour les courses rapides!!!</h4>
      </div>
      <b-table :fields="fields" :items="selectedFast">
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
  name: 'ModeFastCourse',
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
      selectedFast: [],
      products: [],
      selectedTemp: [],
      freeList: ''
    }
  },
  mounted () {
    this.selectedFast = JSON.parse(localStorage.getItem('selectedFast'))
  },
  methods: {
    goToMenu () {
      this.$router.push({name: 'ManageList'})
    },
    deleteItem (index) {
      this.selectedFast.splice(index, 1)
      if (this.selectedFast.length === 0) {
        this.visible = true
      }
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
.mystyle{
    background-color: red;
}
</style>
