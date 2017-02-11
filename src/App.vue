<template>
  <div id="app">
    <div id="sidebar">
      <div class="name">
        <div class="first">
          conor
        </div>
        <div class="last">
          amanatullah
        </div>
        <div class="caption">
          developer / musician / creator
        </div>
      </div>
      <div class="links">
        <div class="link" v-on:click="redirect('https://www.github.com/conoramanatullah')">
          <i class="fa fa-github" aria-hidden="true"></i>
          Github
        </div>
        <div class="link" v-on:click="redirect('https://www.linkedin.com/in/conor-amanatullah-7b914897/')">
          <i class="fa fa-linkedin" aria-hidden="true"></i>
          LinkedIn
        </div>
        <div class="link">
          <i class="fa fa-headphones" aria-hidden="true"></i>
          Music
        </div>
        <div class="link">
          <i class="fa fa-paperclip" aria-hidden="true"></i>
          Resume
        </div>
        <div class="link">
          <i class="fa fa-phone" aria-hidden="true"></i>
          Contact
        </div>
      </div>
    </div>
    <!-- Our Route loads here -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: [

  ],
  methods: {
    redirect(path){
      window.location = path;
    }
  }
}
</script>

<style lang="scss">
  // Global Style Imports
  @import url('./assets/css/font-awesome.css');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700');

  // SASS Variables
  $openSans : 'Open Sans', sans-serif;
  $break-xs       : 600px;
  $break-sm       : 960px;
  $break-md       : 1280px;
  $break-lg       : 1920px;
  $break-xl       : 1920px;
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
  @mixin md-shadow {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
  @mixin md-transition-all {
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
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

  // Global Styles
  html {
    background-color: #141414;
    padding: 0px;
  }
  body {
    overflow-x: hidden;
  }
  router-view {
    width: 100%;
    height: 100vh;
  }
  // Local Styles
  #app {
    font-family: $openSans;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
  }
  #sidebar {
    position: fixed;
    left: 0;
    top: 0;
    width: 15vw;
    height: 100vh;
    z-index: 10;
    &:hover {
      background-color: #2E2E2E;
      @include md-shadow;
    }
    .name {
      width: 100%;
      color: white;
      font-weight: 200;
      line-height: 2.1em;
      padding: 15px;
      padding-top: 7vh;
      @include md {
        line-height: 1.5em;
      }
      @include sm {
        line-height: 1.3em;
      }
      .first {
        font-size: 2em;
        @include lg {
          font-size: 1.5em;
        }
        @include md {
          font-size: 1em;
        }
        @include sm {
          font-size: 1em;
        }
      }
      .last {
        font-size: 2.5em;
        @include lg {
          font-size: 2em;
        }
        @include md {
          font-size: 1.5em;
        }
        @include sm {
          font-size: 1.0em;
        }
      }
      .caption {
        font-size: .8em;
        padding-left: 10px;
        @include sm {
          font-size: .5em;
        }
      }
    }
    .links {
      width: 100%;
      height: 500px;
      color: white;
      .link {
        text-align: center;
        font-size: 1.0em;
        font-weight: 200;
        width: 100%;
        height: 40px;
        line-height: 40px;
        @include md-transition-all;
        i {
          position: absolute;
          left: 0;
          line-height: 40px;
          margin-left: 4vw;
          @include lg {
            margin-left: 2vw;
          }
          @include sm {
            display: none;
          }
        }
        &:hover{
          background-color: #33F8FF;
          cursor: pointer;
          color: black;
        }
      }
    }
    @include md-transition-all;
    @include xs {
      margin-left: -15vw;
      display: none;
    }
  }
</style>
