<template>
  <div class="entete">
    <div class="subtitle">
    <p class="layus">petite app pour créer votre liste de courses</p>
    </div>
    <div class="goMag">
      <b-button class="butt" @click="goToApp()" variant="primary"
        >C'est parti...!</b-button>
        </div>
    <div>
      <b-img :src="require('../assets/panier.png')" class="panierimg"></b-img>
    </div>
  </div>
</template>
<script>
import json from '../../static/global.json'

export default {
  name: 'Accueil',
  data () {
    return {
      selected: [],
      selectedFast: [],
      freeList: [],
      global: [],
      listePerso: [],
      listePersoNew: [],
      essentielTab: []
    }
  },
  mounted () {
    if (localStorage.getItem('global') === null) {
      this.global = (json)
      localStorage.setItem('global', JSON.stringify(this.global))
    }
    if (localStorage.getItem('selected') === null) {
      localStorage.setItem('selected', JSON.stringify(this.selected))
    }
    if (localStorage.getItem('selectedFast') === null) {
      localStorage.setItem('selectedFast', JSON.stringify(this.selectedFast))
    }
    if (localStorage.getItem('freeList') === null) {
      localStorage.setItem('freeList', JSON.stringify(this.freeList))
    }
    if (localStorage.getItem('listePerso') === null) {
      localStorage.setItem('listePerso', JSON.stringify(this.listePerso))
    }
    if (localStorage.getItem('listePersoNew') === null) {
      localStorage.setItem('listePersoNew', JSON.stringify(this.listePersoNew))
    }
    if (localStorage.getItem('essentielTab') === null) {
      localStorage.setItem('essentielTab', JSON.stringify(this.essentielTab))
    }
  },
  methods: {
    goToApp () {
      this.$router.push({path: '/gestionliste'})
    }
  }
}

</script>
<style>
.layus {
  margin-top: 30px;
  margin-bottom: 50px;
  text-align: center;
}
.image{
  text-align: center;
}
.panierimg{
  margin: 0 auto;
  margin-top: 100px;
  max-width: 100%;
  max-height: 100%;
  display: block;
}
.goMag{
  margin: 0 auto;
  width: 120px;
}
.goMag:active{
  transform:  scale(2) rotate(3turn);
   transition: all 200ms ease-in-out;
}
.lievre{
  margin: 0 auto;
  margin-top: 10px;
  width: 80px;
}
</style>
