<template>
  <div class="about">
    <h1>我是about</h1>
    <ul>
      <li v-for="(item,key) in dataList" :key="key">
        <h3>{{item.title}}</h3>
         <p>{{item.author_name}}<span>{{item.date}}</span></p>
         <img :src="item.pic" alt="">
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      dataList:[]
    };
  },
  methods: {
    getList() {
      const url ="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=2";
      this.axios.get(url).then(response=>{
        console.log(response)
      })
    },
    getNews(){
      this.axios.post('/news')
      .then(response=>{
        console.log(response)
        this.dataList=response.data;
      })
    },
    getUser(){
      this.axios.post('/user')
      .then(response=>{
        console.log(response)
      })
    }
  },
  mounted() {
    // this.getList();
    this.getNews();
    this.getUser();
  }
};
</script>
