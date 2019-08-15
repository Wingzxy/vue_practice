<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
<!--    <HelloWorld msg="这么吊的吗"/>-->
    <router-view msg="这么吊的吗"></router-view>
    <img alt="car" src="./assets/汽车街景.jpg" width="200" height="300">
<!--    <PersonTable/>-->

<!--    <GoodList/>-->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import PersonTable from "./components/Table.vue";
// import GoodList from "@/components/GoodList";

export default {
  name: 'app',
  components: {
    // HelloWorld,
    // PersonTable,
    // GoodList
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
