<template>
  <div class="about">
    <div class="content">
      <h1>我是about</h1>
      <ul>
        <li v-for="(item,key) in dataList" :key="key">
          <h3>{{item.title}}</h3>
          <p>
            {{item.author_name}}
            <span>{{item.date}}</span>
          </p>
          <img :src="item.pic" alt>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      dataList: []
    };
  },
  methods: {
    getNews() {
      this.axios.post("/news").then(response => {
        this.dataList = response.data;
      });
    },
    getUser() {
      this.axios.post("/navigation/data").then(response => {
        console.log(response)
      });
    }
  },
  mounted() {
    // this.getList();
    this.getNews();
    // this.getUser();
  }
};
</script>
<style lang="css">

</style>
