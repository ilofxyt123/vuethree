// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
var THREE = require('three')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

console.log(1)

console.log(5)

window.onload = function () {
  var scene = new THREE.Scene()
  var render = new THREE.WebGLRenderer()
  var camera = new THREE.PerspectiveCamera()
  render.render(scene, camera)
}
