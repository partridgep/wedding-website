<template>
  <div id="ourStory" @scroll="handleScroll">
    <section id="firstSentence">
      <h2>{{firstSentence}}</h2>
    </section>
    <section id="balloonDiv">
      <img src="../assets/balloon.svg" />
    </section>
      <p id="ms-1">
        {{mainStoryParagraph1}}
      </p>
      <p id="ms-2">
        {{mainStoryParagraph2}}
      </p>
      <p id="ms-3">
        {{mainStoryParagrap3}}
      </p>
      <p id="ms-4">
        {{mainStoryParagrap4}}
      </p>
    <section id="lastSentence">
      <h2>{{lastSentence}}</h2>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "OurStory",
  title: "Janie + Paul | Our Story",
  components: {
  },
  data() {
    return {
      frameCount: 2000
    }
  },
  computed: {
    ...mapState(['language']),
    inEnglish() {
      return this.language === 'English'
    },
    firstSentence() {
      return this.inEnglish
        ? 'It all started with a balloon...'
        : 'Tout a commencé avec un ballon...'
    },
    mainStoryParagraph1() {
      return this.inEnglish
        ? 'On August 30th, 2014, we met at Wesleyan University’s Freshman Orientation carnival spectacular. Booths full of a bounty of prizes to win, a giant moon bounce, and snacks littering the Usdan student center’s entrance set our scene - one could argue romance was very much in the air.'
        : 'Le 30 août 2014, nous nous sommes recontrés durant la soirée "carnaval" pendant notre première semaine à notre université, Wesleyan University. Nous fûmes entourés de stands oû gagner des prix, un chateau gonflable, et des collations parmi le centre pour étudiants -  on pourrait dire que la romance était dans l\'air.' 
    },
    mainStoryParagraph2() {
      return this.inEnglish
        ? 'Janie was mingling with some newfound classmates and had just won a gargantuan balloon with a rubber band string attached, perfectly optimal for bouncing up and down. Her new friends introduced her to a few more of their hall mates, a nerdy Frenchman named Paul was among this gaggle of lanyard-donning frosh.'
        : 'Janie faisait connaissance avec des camarades de classe et venait de gagner un ballon gargantuesque avec un élastique attaché, optimal pour faire rebondir. Ses nouveaux amis l\'on présentée à quelques autres de leurs camarades, dont un Français.' 
    },
    mainStoryParagrap3() {
      return this.inEnglish
        ? 'He was instantly entranced by her deeply enviable balloon on a string and immediately inquired where he, too, might procure one. After the awkward dance of introductions, Janie then pointed Paul in the right direction, an unassuming carnival booth where you throw bouncy balls into wee cans to win big (aka a balloon on a string!).'
        : 'Il fut fasciné par son ballon pronfondément enviable et lui demanda immédiatement oû il pourrait, lui aussi, s\'en procurer un. Après la dance des introductions, Janie pointa Paul dans la bonne direction, un stand oû l\'on pouvait lancer des balles vers des des cannettes pour gagner gros (c\'est à dire un ballon avec un élastique!).' 
    },
    mainStoryParagrap4() {
      return this.inEnglish
        ? 'Promptly thereafter, Paul ran back to the bigger group of seemingly multiplying freshman nerds and playfully bounced his balloon against Janie. And from that moment on, they were best friends.'
        : 'Peu de temps après, Paul courut de retour vers le groupe d\'étudiants de première année (qui semblait se multiplier) et, de manière amusante, fut rebondir son ballon vers Janie. À partir de ce moment là, ils étaient meilleurs amis.' 
    },
    lastSentence() {
      return this.inEnglish
        ? '2,990 days later, aka 427 weeks later, aka 8 years, 2 months and 7 days later, Paul and Janie will get married. '
        : '2990 jours plus tard, our 427 semaines plus tard, ou 8 ans, 2 mois et 7 jours plus tard, Paul et Janie vont se marier'
    },
  },
  methods: {
    handleScroll() {
      const frameIndex = this.getFrameIndex()

      const firstSentence = document.querySelector(`#firstSentence`)
      const lastSentence = document.querySelector(`#lastSentence`)
      const balloon = document.querySelector('img')
      const mainStory1 = document.querySelector('#ms-1')
      const mainStory2 = document.querySelector('#ms-2')
      const mainStory3 = document.querySelector('#ms-3')
      const mainStory4 = document.querySelector('#ms-4')

      const balloonTop = balloon.getBoundingClientRect().top
      const balloonBottom = balloon.getBoundingClientRect().bottom

      if (balloonTop < 42) {
        firstSentence.style.opacity =  `${balloonTop}%`
      } else {
        firstSentence.style.opacity = 100
      }
      if (balloonBottom < 102) {
        mainStory1.style.opacity = `${(100 - balloonBottom) * 2}%`
      } else {
        mainStory1.style.opacity = 0
        mainStory2.style.opacity = 0
        mainStory3.style.opacity = 0
        mainStory4.style.opacity = 0
      }
      if (frameIndex > 700 && balloonBottom < 0) {
        mainStory1.style.opacity = `${100 - (frameIndex - 700)}%`
        mainStory2.style.opacity = 0
      }
      if (frameIndex > 800 && frameIndex <= 900) {
        mainStory2.style.opacity = `${(frameIndex - 800) * 2}%`
        mainStory3.style.opacity = 0
        mainStory4.style.opacity = 0
      }
      if (frameIndex > 900 && frameIndex <= 1000) {
        mainStory1.style.opacity = 0
        mainStory2.style.opacity = `${100 - (frameIndex - 900)}%`
        mainStory3.style.opacity = 0
        mainStory4.style.opacity = 0
      }
      if (frameIndex > 1000 && frameIndex <= 1200) {
        mainStory1.style.opacity = 0
        mainStory2.style.opacity = 0
        mainStory3.style.opacity = `${(frameIndex - 1000) * 2}%`
        mainStory4.style.opacity = 0
      }
      if (frameIndex > 1200 && frameIndex <= 1300) {
        mainStory1.style.opacity = 0
        mainStory2.style.opacity = 0
        mainStory3.style.opacity = `${100 - (frameIndex - 1200)}%`
        mainStory4.style.opacity = 0
      }
      if (frameIndex > 1300) {
        mainStory1.style.opacity = 0
        mainStory2.style.opacity = 0
        mainStory3.style.opacity = 0
        mainStory4.style.opacity = `${(frameIndex - 1300) * 2}%`
      }
      if (frameIndex > 1500) {
        mainStory4.style.opacity = `${100 - (frameIndex - 1500)}%`
      }
      if (frameIndex < 1700) {
        lastSentence.style.opacity = 0
      }
      if (frameIndex > 1700) {
        mainStory4.style.opacity = 0
        lastSentence.style.opacity = `${(frameIndex - 1700) * 2}%`
      }
    },
    getFrameIndex() {
      const scrollTop = window.scrollY
      const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
            this.frameCount - 1,
            Math.ceil(scrollFraction * this.frameCount)
        );
      return frameIndex
    }
  },
  mounted() {
    this.handleScroll()
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
div {
  animation: fade-in 1s ease-in;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 1200vh;
  overflow-x: hidden;
}
#firstSentence, #lastSentence {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: fixed;
  top: 1vh;
  margin: 0 auto;
}
#firstSentence {
  width: 100vw;
}
h2 {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: 0.2rem;
  text-align: center;
  width: auto;
  padding: 0 4vw;
}
#balloonDiv {
  position: relative;
  top: 100vh;
}
#balloonDiv > img {
  width: 110vw;
  overflow-x: hidden;
}

p {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 2.3rem;
}
#ms-1, #ms-2, #ms-3, #ms-4 {
  height: calc(100vh - 75px);
  padding: 0 4rem;
  top: 75px;
  display: flex; 
  text-align: center;
  justify-content: center;
  align-items: center;
  position: fixed;
  margin: 0 auto;
}
p > span {
  font-weight: 400;
}
@media (max-width: 900px) {
  div {
    margin: 0;
  }
  h2 {
    padding: 0 6vw;
  }
  #balloonDiv > img {
    width: 160vw;
    overflow-x: hidden;
    margin-left: -19%;
  }
  #ms-1, #ms-2, #ms-3, #ms-4 {
    padding: 0 2rem;
    font-size: 1.3rem;
    line-height: 2rem;
    top: 55px;
  }
}
</style>