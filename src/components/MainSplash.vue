<template>
  <div class="main-splash">
    <section class="section bg-img">
      <h1 class="title">JANIE + PAUL</h1>
      <h2 class="wedding-date">{{weddingDate}}</h2>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: 'MainSplash',
  computed: {
    ...mapState(['language', 'navOptions']),
    options() {
      return this.language === 'English' ? this.navOptions.english : this.navOptions.french
    },
    weddingDate() {
      return this.language === 'English' ? '11 • 4 • 2022' : '4 • 11 • 2022'
    }
  },
  methods: {
    path(option) {
      if (this.language === 'English') return `/${option.replace(/\s/g, '-')}`.toLowerCase()
      else {
        let optionIdx = this.navOptions.french.findIndex((val) => val === option)
        let englishOption = this.navOptions.english[optionIdx]
        return `/${englishOption.replace(/\s/g, '-')}`.toLowerCase()
      }
    },
  }
}
</script>

<style>
h1 {
  margin: 0;
}
.main-splash {
  position: relative;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.section {
  position: relative;
  height: calc(100vh - 75px);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bg-img {
  justify-content: center;
  background: linear-gradient(rgba(10,10,10,0),rgba(0,0,0,.5)),
		url('https://i.imgur.com/31qnQpu.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
  font-weight: 400;
}
</style>
