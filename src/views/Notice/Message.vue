<template>
  <div class="Message">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      msg: '我是Message'
    };
  },
  components: {},
  methods: {/*组件内部的方法*/ },
  mounted() {/*页面挂载结束*/ },
  updated() {/*数据更新完成*/ }
};
</script>

<style scoped>
</style>
