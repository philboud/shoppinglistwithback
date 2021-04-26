<template>
  <div>
    <div class="subtitle">
      <p>
        Créé ta liste rapide en choisissant tes produits habituels. si ils ne sont
        pas dedans tu peux les créer
      </p>
    </div>
    <div class="newProd">
      <b-input
        v-model="newProd"
        type="text"
        placeholder="Ajoute ici un produit pas dans ta liste perso"
      />
      <b-button variant="success" @click="saveNewProd()">Ok</b-button>
    </div>
    <div class="buttonSave">
      <b-button class="mt-3" variant="success" @click="saveListPerso()"
        >Enregistre et retourne aux listes</b-button
      >
    </div>
    <div class="selectItem">
      <b-table striped hover :items="globalListe" :fields="fields">
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
  name: 'Parametrages',
  data () {
    return {
      fields: [ {
        key: 'value',
        label: 'Produits'
      },
      {
        key: 'checkbox',
        label: ''
      }
      ],
      checked: false,
      listePerso: [],
      global: [],
      globalListe: [],
      listePersoNew: [],
      newProd: ''

    }
  },
  mounted () {
    this.listePersoNew = JSON.parse(localStorage.getItem('listePersoNew'))
    this.listePerso = JSON.parse(localStorage.getItem('listePerso'))
    var testArrayGlobalState = JSON.parse(localStorage.getItem('global'))
    testArrayGlobalState.length >= 1
      ? this.globalListe = JSON.parse(localStorage.getItem('global'))
      : localStorage.setItem('global', JSON.stringify(this.global))
    this.globalListe = this.listePersoNew.concat(testArrayGlobalState)
  },
  methods: {
    clickRow ($event, item, index) {
      if ($event === true) {
        this.globalListe.slice(index, 1)
        this.globalListe.slice(index, 1, {'text': item.text, 'value': item.value, 'checked': true})
        this.listePerso.push({'text': item.text, 'value': item.value})
      } else {
        this.listePerso = []
        for (var i = 0; i < this.globalListe.length; i++) {
          if (this.globalListe[i].checked === true) {
            this.listePerso.push(this.globalListe[i])
          }
        }
      }
    },
    saveNewProd () {
      this.listePersoNew.push({'value': this.newProd, 'text': this.newProd})
      this.globalListe = this.listePersoNew.concat(this.globalListe)
      this.newProd = ''
    },
    saveListPerso () {
      localStorage.setItem('global', JSON.stringify(this.globalListe))
      localStorage.setItem('listePerso', JSON.stringify(this.listePerso))
      this.$router.push({name: 'EssentielList'})
    }
  }
}
</script>
<style>
.newProd{
  display: flex;
  margin: 0 auto;
  width: 390px;
}
.textExpl{
  margin: 0 auto;
  width: 350px;
}
.selectItem{
  margin-top: 80px;
}
li{
  list-style: none;
  }
</style>
