<template>
  <div>
    <div class="subtitle">
      <p>
        Créé ta liste à partir des catégories en cliquant dans celle de ton
        choix
      </p>
    </div>
    <div class="listcentrage">
      <ul id="listcat" v-for="item in images" :key="item.image">
        <li @click="goToCategory(item)">
          <b-avatar size="120px" square
            ><b-img
              :src="require('../assets/imagescat/' + item.image + '.jpg')"
            ></b-img
          ></b-avatar>
        </li>
      </ul>
      <div class="listbutt">
        <b-button @click="goToList()">Retour</b-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ListeCreat',
  data () {
    return {
      articles: '',
      listeEnCours: [],
      pathImage: '../assets/imagescat/',
      images: [
        {image: 'viandes'},
        {image: 'legumes'},
        {image: 'epicerie'},
        {image: 'poissonnerie'},
        {image: 'hygiene'},
        {image: 'linges'},
        {image: 'puericulture'},
        {image: 'entretien'},
        {image: 'animalerie'}
      ]
    }
  },
  mounted () {
    this.listeEnCours = JSON.parse(localStorage.getItem('selected'))
  },
  methods: {
    goToList () {
      this.$router.push({name: 'ManageList'})
    },
    goToCategory (item) {
      if (item.image === 'epicerie') {
        this.$router.push({name: 'Epicerie'})
      }
      if (item.image === 'entretien') {
        this.$router.push({name: 'ProdMenag'})
      }
      if (item.image === 'viandes') {
        this.$router.push({name: 'Viandes'})
      }
      if (item.image === 'legumes') {
        this.$router.push({name: 'FruitLeg'})
      }
      if (item.image === 'poissonnerie') {
        this.$router.push({name: 'Poissonnerie'})
      }
      if (item.image === 'hygiene') {
        this.$router.push({name: 'HygieneCorps'})
      }
      if (item.image === 'linges') {
        this.$router.push({name: 'Linge'})
      }
      if (item.image === 'puericulture') {
        this.$router.push({name: 'Puericulture'})
      }
      if (item.image === 'animalerie') {
        this.$router.push({name: 'Pets'})
      }
    }
  }
}
</script>
<style>
.freeType{
  margin: 0 auto;
  width: 122px;
  margin-bottom: 20px;
}
.listbutt{
  margin: 0 auto;
  text-align: center;
  width: 200px;
}
.listcentrage{
  margin: 0 auto;
  Width: 400px;
}
#listcat{
  padding-left: 10px;
  list-style: none;
  display: inline-table;
}
</style>
