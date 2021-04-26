<template>
  <div>
    <div class="corpus">
      <div class="subtitle">
        <p>Choisis ton type de liste</p>
      </div>
      <div class="create">
        <div id="container">
          <div class="item">
            <p>Par catégorie</p>
            <b-img
              :src="require('../assets/cat.jpg')"
              fluid
              alt="liste"
              @click="gotoListCrea()"
            ></b-img>
          </div>
          <div class="item">
            <p>Liste libre</p>
            <b-img
              :src="require('../assets/liste.jpg')"
              fluid
              alt="liste"
              @click="gotoFreeList()"
            ></b-img>
          </div>
          <div class="item">
            <p>Liste rapide</p>
            <b-img
              :src="require('../assets/roadrunner.jpg')"
              fluid
              alt="liste"
              @click="gotoFastList()"
            ></b-img>
          </div>
        </div>
      </div>
      <div class="look">
        <div>
          <b-button class="butt" @click="goToList()" variant="primary"
            >Voir la liste par catégorie ou libre</b-button
          >
        </div>
        <div>
          <b-button class="butt" @click="goToFastList()" variant="primary"
            >Voir la liste rapide</b-button
          >
        </div>
      </div>
      <div class="look">
        <div>
          <b-button class="butt" @click="goToCourses()" variant="primary"
            >Passe en mode grosses courses</b-button
          >
        </div>
        <div class="look">
          <b-button class="butt" @click="goToFastCourses()" variant="primary"
            >Passe en mode courses rapides</b-button
          >
        </div>
      </div>
      <div class="look">
        <div class="supp">
          <b-button class="butt" @click="suppList()" variant="primary"
            >supprimer la grosse liste</b-button
          >
          <div class="alert">
            <b-alert
              :show="dismissCountDown1"
              fade
              variant="success"
              @dismiss-count-down="countDownChanged1"
            >
              Supprimé!
            </b-alert>
            </div>
        </div>
        <div class="supp">
          <b-button class="butt" @click="suppFastList()" variant="primary"
            >supprimer la liste rapide</b-button
          >
           <div class="alert">
            <b-alert
              :show="dismissCountDown2"
              fade
              variant="success"
              @dismiss-count-down="countDownChanged2"
            >
              Supprimé!
            </b-alert>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManageList',
  data () {
    return {
      selected: [],
      selectedFast: [],
      dismissSecs1: 1,
      dismissCountDown1: 0,
      dismissSecs2: 1,
      dismissCountDown2: 0
    }
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
    gotoListCrea () {
      this.$router.push({ name: 'ListeCreat' })
    },
    goToList () {
      this.$router.push({name: 'Liste'})
    },
    goToFastList () {
      this.$router.push({name: 'ListeFast'})
    },
    gotoFreeList () {
      this.$router.push({name: 'FreeList'})
    },
    gotoFastList () {
      this.$router.push({name: 'EssentielList'})
    },
    goToCourses () {
      this.$router.push({name: 'ModeCourses'})
    },
    goToFastCourses () {
      this.$router.push({name: 'ModeFastCourse'})
    },
    suppList () {
      localStorage.removeItem('selected')
      localStorage.setItem('selected', JSON.stringify(this.selected))
      this.showAlert1()
    },
    suppFastList () {
      localStorage.removeItem('selectedFast')
      localStorage.setItem('selectedFast', JSON.stringify(this.selectedFast))
      this.showAlert2()
    }
  }
}
</script>
<style>
.layus {
  margin-top: 20px;
  text-align: center;
}
#container{
  margin: 0 auto;
  width: 400px;
  display: flex;
}
.item {
  background-color: rgb(236, 174, 223);
  margin-left: 9px;
  order: 5; /* default is 0 */
}
.corpus{
  margin-top: 20px;
  text-align: center;
}
.look{
  display: inline-flex;
}
.butt {
  max-width: 150px;
  min-height: 90px;
  margin-left: 10px;
  margin-top: 20px;
}
.alert{
  max-width: 150px;
}
</style>
