<template>
  <div class="addHello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <button @click="back">点我返回</button>
    <ul>
      <li>
        <p>这是添加页</p>
      </li>
      <li>
        <p>这是添加页</p>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
       <p>这还是添加页</p>
      </li>
      <li>
       <p>这还是添加页</p>
      </li>
    </ul>
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
          back(){
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
</style>
