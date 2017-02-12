
<template lang="html">
    <div id="about">
      <div class="header">
        <img src="../assets/images/about-me.png" alt="">
      </div>
      <div class="page">
        <div class="wrapper">
          <div class="loader">
            <div class="bar"></div>
          </div>
          <div class="greeting">Hi.</div>
          <hr>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </div>
      </div>
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
// Global Variables
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
@mixin md-transition-all {
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }
  #about{
    color: white;
    margin-left: 15vw;
    width: 100%;
    height: 100%;
    padding: 0;
    @include md-transition-all;
    @include xs {
      margin-left: 0px;
    }
  }
  .header {
    width: 100%;
    height: 50vh;
    background-color: grey;
    overflow: hidden;
    img {
      // object-fit: cover;
      width: 100%;
      // margin-top: -20vh;
    }
  }
  .page {
    width: 100%;
    height: 100vh;
    margin: 0;
    background-color: white;
    color: black;
    .wrapper {
      margin: 0 auto;
      width: 33vw;
      height: 100%;
      .greeting {
        font-size: 5em;
      }
      @include md {
        width: 50vw;
      }
      @include xs {
        width: 100vw;
      }
    }
  }

  .loader {
    width: 100%;
    height: 10px;
    background-color: #f3f3f3;
    // border: 10px solid #f3f3f3;
    // animation: load 3s linear infinite;
    .bar {
      height: 100%;
      width: 100%;
      background-color: lightBlue;
      // animation: load 3s cubic-bezier infinite;
      @include md-transition-all;

    }
    @keyframes load {
      // 0% { width: 1% }
      // 100% { width: 100% }

    }
  }


</style>
