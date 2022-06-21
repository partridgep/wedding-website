<template>
  <div class="registry">
    <h1>Registry</h1>
    <div class="registryMsg">
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
  name: "Registry",
  title: "Janie + Paul | Registry",
  components: {
  },
  data() {
    return {
      link: 'https://www.zola.com/registry/janieandpaul'
    }
  },
  computed: {
    ...mapState(['language']),
    inEnglish() {
      return this.language === 'English'
    },
    msg() {
      return this.inEnglish
        ? ['Please click on ', 'this link' ,' to access our registry.']
        : ['Veuillez clicker sur ', 'ce lien', ' pour accéder à notre "registry."']
    }
  }
};
</script>

<style scoped>
.registry {
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
.registryMsg {
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