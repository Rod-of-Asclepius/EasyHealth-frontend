<template>
<div>
  <navigation></navigation>
  <second></second>
</div>

</template>


<script>
import second from "../components/hospital/Second";
import Navigation from '../components/Navigation';
export default {
  name: "Hospital",
  components:{second,Navigation}
}
</script>

<style scoped>

</style>