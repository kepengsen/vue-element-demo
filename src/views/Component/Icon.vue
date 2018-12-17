<template>
  <div class="Icon">
        <h1>{{msg}}</h1>  
        <input type="text" v-model="msg">     
  </div>
</template>

<script>
   export default{
     name:"Icon",
     data() {
         return {
           msg:'我是Icon组件'
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