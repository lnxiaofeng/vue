<template>
  <div>
    <el-container>
      <el-aside width="auto">
        <Aside :isShow='isShow'></Aside>
      </el-aside>
      <el-container>
        <el-header>
          <Header @click='handleclick'></Header>
        </el-header>
        <el-main>
          <Crumbs></Crumbs>
          Main
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Crumbs from '../components/Crumbs.vue'
import Aside from '../components/Aside.vue'
export default {
    components:{
      Header,
      Crumbs,
      Aside
    },
    data(){
      return {
        isShow:false,
      }
    },
  methods:{
    handleclick(){
      this.isShow=!this.isShow
    }
  }
};
</script>
<style>
.el-header,
.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

body > div > .el-container {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
