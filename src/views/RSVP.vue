<template>
  <div class="rsvp">
    <h1>RSVP</h1>
    <div class="rsvpMsg">
      <p>
        {{msg[0]}}
        <a :href="link" target="_blank">{{msg[1]}}</a>
        {{msg[2]}}
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "RSVP",
  title: "Janie + Paul | RSVP",
  data() {
    return {
      link: 'https://www.zola.com/wedding/janieandpaul/rsvp'
    }
  },
  computed: {
    ...mapState(['language']),
    inEnglish() {
      return this.language === 'English'
    },
    msg() {
      return this.inEnglish
        ? ['Please click on ', 'this link' ,' to RSVP to the wedding.']
        : ['Veuillez clicker sur ', 'ce lien', ' pour accéder à la forme RSVP.']
    }
  }
};
</script>

<style scoped>
.rsvp {
  animation: fade-in 0.4s ease-in;
  height: 75vh;
}
h1 {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 4px;
  margin: 5rem 0;
  padding: 0 5px;
}
p {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 2.3rem;
  text-align: center;
  padding: 0 5vw;
}
.rsvpMsg {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  width: 100vw;
}
@media (max-width: 900px) {
  div {
    margin: 0;
  }
  h1 {
    font-size: 2rem;
    margin: 3rem 0;
  }
}
</style>