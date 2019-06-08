<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#001529"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isShow"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>购物商场</span>
          </template>
          <el-menu-item index="1">
            <span slot="title">商品管理</span>
          </el-menu-item>
          <el-menu-item index="2">
        <span slot="title">栏目管理</span>
      </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
    props:['isShow']
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .tac{
      height: 100%;
  }
  .el-col{
      height: 100%;
  }
  .el-menu{
      height: 100%;
  }
</style>
