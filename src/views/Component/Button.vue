<template>
  <div class="Button">
    {{msg}}
    <countTo :startVal="startVal" :endVal="endVal" :duration="3000" prefix="$" suffix="rmb"></countTo>
    <input type="text" v-model="msg">
  </div>
</template>

<script>
import countTo from 'vue-count-to';
export default {
  name: 'Button',
  data() {
    return {
      msg: '我是button',
      startVal: 0,
      endVal: 666
    };
  },
  components: { countTo },
  methods: {/*组件内部的方法*/ },
  mounted() {/*页面挂载结束*/ },
  updated() {/*数据更新完成*/ }
};
</script>

<style scoped>
</style>
