<template>
    <div>
    <b-form-checkbox v-model="checked1" @change="testColor()" name="check-button" switch>
      Fond bleu
    </b-form-checkbox>
    </div>
</template>
<script>
export default {
  name: 'ParamAppear',
  data () {
    return {
      checked1: ''
    }
  },
  methods: {
    testColor () {
      var root = document.documentElement
      if (this.checked1 === true) {
        root.style.setProperty('--main-color', 'rgb(162, 209, 238)')
      } if (this.checked1 === false) {
        root.style.setProperty('--main-color', 'rgb(236, 212, 230)')
      }
    }
  }
}
</script>
