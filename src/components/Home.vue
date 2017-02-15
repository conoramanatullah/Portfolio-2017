<!-- Home Page -->
<template lang="html">
  <div id="home">
    <div id="splash">
      <h1>Splash Page</h1>
    </div>
    <div class="header">
      <i class="fa fa-bars" aria-hidden="true"></i>
    </div>
    <div class="grid">
      <router-link to="/about" class="grid-item grid-item--width2" id="grid-about-me">
        <div class="text">About me</div>
        <div  class="caption" v-on:mouseover="brighten('#home .grid #grid-about-me img')" v-on:mouseout="darken('#home .grid #grid-about-me img')">
          <hr>
          <div class="secondary">A short biography.</div>
        </div>

        <img src="../assets/images/header.jpg" alt="">
      </router-link>
      <router-link  to="/skills"class="grid-item" id="grid-gallery">
        <div class="text">Skillset</div>
        <div  class="caption" v-on:mouseover="brighten('#home .grid #grid-gallery img')" v-on:mouseout="darken('#home .grid #grid-gallery img')">
          <hr>
          <div class="secondary">What I think I'm good at</div>
        </div>
        <img src="../assets/images/snippet-2.jpg" alt="">
      </router-link>
      <router-link to="mars-oasis" class="grid-item" id="grid-mars-oasis">
        <div class="text">MarsOASIS</div>
        <div  class="caption" v-on:mouseover="brighten('#home .grid #grid-mars-oasis img')" v-on:mouseout="darken('#home .grid #grid-mars-oasis img')">
          <hr>
          <div class="secondary">An Ionic Project</div>
        </div>
        <!-- <div class="tag">Project</div> -->
        <img src="../assets/images/marsoasis-large.jpg" alt="" >
      </router-link>
      <router-link to="vr" class="grid-item grid-item--width2" id="grid-vr">
        <div class="text">Nightmare VR</div>
        <div  class="caption" v-on:mouseover="brighten('#home .grid #grid-vr img')" v-on:mouseout="darken('#home .grid #grid-vr img')">
          <hr>
          <div class="secondary">A First Person Unity VR Project</div>
        </div>
        <img src="../assets/images/vr-3.jpg" alt="">
      </router-link>
      <router-link to="esports" class="grid-item grid-item--width2" id="grid-esports">
        <div class="text">CU eSports</div>
        <div  class="caption" v-on:mouseover="brighten('#home .grid #grid-esports img')" v-on:mouseout="darken('#home .grid #grid-esports img')">
          <hr>
          <div class="secondary">An AngularJS Project</div>
        </div>
        <img src="../assets/images/esports-1.jpg" alt="">
      </router-link>
      <router-link to="webgl" class="grid-item" id="grid-webgl">
        <div class="text">WebGL</div>
        <div  class="caption" v-on:mouseover="brighten('#home .grid #grid-webgl img')" v-on:mouseout="darken('#home .grid #grid-webgl img')">
          <hr>
          <div class="secondary">A THREE.js Experiment</div>
        </div>
        <img src="../assets/images/webgl-1.jpg" alt="">
      </router-link>
      <router-link to="countdown" class="grid-item" id="grid-countdown">
        <div class="text">Countdown</div>
        <div  class="caption" v-on:mouseover="brighten('#home .grid #grid-countdown img')" v-on:mouseout="darken('#home .grid #grid-countdown img')">
          <hr>
          <div class="secondary">A Gift To Kaitlin</div>
        </div>
        <img src="../assets/images/countdown-1.jpg" alt="">
      </router-link>
      <router-link to="" class="grid-item grid-item--width2" id="grid-matrix">
        <div class="text">Matrix Project</div>
        <div  class="caption" v-on:mouseover="brighten('#home .grid #grid-matrix img')" v-on:mouseout="darken('#home .grid #grid-matrix img')">
          <hr>
          <div class="secondary">A Venture in Product Design and Rendering</div>
        </div>
        <img src="../assets/images/CountdownBox/raspberri.jpg" alt="">
      </router-link>
      <gallery> </gallery>
  </div>
</template>

