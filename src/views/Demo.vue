<template>
  <div>
    {{info}}
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "Demo",
    data() {
      return {
        info: ''
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    },
    mounted () {
      axios
        .post('http://api.roa.voiddog.cn/login?username=test&password=test')
        .then(response => (this.info = response))
    }
  }
</script>

<style scoped>

</style>