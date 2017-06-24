<template>
  <div class="music">
    
  </div>  
</template>



<script>

  import CommonHeader from '../common/CommonHeader'
  import CommonFooter from '../common/CommonFooter'
  import Axios from 'axios'

export default {
  data () {
    return {
      albums:[],
      albName:''
    }
  },
  components:{
    CommonHeader,
    CommonFooter
  },
  mounted(){
     // console.log(this.$route.params.id);
     // Axios.get('../../../static/musiclist.json').then((res)=>{
     //   this.albums = res.data.albums;
     //   console.log(this.albums);
     //   for(var i=0;i<this.albums.length;i++){
     //    if(this.albums[i].id==this.$route.params.id){
     //      this.albName = this.albums[i].name;
     //    }
     //   }
     //   this.$store.dispatch('changeTitle',[this.albName,'rgb(0,150,136)','<']);
     // });
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/reset.css";
  a{
    text-decoration: none;
  }
  ul{
    /*overflow: hidden;*/
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .list{
    width: 3.2rem;
    height: 3.2rem;
    float: left;
  }
  .list img{
    width: 100%;
  }
</style>
