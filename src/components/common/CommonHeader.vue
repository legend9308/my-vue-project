<template>
	<div class="header" :style="{background:$store.state.bgColor}">
		<slot><button @click="aa">{{$store.state.btn}}</button></slot>
		<h2>{{$store.state.title}}</h2>
	</div>	
</template>



<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
  	aa:function(){
  		history.go(-1);
  	}
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import "../../assets/css/reset.css";
	.header{
		display: flex;
		height: 1rem;
		/*background: rgb(33,150,243);*/
		position: fixed;
		top: 0;
		width: 100%;
	}
	.header button{
		width: 1rem;
		height: 1rem;
		background: transparent;
		color: #fff;	
		border: none;	
	}
	.header h2{
		flex: 1;
		/*font-size: 30px;*/
		line-height: 1rem;
		text-align: center;
		text-indent: -0.5rem;
		color: #fff;
	}
	.header a{
		color: #fff;
	}
</style>
