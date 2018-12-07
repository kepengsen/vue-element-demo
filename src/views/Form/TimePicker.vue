<template>
  <div class="TimePicker">
        <h1>{{msg}}</h1>       
  </div>
</template>

<script>
   export default{
     name:"TimePicker",
     data() {
         return {
           msg:'我是TimePicker'
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