<template>
  <div class="music-albums">
      <ul class="music-box">
        <li v-for="album in albums" @click="changeTitle(album.name)">
          <router-link :to="'/music/music-list/'+album.id"><img :src="album.bg" alt=""></router-link>
        </li>
      </ul>
  </div>
</template>



<script>

  import CommonHeader from '../common/CommonHeader'
  import CommonFooter from '../common/CommonFooter'
  import Axios from 'axios'

export default {
  name: 'hello',
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
     this.$store.dispatch('changeTitle',['music','rgb(0, 150, 136)','<']);
         Axios.get('../../../static/musiclist.json').then((res)=>{
             this.albums = res.data.albums;
         });
  },
  methods:{
      changeTitle(name){
          this.$store.dispatch('changeTitle',[name,'rgb(0, 150, 136)','<']);
  //      this.$store.state.title = name;
      }
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/reset.css";
  .music-box{
    position: absolute;
    top: 1rem;
    bottom: 1rem;
    width: 100%;
  }
  .music-box li{
      width: 50%;
      height: 33.33333%;
      float: left;
  }
  .music-box li img{
    width: 100%;
    height: 100%;
  }

</style>
