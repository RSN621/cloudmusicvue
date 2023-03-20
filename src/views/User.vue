import axios from 'axios'
<template>
  <div>
    <table border="1px">
      <tr>
        <td>uid</td>
        <td>用户名</td>
        <td>密码</td>
        <td>昵称</td>
        <td>时间戳</td>
        <td>盐值</td>
      </tr>
      <!-- 循环展示数据 -->
      <tr v-for="elem in users">
        <td>{{ elem.uid }}</td>
        <td>{{ elem.username }}</td>
        <td>{{ elem.password }}</td>
        <td>{{ elem.nickname }}</td>
        <td>{{ elem.create_time }}</td>
        <td>{{ elem.salt }}</td>
      </tr>
    </table>
    {{ msg }}
  </div>
</template>

<script>
export default {
  /* created()是初始化方法 */
  /*created(){
    const _this = this
    axios.get("http://localhost:6060/userSelect")
        .then(function (resp) {
          _this.users = resp.data;
        })
  },*/
  name: "User",
  data() {
    return {
      msg: 'Hello Vue666',
      users: []
    }
  },
  created() {
    this.getlist()
  },
  getlist(){
    this.axios({
      method: 'get',
      url:''
    })
  },
  mounted() {
    axios.get('http://localhost:6060/userSelect')
        .then(response =>(this.users =response))
        .catch(function (error){
          console.log(error);
        });
  },

}
</script>

<style scoped>
</style>
