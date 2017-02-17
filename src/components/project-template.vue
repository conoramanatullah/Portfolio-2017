<template lang="html">
  <div id="project">
    <div class="page">

    </div>
    <div class="content-gallery">
      hey
    </div>
  </div>
</template>

<script>
export default {
  name: 'project',
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
@mixin md-transition-all {
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }
  #project {
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
    .page {
      flex: 1 1 auto;
      width: 70%;
      height: 100%;
      @include xs {
        width: 100%;
      }
    }
    .content-gallery {
      width: 30%;
      height: 100%;
      background-color: blue;
      @include xs {
        width: 100%;
        height: 20%;
      }
    }

  }
</style>
