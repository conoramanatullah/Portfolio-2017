<!-- Home Page -->
<template lang="html">
  <div id="webgl">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: "Webgl Page loaded",
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  #webgl{
    color: white;
    margin-left: 15vw;
  }
</style>
