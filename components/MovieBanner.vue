<template>
  <div class="bg-dark">
    <div class="container d-flex p-2 bt-none bg-dark">
      <input
        v-model="searchText"
        class="form-control bg-dark text-white"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button @click="searchResult" class="btn btn-success">Search</button>
    </div>

    <div
      id="carouselExampleIndicators"
      class="carousel slide d-flex-row"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://w0.peakpx.com/wallpaper/716/394/HD-wallpaper-avatar-2-movie-2021-films-poster.jpg"
            class=" "
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://w0.peakpx.com/wallpaper/625/268/HD-wallpaper-x-men-days-of-future-past-banner-x-men-movies-banner.jpg"
            class="h-5"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://webneel.net/file/images/11-16/8-xmen-movie-poster-design.preview.jpg"
            class=""
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="d-flex justify-content-center">
      <p class="latest">See latest movies Here</p>
    </div>
  </div>
</template>

<script setup>
import { useSearchStore } from "/stores/search.js";

let { searchInput } = useSearchStore();
let searchText = ref("");

const searchResult = () => {
  searchInput = searchText.value;
  console.log(searchInput, "searchInput");
};
</script>

<style lang="css" scoped>
img {
  height: 400px;
  width: 100%;
}
.latest {
  font-size: 30px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: bold;
  background-color: rgb(212, 27, 24);
  margin-top: 5px;
  border-radius: 10px;
  padding: 5px;
  color: rgb(255, 255, 255);
}
</style>
