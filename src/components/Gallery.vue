<template lang="html">
  <div class="gallery-container">
    <!-- Controls -->
    <div class="controls">
      <!-- Change to previous image -->
      <div class="left">

      </div>
      <!-- Change to next image -->
      <div class="right">

      </div>
    </div>
    <!-- Caption -->
    <div class="caption">
      hey
    </div>
    <!-- Image Containers -->
    <div class="previous">

    </div>

    <div class="current">

    </div>

    <div class="next">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props:['images','captions','slideshow'],
  data() {
    return {
      index: 0
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
      // Called when right button is pressed

    },
    prev: function  () {

    },
    runSlideshow: function  () {

    }

  }
}
</script>

<style lang="scss" scoped>
  .gallery-container{
    width:20vw;
    height: 20vw;
    margin: 5px;
    overflow: hidden;
    background-color: #2E2E2E;
    .controls {
      .left {

      }
      .right {

      }

    }
    .caption {

    }
    .previous {

    }
    .current {

    }
    .next {

    }
  }
</style>
