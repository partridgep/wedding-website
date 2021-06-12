<template>
  <div>
    <h1>{{title}}</h1>
    <section id="info-intro">
      <p>{{introParagraph[0]}} <span>{{weddingDate}}</span> {{introParagraph[1]}} <a :href="chathamLink" target="_blank">Chatham Bars Inn</a> {{introParagraph[2]}}</p>
      <img src="https://hauteliving.com/totliving/wp-content/uploads/2019/02/girls-weekend-chatham-bars-inn.jpg" alt="Chatham Bars Inn">
    </section>
    <section id="location" class="info-section">
      <h2>{{gettingThereTitle}}</h2>
      <p>The Chatham Bars Inn is located in Cape Cod, at 297 Shore Rd, Chatham, MA 02633. You can fly into the Cape Cod airport or drive down from Boston.</p>
    </section>
    <section id="hotels" class="info-section">
      <h2>Hotels</h2>
      <p>Besides the Chatham Bars Inn, there are a number of hotels conveniently located nearby such as the ... and ... (links).</p>
    </section>
    <section>Schedule</section>
    <section>Open Bar</section>
    <section>Food Menu</section>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "WeddingDetails",
  title: "Janie + Paul | Wedding Details",
  components: {
  },
  data() {
    return {
      chathamLink: 'https://www.chathambarsinn.com/'
    }
  },
  computed: {
    ...mapState(['language']),
    inEnglish() {
      return this.language === 'English'
    },
    title() {
      return this.inEnglish ? 'Wedding Details' : 'Infos mariage'
    },
    weddingDate() {
      return this.inEnglish ? 'November 4th, 2022' : '4 Novembre 2022'
    },
    introParagraph() {
      return this.inEnglish 
        ? ['Our wedding will take place on', 'at', 'in the afternoon (exact time TBD).']
        : ['Notre mariage se tiendra le', 'à', "dans l'après-midi (heure exacte à préciser.)"]
    },
    gettingThereTitle() {
      return this.inEnglish
        ? 'Getting There'
        : 'Y Arriver'
    }
  }
};
</script>

<style scoped>
div {
  margin: 4rem;
  animation: fade-in 0.4s ease-in;;
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
#info-intro {
  display: flex;
}
#info-intro img {
  width: 60vw;
  height: auto;
  align-self: flex-start; 
  margin-right: -5rem;
}
#info-intro p {
  margin: 15vw 5rem auto 0;
}
@media (max-width: 900px) {
  #info-intro {
    flex-direction: column-reverse;
  }
  #info-intro img {
    width: 92vw;
    margin: 0 4vw;
  }
  p, #info-intro p {
    margin: 3rem;
  }
}
.info-section {
  margin: 8rem 0;
}
.info-section h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  letter-spacing: 3px;
}
.info-section p {
  margin-top: 4rem;
}
@media (max-width: 900px) {
  .info-section {
    margin: 1rem 0 5rem 0;
  }
  .info-section h2 {
    margin: 0 2rem;
  }
}
</style>