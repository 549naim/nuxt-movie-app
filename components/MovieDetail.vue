<template>
    <div class="container" >
        <div class="row bg-dark g-0 bg-light position-relative">
            <div class="col-md-6 auto mb-md-0 p-md-4">
              <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" class="w-100 img-details" alt="...">
            </div>
            <!-- <div class="col-md-6 auto mb-md-0 p-md-4">
              <img :src="`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`" class="w-100 img-details" alt="...">
            </div> -->
            <div class="  col-md-6 p-4 ps-md-0 text-white">
              <h5 class="mt-0 ">{{movie.title}}</h5>
              <p class="" >{{movie.overview}}</p>
              <h5 class="text-danger">Realease Date : {{movie.release_date}}</h5>
              <h4 class="mt-0 ">Budget : {{movie.budget}}</h4>
              <h4 class="mt-0 ">Revenue : {{movie.revenue}}</h4>
              <NuxtLink to="/" target="_black" class="btn detail-btn  m-2">watch Trailer</NuxtLink>
              <NuxtLink to="/" class="btn detail-btn2 m-2">Buy Now</NuxtLink>
            </div>
          </div>
    </div>
</template>

<script setup>
defineProps(["movie"]);

</script>

<style lang="css" scoped>
 .img-details{
    max-width: 100%;

 }
 .detail-btn{
    background-color: rgb(127, 28, 220);
    color: white;;
 }
 .detail-btn2{
    background-color: rgb(220, 28, 28);
    color: white;;
 }
</style>