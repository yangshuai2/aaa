<template>
  <div class="addHello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h2>我是从页面获取的值：{{ this.$store.state.count }}</h2>
    <h2>我是从getter获取的计算后的值：{{ this.$store.getters.getStateCount }}</h2>
    <button @click="back">返回HelloWorld</button>
    <div class="addHello_child">
      <p>{{ msg }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addHello',
  data () {
    return {
      msg: '添加页'
    }
  },
  methods:{
          back: function () {
              this.$router.push('/')
          }
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
p {
  color: #42b983;
}
.addHello_child {
  width: 100px;
  height: 60px;
  background-color: #ccc;
  margin: 20px auto;
}
</style>
