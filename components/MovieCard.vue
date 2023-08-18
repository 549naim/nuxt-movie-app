<template>
    <div>
        <div class="card card-cus d-flex" style="width: 18rem;">
            <h5 class="card-title d-flex justify-content-center">{{title.slice(0,30)}}</h5>
            <img :src="poster" alt="...">
            <div class="card-body">
              <h5 class="text-danger">Realease Date : {{date}}</h5>
              <p class="card-text d-flex justify-content-center">{{overview.slice(0, 50)}}....</p>
              <NuxtLink :to="`movie/${id}`" class="btn btn-danger">See Details</NuxtLink>
            </div>
          </div>
    </div>
</template>

<script setup>
defineProps(["title","id","poster" ,"date","overview"]);

</script>

<style lang="css" scoped>
.card-cus{
    border: none;
    margin-left: 10px;
    margin-top: 10px;
    background-color:rgba(109, 177, 236);
}
</style>