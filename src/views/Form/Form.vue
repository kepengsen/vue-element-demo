<template>
  <div class="Form">
        <h1>{{msg}}</h1>       
  </div>
</template>

<script>
   export default{
     name:"Form",
     data() {
         return {
           msg:'我是Form'
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