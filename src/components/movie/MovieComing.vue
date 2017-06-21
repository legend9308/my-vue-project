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
    </div>  
</template>



<script>

	import Axios from 'axios'

export default {
  name: 'hello',
  data () {
    return {
      movieList:[]
    }
  },
  mounted:function(){     //页面渲染之后自动调用函数
  	Axios.get(API_PROXY+'https://api.douban.com/v2/movie/coming_soon?count=10&start=0')
  		.then((res)=>{
  			this.movieList = res.data.subjects;
  		});
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
</style>
