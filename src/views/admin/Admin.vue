<template>
  <div>
    <div class="position-relative overflow-hidden  text-center bg-light">
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 font-weight-normal">Admin</h1>
        <a class="btn btn-outline-secondary" href="#">분석</a>
      </div>
    </div>
    <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
      <router-link to="/">
        <div class="parent bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div class="my-3 py-3">
            <h2 class="display-5">Map</h2>
          </div>
          <div class="bg-light mx-auto product"></div>
        </div>
      </router-link>

      <router-link to="/">
        <div class="parent bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-dark overflow-hidden">
          <div class="my-3 p-3">
            <h2 class="display-5">Market</h2>
          </div>
          <div class="bg-dark mx-auto product"></div>
        </div>
      </router-link>
    </div>

    <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
      <router-link to="/">
        <div class="parent bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-dark overflow-hidden">
          <div class="my-3 p-3">
            <h2 class="display-5">Community</h2>
          </div>
          <div class="bg-dark mx-auto product"></div>
        </div>
      </router-link>

      <router-link to="/">
        <div class="parent bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div class="my-3 py-3">
            <h2 class="display-5">Notice</h2>
          </div>
          <div class="bg-light mx-auto product"></div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Admin'
}
</script>

<style scoped>
.product {
  width: 80%; 
  height: 300px; 
  border-radius: 21px 21px 0 0;
}

.parent:hover .product{
  border-radius: 50% 50% 0 0;
  transition: 1s;
}

.flex-equal > * {
  -ms-flex: 1;
  flex: 1;
}
@media (min-width: 768px) {
  .flex-md-equal > * {
    -ms-flex: 1;
    flex: 1;
  }
}
</style>