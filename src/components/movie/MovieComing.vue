<template>
    <div class="top-250">
        <div class="movie-list" v-for="movie in movieList">
            <div class="movie-img">
                <img :src="movie.images.small">
            </div>
            <div class="movie-title">
            	<span>{{movie.title}}</span>
            	<p><span v-for="genre in movie.genres">{{genre}}</span>({{movie.year}})(平均{{movie.rating.average}}分)</p>
            </div>
        </div>
        <div class="loading" v-show="show"> <!-- v-show="show" --> 
          <span><img src="../../assets/img/loading.gif"></span>
        </div>
    </div>  
</template>



<script>

	import Axios from 'axios'
  import $ from 'jQuery'

export default {
  name: 'hello',
  data () {
    return {
      movieList:[],
      show:false
    }
  },
  mounted:function(){     //页面渲染之后自动调用函数
  	this.loadData();
    var _this = this;
    $(window).scroll(function(){
      var height = $(document).height();
      var windowHeight = $(this).height();
      var scrollTop = $(this).scrollTop();
      if(windowHeight + scrollTop >= height){
        _this.show = true;
        _this.loadData();
      }
    });
  },
  methods:{
    loadData(){
      var length = this.movieList.length;
      Axios.get(API_PROXY+'https://api.douban.com/v2/movie/coming_soon?count=10&start='+length)
        .then((res)=>{
          this.movieList = this.movieList.concat(res.data.subjects);
          this.show = false;
        });
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.top-250{
		margin-top: 2rem;
		margin-bottom: 1rem;
	}
	.movie-list{
		margin: 0.4rem 0;
		padding: 0.4rem;
    /*overflow: hidden;*/
	}
    .movie-list .movie-img{
    	width: 0.8rem;
    	height: 0.8rem;
    	float: left;
    }
    .movie-list .movie-img img{
    	width: 100%;
    	height: 100%;
    }
    .movie-list .movie-title{
		float: left;
		width: 4rem;
		margin-left: 0.6rem;
		border-bottom: 1px solid #ccc;
    }
    .loading{
      text-align: center;
      clear: both;
    }
</style>
