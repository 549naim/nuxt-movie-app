<template>
    <div class="bg-dark">
    <!-- <MovieDetail :title="movie.original_title
    " :id="movie.id" :date="movie.release_date
    " :poster="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" :overview="movie.overview" /> -->
    <movieDetail :movie="movie" />
    </div>
</template>

<script setup>
// @ts-ignore
// @ts-ignore
// const movieName = ref("RRR");
// // @ts-ignore
// const movieId = ref(125);
// // @ts-ignore
// const movieDate = ref("20-56-654");
// // @ts-ignore
// const moviePoster = ref("https://e1.pxfuel.com/desktop-wallpaper/934/976/desktop-wallpaper-rrr-bollywood-2022-movie-poster-thumbnail.jpg");

// @ts-ignore
const route = useRoute();


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmRlMzVmMTFkMGM2Nzk3NGQ5YjVlZDRkYzFiMGUzNCIsInN1YiI6IjY0ZDBmYTdlNTQ5ZGRhMDEzOTMzYTllNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EaZb0EIcMFMyNqICPbTETOayERBSlGC8vi_WWIISQDw'
  }
};

const { data:movies, pending, error, refresh } = await useFetch(`https://api.themoviedb.org/3/movie/${route.params.id}?language=en-US`, options)
 
const movie = ref([]) 
movie.value =movies.value 
//  console.log(movies,"movies");
</script>



<style lang="css" scoped>

</style>