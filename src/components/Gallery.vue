<template lang="html">
  <div class="gallery-container">
    <!-- Controls -->
    <div class="controls">
      <div class="left" v-on:click="prev()"></div>
      <div class="right" v-on:click="next()"></div>
    </div>
    <!-- Caption -->
    <div class="caption">

    </div>
    <!-- Image Containers -->
    <div class="images" id="images">
      <!-- <div class="imagebox previous">
        <img src="../assets/images/avatar.jpg" alt="">
      </div> -->

      <div class="imagebox current">
        <img :src="img" alt="">
      </div>

      <!-- <div class="imagebox next">
        <img src="../assets/images/avatar.jpg" alt="">
      </div> -->
    </div>

  </div>
</template>

<script>
export default {
  name: 'Gallery',
  // props:['images','captions','slideshow'],
  data() {
    return {
      index: 0,
      img: "../assets/images/avatar.jpg",
    }
  },
  computed: {
    slides: function () { let i = this.images; return Array.from(i) },
    cpts: function ()  { let c = this.captions; return Array.from(c) },
    slsh: function () { let b = this.slideshow; return b},
    CURRENT_CONTAINER: function () { return document.querySelector('.current') },
    PREV_CONTAINER: function () { return document.querySelector('.previous') },
    NEXT_CONTAINER: function () { return document.querySelector('.next') }
  },
  methods: {
    getIndex: function () { return this.index },

    getNext: function () { let n = this.index + 1;
                          return this.slides[n] },

    getPrev: function () { let p = this.index - 1;
                          return this.slides[p] },

    next: function () {
      let el = document.querySelector('.gallery-container #images');
      // Build image to right, transition, and delete previous



    },
    prev: function  () {
      let el = document.querySelector('.gallery-container #images');

    },
    runSlideshow: function  () {

    }

  }
}
</script>

<style lang="scss" scoped>
@mixin md-transition-all {
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
  .gallery-container{
    width:20vw;
    height: 20vw;
    overflow: hidden;
    background-color: #2E2E2E;
    .controls {
      display: flex;
      height: 20vw;
      width: 20vw;
      padding: 0;
      margin: 0;
      position: absolute;
      z-index: 10;
      .left {
        width: 50%;
        @include md-transition-all;
        &:hover{
          cursor: pointer;
          // background-color: white;
        }
      }
      .right {
        width: 50%;
        @include md-transition-all;
        &:hover{
          cursor: pointer;
          // background-color: white;
        }
      }

    }
    .caption {

    }
    .images {
      display: flex;
      width: 100%;
      margin-right: 40vw;
      right: 0;
      // position: absolute;
      @include md-transition-all;
      img {
        max-width: 100%;
      }
    }
    .imagebox {

    }
  }
</style>
