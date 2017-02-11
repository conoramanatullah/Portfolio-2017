
<template lang="html">
  <div id="about">
    <h1>About Me</h1>
  </div>
</template>

<script>

export default {
  name: 'about',
  data() {
    return {
      msg: "About Page loaded",
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  @mixin md-transition-all {
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }
  #about{
    color: white;
    margin-left: 15vw;
  }
</style>
