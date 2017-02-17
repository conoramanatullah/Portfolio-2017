<template lang="html">
  <div id="project">
    <div class="header">
      <div class="back-button" v-on:click="back()">
        <i class="fa fa-chevron-left fa-1x" aria-hidden="true"></i>
        <span class="">
          Back
        </span>
      </div>
    </div>
    <div class="page">
      <div class="title">
        <div class="avatar">
          <img src="../assets/images/avatar.jpg" alt="">
        </div>
        About me
      </div>

      <hr>
      <div class="intro">
        Hi! My name is Conor Amanatullah and I am a Developer, Maker
        and Musician from Denver, CO.
      </div>
      <div class="">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
    <div class="content-gallery">

    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  methods: {
    back: function(){
      window.history.back();
    }
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
@mixin md-transition-all {
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }
#project {
    @include md-transition-all;
    margin-left: 15vw;
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    color: white;
    @include xs {
      flex-direction: column;
    }
    .header {
      width: 100vw;
      height: 10vh;
      line-height: 5vh;
      padding-left: 5vh;
      position: fixed;
      @include xs {
        padding-left: 10px;
      }
      .back-button {
        cursor: pointer;
      }
    }
    .page {
      @include md-transition-all;
      flex: 1 1 auto;
      width: 70%;
      padding: 100px;
      .title {
        font-size: 3em;
        font-weight: 200;
        margin-bottom: 30px;
        .avatar {
          float: right;
          display: inline;
          margin: 20px;
          width: 15vw;
          height: 15vw;
          overflow: hidden;
          border-radius: 50%;
          img {
            width: 100%;
            min-height: 100%;
          }
          @include sm {
            display: none;

          }
        }
      }

      .intro {
        margin-top: 30px;
        width: 70%;
        @include sm {
          width: 100%;
        }
      }

      @include xs {
        padding: 50px;
      }
    }
    .content-gallery {
      @include md-transition-all;
      width: 30%;
      height: 100%;
      @include xs {
        width: 100%;
        height: 20%;
      }
    }
    @include xs{
      margin-left: 0;
    }
  }
</style>
