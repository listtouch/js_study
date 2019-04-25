<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="msg" title="这是一个标题"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  data:function(){
      return {
        msg:"你好呀"
      }
  },
  name: 'app',
  created:function(){
      console.log("created");
  },

  mounted:function(){
      console.log("mounted");
  },
  updated:function() {
      console.log("updated");
  },
  components: {
    HelloWorld
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
