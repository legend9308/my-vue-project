<template>
	<div class="footer" :style="{background:$store.state.bgColor}">
		<ul>
			<li><router-link to="/movie">电影</router-link></li>
			<li><router-link to="/music">音乐</router-link></li>
			<li><router-link to="/book">书籍</router-link></li>
			<li><router-link to="/photo">图片</router-link></li>
		</ul>
	</div>	
</template>



<script>
export default {
  data () {
    return {
    }
  },
  methods:{
  	// changeTitle(title,color){
  	// 	this.$store.dispatch('changeTitle',[title,color]);
  		// this.$store.dispatch('changeBgColor',color);

  	// }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.footer{
			height: 1rem;
			/*background: rgb(33,150,243);*/
			color: #fff;
	}
	.footer ul{
		display: flex;
	}
    .footer ul li{
		flex: 1;
		text-align: center;
		height: 1rem;
		line-height: 1rem;
		/*font-size: 14px;*/
	}
	.footer{
			position: fixed;
			bottom: 0;
			width: 100%;
		}
	.footer a{
	  color: #ccc;
	  outline: none;
	}
	.footer a.router-link-active{
	  color: #fff;
	}
</style>
