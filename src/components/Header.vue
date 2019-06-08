<template>
  <div>
    <el-row type="flex" class="row-bg" justify="space-between">
      <div class="arrow" @click='handlecli'>
        <i class="el-icon-back"></i>
      </div>
      <div class="right">admin 超级管理员 退出</div>
    </el-row>
  </div>
</template>

<script>
export default {
    methods:{
        handlecli(){
            console.dir(this.$emit)
            this.$emit('click')
        }
    }
};
</script>
<style>
    .arrow{
        cursor: pointer;
    }
</style>