<script>
  import imagesLoaded from 'imagesloaded'
  import Gallery from './Gallery'

  export default {
    name: 'home',
    data() {
      return {

      }
    },
    components: {
      gallery: Gallery
    },
    // NEEDS CHANGED BC THIS DOESNT GET CALLED ON A SERVER
    mounted: function() {

      function closeItem(query){
        document.querySelector(query).style.display = "none";
      };

      // Once all images are done loading, they must be activated
      imagesLoaded('.grid-item', () => {
        // Grab all grid items
        let items = document.querySelectorAll('.grid-item');
        // Transform list into array
        let itemsArray = Array.from(items);
        // Mapping applies style to all elements, as default is none
        itemsArray.map( (item) =>{
          item.querySelector('img').style.display = 'block';
        });
        // Close the splash screen
        closeItem('#splash');
      });

    },
    methods: {
      brighten: function(query){
        document.querySelector(query).style.filter = 'brightness(80%)'
      },
      darken: function(query){
        document.querySelector(query).style.filter = 'brightness(20%)'
      }
    }
  }
</script>

<style lang="scss" scoped>

  // Global Variables
  $break-xs       : 600px;
  $break-sm       : 960px;
  $break-md       : 1280px;
  $break-lg       : 1920px;
  $break-xl       : 2920px;
  $hoverStatus: 1.5em;
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
  router-link{
    &:hover{
      cursor: alias;
    }
  }
  hr {
    padding: 0;
    margin: -8px;
    width: 0;
    border: 4px solid;
    @include md-transition-all;
  }

  // Local Selectors
  #home {


    // overflow-x: hidden;
    padding: 0px;
    @include md-transition-all;
    margin-left: 15vw;
    @include xs {
      margin-left: 0px;
    }
    #splash {
      z-index: 100;
      width: 100vw;
      height: 100vh;
    }
    .header {
      @include md-transition-all;
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 11;
      // margin-bottom: 6vh;
      display: none;
      height: 6vh;
      @include xs {
        display: flex;
      }
      i {
        color: white;
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
    padding-left: 1vw;
    padding-top: 1vw;
    overflow: hidden;
    @include xl {
      width: 80vw;
    }
    @include lg {
      width: 80vw;
    }
    @include sm {
      width: 100%;
    }
    @include xs{
      margin-left: 0px;
      padding: 0;
    }
    .grid-item {
      // display: none;
      position: relative;
      // margin:5px;
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
        margin: 0px;
        width: 50vw;
        height: 50vw;
      }
      .text {
        font-size: 2em;
        font-weight: 300;
        color: white;
        text-align: center;
        z-index: 6;
        margin: auto;
        position: absolute;
        line-height: 20vw;
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
        // @include md-shadow;
      }
    }
    .grid-item--width2 {
      width: calc(40vw + 0px);
      @include md {
        width: calc(66vw + 10px);
      }
      @include sm {
        width: calc(66vw + 10px);
      }
      @include xs {
        width: calc(100vw);
      }
    }

    .tag {
      color: #33F8FF;
      font-weight: 200;
      position: absolute;
      z-index: 10;
      top: 20px;
      right: 20px;
      padding: 10px;
      @include xs{
        display: none;
      }
    }

    @mixin grid-image {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      img {
        display: none;
        @include noselect;
        position: relative;
        flex-shrink: 0;
        max-width: 100%;
        min-height: 100%;
        z-index: 4;
        filter: brightness(20%);
        @include md-transition-all;
        &:hover{
          filter: brightness(100%);
        }
      }
    }

    @mixin grid-caption {
      .caption {
        // font-family: $openSans;
        font-size: 2em;
        font-weight: 300;
        color: white;
        position: absolute;
        height: 99%;
        z-index: 9;
        bottom: 0;
        left: 0;
        width: 100%;
        // padding: 20px;
        @include xs {
          // top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          height:99%;
        }


        .secondary {
          // padding-left: 20px;
          z-index: 6;
          padding: 20px;
          font-size: .5em;
          position: absolute;
          width: auto;
          right: 0;
          bottom: 0;
          @include md-transition-all;
          color: rgba(0,0,0,0);
          @include xs {display: none;}
          // display: inline;
        }
        .bar {
          position: absolute;
          z-index: 5;
          width: 100%;
          height: 100%;
          left:0;
          bottom: 0px;
          text-align: center;
          // background-color: rgba(0,0,0,0.1);
          // padding-right: 100%;
          @include md-transition-all;
          @include xs {display: none;}
        }
        // height: 20%
        @include md-transition-all;
        &:hover {
          hr {
            width: 100%;
            color: rgb(51, 248, 255)

          }
          .secondary {
            color: white;
          }

        }

        @include sm {font-size: 1.5em;}
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

  // .loader {
  //   position: absolute;
  //   bottom: 0;
  //   height: 2px;
  //   width: 10px;
  //   background-color: yellow;
  //   z-index: 11;
  // }

</style>
