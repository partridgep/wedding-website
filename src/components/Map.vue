<template>
  <div class="mapouter">
    <div class="gmap_canvas">
      <iframe
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=297%20Shore%20Rd,%20Chatham,%20MA%2002633&t=&z=15&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0">
      </iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Map'
}
</script>

<style scoped>
iframe {
  width: 100vw;
  height: 500px;
  margin: 0 auto;
}
@media (max-width: 900px) {
  iframe {
    height: 600px;
  }
}
.mapouter {
  position: relative;
  text-align: right;
  margin: none;
  z-index: 0;
}
iframe {
  width: 100%;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 100%;
  width: 100%;
}
</style>