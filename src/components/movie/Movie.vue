<template>
	<div class="movie">
		<common-header><button>{{$store.state.btn}}</button></common-header>
		<movie-nav></movie-nav>
    <!-- <Movie-top250></Movie-top250> -->
    <router-view></router-view>
    <common-footer></common-footer>
	</div>	
</template>



<script>

	import CommonHeader from '../common/CommonHeader'
	import MovieNav from './MovieNav'
  import CommonFooter from '../common/CommonFooter'
  import MovieTop250 from './MovieTop250.vue'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
  	CommonHeader,
  	MovieNav,
    CommonFooter,
    MovieTop250
  },
  mounted(){
    this.$store.dispatch('changeTitle',['movie','#2196f3','首页']);
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import "../../assets/css/reset.css";
</style>
