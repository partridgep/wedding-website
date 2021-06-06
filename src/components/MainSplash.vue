<template>
  <div class="main-splash">
    <section class="section bg-img">
      <h1 class="title">JANIE + PAUL</h1>
      <h2 class="wedding-date">11 • 4 • 2022</h2>
    </section>
    <section class="section navigator">
      <router-link
        v-for="option in options"
        :key="option"
        :to="path(option)"
        class="navigatorBtn"
      >
        {{option}}
      </router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MainSplash',
  data() {
    return {
      options: [
        'Our Story',
        'Wedding Details',
        'Registry'
      ]
    }
  },
  methods: {
    path(option) {
      return `/${option.replace(/\s/g, '_')}`
    },
  }
}
</script>

<style>
h1 {
  margin: 0;
}
.main-splash {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 2px;
}
.section {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bg-img {
  justify-content: center;
}
.bg-img::after {
  height: 100vh;
  content: " ";
  background: linear-gradient(rgba(10,10,10,0),rgba(0,0,0,.5)),
		url('https://i.imgur.com/31qnQpu.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateZ(-1px) scale(1.5);
  background-size: 100%;
  z-index: -1;
}
@media (max-width: 300px) {
  .bg-img::after {
    transform: translateZ(-1px) translateX(-10vw) scale(2.5);
  }
}
@media (max-width: 700px) {
  .bg-img::after {
    transform: translateZ(-1px) translateX(-10vw) scale(2.3);
  }
}
@media (min-width: 1700px) {
  .bg-img::after {
    transform: translateZ(-1px) scale(1.5);
  }
}
.title {
  font-size: 12vw;
  color: #F0D8D5;
  font-family: 'Playfair Display', serif;
  text-shadow: 1px 1px 100px #000000;
  margin-top: 15vh;
}
.wedding-date {
  font-size: 3vw;
  font-family: 'Playfair Display', serif;
  color: white;
  background-color: #000000;
  padding: 0px 10px 1.3vw;
  border-radius: 5px;
  border: 1px solid white;
}
.navigator {
  background-color: white;
  justify-content: space-evenly;
}
.navigatorBtn {
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  color: black;
  text-decoration: none;
  text-align: center;
  width: 80vw;
  padding: 2rem 0;
  font-size: 2rem;
  background-color: white;
  border: none;
  position: relative;
  cursor: pointer;
}
.navigatorBtn::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 4px;
  bottom: -5px;
  left: 0;
  background-color: #d1a09a;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.1s ease-in-out 0s;
}
.navigatorBtn:hover::before {
  visibility: visible;
  transform: scaleX(0.2);
}
@media (max-width: 900px) {
.navigatorBtn:hover::before {
  transform: scaleX(0.6);
}
}
.navigatorBtn:focus {
  font-weight: 900;
}
</style>
