<template>
	<div class="photo">
		<common-header></common-header>
      <v-touch @swipeleft="next" @swiperight="prev" class="photo-box" :style="bgStyle">
<!--         <img :src="$store.state.photo[index].src"> -->
      </v-touch>
	</div>	
</template>



<script>

	import CommonHeader from '../common/CommonHeader'

export default {
  data () {
    return {
      index: this.$route.params.index,
      // index:0
    }
  },
  components:{
  	CommonHeader,
  },
  computed:{
    bgStyle(){
      return {
        background:"url('"+this.$store.state.photo[this.index].src+"') no-repeat center/ contain #000"
      }
    }
  },
  methods:{
    next(){
      this.index++;
      if(this.index == 24){
        this.index=0;
      }
    },
    prev(){
      this.index--;
      if(this.index == -1){
        this.index=23;
      }
    }
  },
  mounted(){
    // this.index = this.$route.params.id;
    // this.$store.dispatch('changeTitle',['photo','rgb(63,81,181)','<']);
    // Axios.get('static/photo-data.json').then((res)=>{
    //   this.photos = res.data.photoData;
    // });

  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import "../../assets/css/reset.css";
  /*html,body{
    width: 100%;
    height: 100%;
    background: #000;
  }*/
  .photo-box{
    width: 6.4rem;
    position: absolute;
    top: 1rem;
    bottom: 0;
  }
  
</style>
