<!-- Home Page -->
<template lang="html">
  <div id="home">
    <div class="grid">
      <router-link to="/about" class="grid-item grid-item--width2" id="grid-about-me">
        <div class="caption">About me</div>
        <img src="../assets/images/about-me.png" alt="">
        <div class="overlay"></div>
      </router-link>
      <router-link  to="/skills"class="grid-item" id="grid-gallery">
        <div class="caption">Skills</div>
        <img src="../assets/images/snippet-2.jpg" alt="">
        <div class="overlay"></div>
      </router-link>
      <router-link to="mars-oasis" class="grid-item" id="grid-mars-oasis">
        <div class="caption">MarsOASIS</div>
        <div class="tag">Project</div>
        <img src="../assets/images/marsoasis-large.png" alt="" >
        <div class="overlay"></div>
      </router-link>
      <router-link to="esports" class="grid-item grid-item--width2" id="grid-esports">
        <div class="caption">eSports</div>
        <div class="tag">Project</div>
        <img src="../assets/images/esports-1.png" alt="">
        <div class="overlay"></div>
      </router-link>
      <router-link to="vr" class="grid-item grid-item--width2" id="grid-vr">
        <div class="caption">VR</div>
        <div class="tag">Project</div>
        <img src="../assets/images/vr-2.png" alt="">
        <div class="overlay"></div>
      </router-link>
      <router-link to="webgl" class="grid-item" id="grid-webgl">
        <div class="caption">WebGL</div>
        <div class="tag">Project</div>
        <img src="../assets/images/webgl-1.jpg" alt="">
        <div class="overlay"></div>
      </router-link>
      <router-link to="countdown" class="grid-item" id="grid-countdown">
        <div class="caption">Countdown</div>
        <div class="tag">Project</div>
        <img src="../assets/images/countdown-1.jpg" alt="">
        <div class="overlay"></div>
      </router-link>
      <router-link to="" class="grid-item grid-item--width2" id="grid-matrix">
        <div class="caption">Matrix Project</div>
        <div class="tag">Project</div>
        <img src="../assets/images/CountdownBox/raspberri.png" alt="">
        <div class="overlay"></div>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: "Home Page loaded",
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  $break-xs       : 600px;
  $break-sm       : 960px;
  $break-md       : 1280px;
  $break-lg       : 1920px;
  $break-xl       : 2920px;
  @mixin xs {
    @media (max-width: #{$break-xs - 1px}) {
      @content;
    }
  }
  @mixin sm {
    @media (max-width: #{$break-sm - 1px}) {
      @content;
    }
  }
  @mixin md {
    @media (max-width: #{$break-md - 1px}) {
      @content;
    }
  }
  @mixin lg {
    @media (max-width: #{$break-lg - 1px}) {
      @content;
    }
  }
  @mixin xl {
    @media (max-width: #{$break-xl - 1px}) {
      @content;
    }
  }
  @mixin md-transition-all {
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }
  @mixin md-shadow {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
  @mixin noselect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */



  }
  #home {
    padding: 0px;
    @include md-transition-all;
    margin-left: 15vw;
    @include xs {
      margin-left: 0px;
    }
    header {

          position: relative;
          display: none;
          @include xs {
            display: flex;
            // text-align: center;
          }
          i {
            color: #33F8FF;
            font-size: 38px;
            display: none;
            //Hide Button on larger screens
            @include xs {
              display: inline-block;
            }
            @include noselect;

          }
          padding-left: 2vw;
          padding-top: 2vw;
          padding-bottom: 2vw;
          span {
            position: absolute;
            font-size: 1.8em;
            font-weight: 200;
            color: white;
            right: 4vw;
            @include noselect;

          }
        }//End Header
  }

  .grid {

  width: 100vw;
  height: 100%;
  margin-left: 10vw;
  margin: 0 auto;
  padding-top: 4vw;
  padding-left: 4vw;
  @include xl {
    width: 80vw;
  }
  @include lg {
    width: 80vw;
  }
  @include md{
  }
  @include sm{
    // margin-left: 0px;
    width: 100%;
  }
  @include xs{
    margin-left: 0px;
    padding: 0;
  }
  .grid-item {
    display: inline-block;
    position: relative;
    margin:5px;
    float: left;
    width: 20vw;
    height: 20vw;
    // background-color: #BEBEBE;
    @include md-transition-all;

    // @include md-shadow;
    // Responsive attributes

    @include md {
      width: 33vw;
      height: 33vw;
    }
    @include sm {
      width: 33vw;
      height: 33vw;
    }
    @include xs {
      margin: 2px;
      width: 45vw;
      height: 45vw;
    }
    .wrapper {
      z-index : 10;
      position : absolute;
      top : 0;
      left : 0;
      background-color: yellow;
    }

    &:hover {
      @include xs {

      }
      cursor: pointer;
      @include md-shadow;
    }
  }
  .grid-item--width2 {
    width: calc(40vw + 10px);
    @include md {
      width: calc(66vw + 10px);
    }
    @include sm {
      width: calc(66vw + 10px);
    }
    @include xs {
      width: calc(90vw + 4px);
    }
  }
  // overlay
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: hsla(0,0,18,0.7);
    // background: #606060;
    z-index: 9;
    &:hover {
      background: hsla(0,0,18,0.5);
    }
    @include md-transition-all;
  }
  .tag {
    color: #33F8FF;
    font-weight: 200;
    position: absolute;
    z-index: 10;
    bottom: 0;
    left: 0;
    padding: 10px;
  }
  // Grid Classes
  // Global grid options
  @mixin grid-image {

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img {
      @include noselect;
      position: relative;
      flex-shrink: 0;
      max-width: 100%;
      min-height: 100%;
      z-index: 4;
    }
  }
  @mixin grid-caption {
    .caption {
      // font-family: $openSans;
      font-size: 2.5em;
      font-weight: 200;
      color: white;
      position: absolute;
      z-index: 10;
      @include sm {
        font-size: 1.7em;
      }
      @include noselect;

    }
  }
  #grid-about-me {
    @include grid-image;
    @include grid-caption;
  }
  #grid-gallery {
    @include grid-image;
    @include grid-caption;

  }
  #grid-mars-oasis {
    @include grid-image;
    @include grid-caption;

  }
  #grid-esports {
    @include grid-image;
    @include grid-caption;
  }
  #grid-vr {
    @include grid-image;
    @include grid-caption;
  }
  #grid-webgl {
    @include grid-image;
    @include grid-caption;
  }
  #grid-countdown {
    @include grid-image;
    @include grid-caption;
  }
  #grid-matrix {
    @include grid-image;
    @include grid-caption;
  }
}//END grid
</style>
