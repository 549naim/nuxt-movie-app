<template>
  <div>
    
    <MovieBanner />

    <div class="d-flex justify-content-center flex-wrap bg-dark">
      <div v-for="movie in allMovie">
        <MovieCard
          :title="movie.original_title"
          :id="movie.id"
          :date="movie.release_date"
          :poster="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
          :overview="movie.overview"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// const movieName = ref("RRR");
// const movieId = ref(125);
// const movieDate = ref("20-56-654");
// const moviePoster = ref("https://e1.pxfuel.com/desktop-wallpaper/934/976/desktop-wallpaper-rrr-bollywood-2022-movie-poster-thumbnail.jpg");

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmRlMzVmMTFkMGM2Nzk3NGQ5YjVlZDRkYzFiMGUzNCIsInN1YiI6IjY0ZDBmYTdlNTQ5ZGRhMDEzOTMzYTllNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EaZb0EIcMFMyNqICPbTETOayERBSlGC8vi_WWIISQDw",
  },
};

const { data: movies, pending, error, refresh } = await useFetch(
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  options
);

// console.log(movies.value.results,"movies");
const searchInput = ref("");
const allMovie = ref([]);
allMovie.value = movies.value.results;


</script>

<style lang="scss" scoped></style>
