// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import imagesLoaded from 'imagesloaded'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// imagesLoaded('.grid', (e) => {
//   console.info('Images Loaded Successfully!');
//   let items = document.querySelectorAll('.grid-item');
//   for(let i = 0; i < items.length ; i++){
//     // items[i].querySelector('.loader').style.display = 'none';
//     items[i].querySelector('img').style.display = "inline-block";
//   }
// });

// imagesLoaded('.grid-item', function() {
//   console.info('Images Loaded Successfully!');
//   let items = document.querySelectorAll('.grid-item');
//   for(let i = 0; i < items.length ; i++){
//     items[i].querySelector('img').style.display = "block";
//   }
// });
