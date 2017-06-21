<template>
	<div class="nav">
    <ul>
      <li><router-link to="/movie/top250">top250</router-link></li>
      <li><router-link to="/movie/hot">正在热映</router-link></li>
      <li><router-link to="/movie/coming">即将上映</router-link></li>
    </ul>
	</div>	
</template>



<script>

export default {

  data () {
    return {
      
    }
  },
  components:{
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.nav{
    height: 1rem;
    background: rgb(33,150,243);
    color: #ccc;
    position: fixed;
    top: 1rem;
    width: 100%;
  }
  .nav ul{
    display: flex;
  }
  .nav ul li{
    flex: 1;
    text-align: center;
    height: 1rem;
    line-height: 1rem;
    /*font-size: 14px;*/
  }
  .nav a{
    color: #ccc;
    outline: none;
  }
  .nav a.router-link-active{
    color: #fff;
  }
</style>
