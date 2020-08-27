<template>
  <div class="container-fluid">
    <div class="map-responsive">
      <iframe 
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" 
        width="600" height="450" frameborder="0" style="border:0" allowfullscreen>
      </iframe>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.map-responsive{
  overflow:hidden;
  padding-bottom:55%;
  position:relative;
  height:0;
}
.map-responsive iframe{
  left:0;
  top:0;
  height:100%;
  width:100%;
  position:absolute;
}
</style>