<template>
  <div class="Container">
        <h1>{{msg}}</h1>     
        <input type="text" v-model="msg">  
  </div>
</template>

<script>
   export default{
     name:"Container",
     data() {
         return {
           msg:'我是Container组件'
         };
     },
     components:{},
     methods:{/*组件内部的方法*/},
     mounted(){/*页面挂载结束*/},
     updated(){/*数据更新完成*/},
}
</script>

<style scoped>

</style>