<template>
  <div>
    <h1>{{checkBackSoon}}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "Registry",
  title: "Janie + Paul | Registry",
  components: {
  },
  computed: {
    ...mapState(['language']),
    inEnglish() {
      return this.language === 'English'
    },
    checkBackSoon() {
      return this.inEnglish
        ? 'Check back soon!'
        : 'Informations à venir!'
    }
  }
};
</script>

<style scoped>
div {
  margin: 4rem;
  animation: fade-in 0.4s ease-in;
  display: flex;
  justify-content: center;
  align-items: center;
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
}
p > span {
  font-weight: 400;
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