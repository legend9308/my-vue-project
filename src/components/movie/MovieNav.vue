<template>
	<div class="nav">
    <ul>
      <li>top250</li>
      <li>正在热映</li>
      <li>即将上映</li>
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
    color: #fff;
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
</style>
