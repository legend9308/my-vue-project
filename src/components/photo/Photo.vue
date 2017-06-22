<template>
	<div class="photo">
		<common-header></common-header>
    <common-footer></common-footer>
	</div>	
</template>



<script>

	import CommonHeader from '../common/CommonHeader'
  import CommonFooter from '../common/CommonFooter'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
  	CommonHeader,
    CommonFooter
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import "../../assets/css/reset.css";
	a{
    text-decoration: none;
  }
</style>
