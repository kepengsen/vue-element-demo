<template>
  <div class="Button">
     {{msg}}
  </div>
</template>

<script>
   export default{
     name:"Button",
     data() {
         return {
           msg:'我是button'
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