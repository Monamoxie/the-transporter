<template>
    <div class="home">
        <div class="frame">
          <div class="frame__title-wrap">
            <h1 class="frame__title">Infinite Lights</h1>
            <div class="frame__links">
              <a href="https://tympanus.net/Development/webGLImageTransitions/">Previous demo</a>
              <a href="https://tympanus.net/codrops/?p=44516">Article</a>
              <a href="https://github.com/Anemolo/InfiniteLights">GitHub</a>
            </div>
          </div>
          <div class="frame__info">Hint: Press to speed up</div>
          <div class="frame__demos">
            <a href="index.html" class="frame__demo">interstate 1</a>
            <a href="index2.html" class="frame__demo">interstate 2</a>
            <a href="index3.html" class="frame__demo frame__demo--current">interstate 3</a>
            <a href="index4.html" class="frame__demo">interstate 4</a>
            <a href="index5.html" class="frame__demo">interstate 5</a>
            <a href="index6.html" class="frame__demo">interstate 6</a>
            <a href="index7.html" class="frame__demo">interstate 7</a>
          </div>
        </div>
        <div class="content">
          <div id="app"></div>
          <div class="content__title-wrap">
            <span class="content__pretitle">Indy Crossroads</span>
            <h2 class="content__title">Voltage Race</h2>
            <a class="content__link" href="#">Join us</a>
          </div>
        </div>
    </div>
</template>
<style scoped>
  @import '@assets/css/home.css';
</style>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import myKey from '../assets/js/three'
// import myKey2 from '../assets/js/postprocessing'
// import myKey3 from '../assets/js/InfiniteLights'
// import myKey4 from '../assets/js/Distortions'
export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
