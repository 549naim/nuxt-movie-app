<template>
    <div>
      <div>
      <nav  class="top-nav navbar navbar-expand-lg ">
        <div class="container-fluid naim">
          <NuxtLink to="/" class="navbar-brand mv-hub" >Moviehub</NuxtLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NuxtLink to="/" class="nav-link " aria-current="page" activeClass="navactive" >Home</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/login" class="nav-link" activeClass="navactive">Login</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/register" class="nav-link" activeClass="navactive">Register</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/contact" class="nav-link" activeClass="navactive">Contact Us</NuxtLink>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><NuxtLink to="/" class="dropdown-item btn btn-secondary" activeClass="navactive" >Action</NuxtLink></li>
                  <li><NuxtLink to="/" class="dropdown-item btn btn-secondary" activeClass="navactive" >Another action</NuxtLink></li>
                 
                </ul>
              </li>
             
            </ul>
         
             
             
           
          </div>
        </div>

      </nav>
    </div>
     
    <slot/>

</div>
</template>
  
<script setup>



</script>
  
<style scoped >
/* Add any custom styles here if needed */
.top-nav{
  background-color:rgba(109, 177, 236);
}
.naim{
  background-color:rgba(109, 177, 236,);
}
.mv-hub{
  font-size:35px;
  background-color:rgb(218, 53, 34);
  padding: 5px;
  border-radius:5px;
  color:aliceblue;
  font-weight: 800;
}
li a{
  font-size: 18px;
  font-weight: bold;

}
.navactive{
  border-bottom: 3px solid rgb(170, 7, 7);
  border-radius: none;
}
</style>
  
