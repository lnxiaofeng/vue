<template>
  <div id="app">
    <el-switch active-text="按月付费" inactive-text="按年付费"></el-switch>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    var a = this.axios({
      url: "https://api.github.com/users",
      method: "GET",
      params: {
        data: 123
      }
    }).then(res => {});
  }
};
</script>

<style>
</style>
