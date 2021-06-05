<template>
  <div class="main-splash">
    <div class="bg-img">
      <h1 class="title">JANIE + PAUL</h1>
      <h2 class="wedding-date">11 • 4 • 2022</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainSplash',
}
</script>

<style>

h1{
  margin: 0;
}
.main-splash {
  height: 100vh;
  overflow: hidden;
}
.bg-img {
  position: relative;
  height: 100vh;
  background: linear-gradient(rgba(10,10,10,0),rgba(0,0,0,.5)),
		url('https://i.imgur.com/31qnQpu.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  font-size: 12vw;
  color: #F0D8D5;
  font-family: 'Playfair Display', serif;
  text-shadow: 1px 1px 100px #000000;
  margin-top: 10vh;
}
.wedding-date {
  font-size: 3vw;
  font-family: 'Playfair Display', serif;
  color: white;
  background-color: #000000;
  padding: 5px 10px 10px;
  border-radius: 2px;
  border: 1px solid white;
}
</style>
