<template>
  <div>
    <h1>{{title}}</h1>
    <section id="info-intro">
      <p>{{introParagraph[0]}} <span>{{weddingDate}}</span> {{introParagraph[1]}} <a :href="chathamLink" target="_blank">Chatham Bars Inn</a> {{introParagraph[2]}}</p>
      <img :src="chathamImglink" alt="Chatham Bars Inn">
    </section>
    <section id="location" class="info-section">
      <h2>{{gettingThereTitle}}</h2>
      <p>{{gettingThereParagraph[0]}}<a :href="gmapsLinks" target="_blank">297 Shore Rd, Chatham, MA 02633</a>{{gettingThereParagraph[1]}}.</p>
      <Map/>
      <h3>{{flyingTitle}}</h3>
      <ul>
        <li>{{flying1}}</li>
        <li>{{flying2}}</li>
      </ul>
      <h3>{{trainTitle}}</h3>
      <ul>
        <li>{{train1}}</li>
      </ul>
    </section>
    <section id="hotels" class="info-section">
      <h2>{{hotelsTitle}}</h2>
      <ul>
        <li><a :href="chathamLink" target="_blank">Chatham Bars Inn</a>: {{hotel1}}</li>
        <li><a :href="chathamInnLink" target="_blank">Chatham Inn</a>: {{hotel2}}</li>
        <li><a :href="chathamTidesLink" target="_blank">Chatham Tides</a>: {{hotel3}}</li>
        <li><a :href="chathamHighlanderLink" target="_blank">Chatham Highlander Hotel</a>: {{hotel4}}</li>
      </ul>
    </section>
    <section id="eat" class="info-section">
      <h2>{{eatTitle}}</h2>
      <ul>
        <li><a :href="squireLink" target="_blank">Chatham Squire</a>: {{eat1}}</li>
        <li><a :href="chathamBarsDiningLink" target="_blank">Chatham Bars Inn</a>: {{eat2}}</li>
        <li><a :href="cuveeLink" target="_blank">Cuvée (Chatham Inn)</a>: {{eat3}}</li>
        <li><a :href="delMarLink" target="_blank">Del Mar</a>: {{eat4}}</li>
        <li>{{eat5}}</li>
      </ul>
    </section>
    <section id="schedule" class="info-section">
      <h2>{{scheduleTitle}}</h2>
      <p>{{scheduleParagraph[0]}}</p>
    </section>
    <section  id="openBar" class="info-section">
      <h2>Open Bar</h2>
      <p>{{openBarParagraph}}</p>
    </section>
    <section id="menu" class="info-section">
      <h2>{{foodMenuTitle}}</h2>
      <p>{{foodMenuParagraph[0]}}</p>
    </section>
  </div>
</template>

<script>
import Map from '../components/Map'
import { mapState } from "vuex"

export default {
  name: "WeddingDetails",
  title: "Janie + Paul | Wedding Details",
  components: {
    Map
  },
  data() {
    return {
      chathamLink: 'https://www.chathambarsinn.com/',
      chathamImglink: 'https://i.imgur.com/6C9bU3N.jpg',
      gmapsLinks: 'https://www.google.com/maps/place/297+Shore+Rd,+Chatham,+MA+02633/@41.6849731,-69.9545042,17z/data=!3m1!4b1!4m5!3m4!1s0x89fb135f29381ae5:0xd31d250630bb7b91!8m2!3d41.6849731!4d-69.9523155',
      chathamInnLink: 'https://chathaminn.com',
      chathamTidesLink: 'https://www.chathamtides.com',
      chathamHighlanderLink: 'https://www.chathamhighlander.com',
      squireLink: 'http://www.thesquire.com',
      chathamBarsDiningLink: 'https://www.chathambarsinn.com/dining/',
      cuveeLink: 'https://cuveechatham.com',
      delMarLink: 'https://www.delmarbistro.com'
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
        ? 'Travel'
        : 'Y Arriver'
    },
    gettingThereParagraph() {
      return this.inEnglish
        ? ['The Chatham Bars Inn is located in Cape Cod at ']
        : ['Le Chatham Bars Inn est situé à Cape Cod, à ']
    },
    flyingTitle() {
      return this.inEnglish
        ? 'Flying'
        : 'Par Avion'
    },
    flying1() {
      return this.inEnglish
        ? 'Fly into Providence Rhode Island Airport and rent a car (an easy 1hr 45m drive).'
        : 'Arrivez à Providence Rhode Island Airport et louez une voiture (1h45 de conduite facile.)'
    },
    flying2() {
      return this.inEnglish
        ? 'Fly into Boston Logan Airport and rent a car (2hr drive).'
        : 'Arrivez à Boston Logan Airport et louez une voiture (2h de conduite.)'
    },
    trainTitle() {
      return this.inEnglish
        ? 'Train'
        : 'Par Train'
    },
    train1() {
      return this.inEnglish
        ? 'From NYC Penn Station take direct Amtrak train to Hyannis, MA (rent a car or rideshare for 30m drive).'
        : "Depuis la Penn Station à New York, prenez le train direct Amtrak jusqu'à Hyannis, MA (puis louez une voiture ou prenez un Uber pour 30 minute.)"
    },
    hotelsTitle() {
      return this.inEnglish
        ? 'Stay'
        : 'Hôtels'
    },
    hotel1() {
      return this.inEnglish
        ? 'block of rooms under the Mortell/Partridge name for Thursday and Friday nights; special block rate of $299/night.'
        : "bloc de chambres sous le nom Mortell/Partridge pour jeudi et vendredi soirs; prix spécial de $299/nuit."
    },
    hotel2() {
      return this.inEnglish
        ? 'small, boutique hotel tucked away in the heart of Main Street; off-season rooms starting at $299/night.'
        : "petit hôtel dans le coeur de Main Street; chambres hors-saison à partir de $299/nuit."
    },
    hotel3() {
      return this.inEnglish
        ? 'seaside hotel 14 minute drive from Chatham Bars Inn; off-season pricing starting at ~ $175.'
        : 'hôtel au bord de la mer à 14 minutes de conduite du Chatham Bars Inn; prix hors-saison à partir de $175.'
    },
    hotel4() {
      return this.inEnglish
        ? 'newly refurbished hotel 5 minute drive from Chatham Bars Inn; off-season pricing starting at ~ $165.'
        : 'hôtel récemment rénové à 14 minutes de conduite du Chatham Bars Inn; prix hors-saison à partir de $165.'
    },
    eatTitle() {
      return this.inEnglish
        ? 'Eat'
        : 'Manger'
    },
    eat1() {
      return this.inEnglish
        ? 'casual pub and bar, wonderful lobster bisque and clam chowder; perfect spot for a lowkey lunch or after wedding party ;)'
        : "bar avec bisque de homard et soupe de palourdes; endroint parfait pour un déjeuner une fête post-mariage ;)"
    },
    eat2() {
      return this.inEnglish
        ? 'upscale bar and restaurants on property'
        : "bar et restaurants chics sur location"
    },
    eat3() {
      return this.inEnglish
        ? 'fine French dining, tucked away on Main Street'
        : "fine cuisine Française, caché sur Main Street"
    },
    eat4() {
      return this.inEnglish
        ? 'casual and delicious bistro-fare; short 6 minute drive from Chatham Bars Inn'
        : "bistro à 6 minutes de conduite de Chatham Bars Inn"
    },
    eat5() {
      return this.inEnglish
        ? 'Coffee runs: Dunkin Donuts and Starbucks outside of downtown'
        : 'Café: Starbucks et autres cafés'
    },
    scheduleTitle() {
      return this.inEnglish
        ? 'Schedule'
        : 'Programme'
    },
    scheduleParagraph() {
      return this.inEnglish
        ? ['To be announced soon!']
        : ['Informations à venir!']
    },
    openBarParagraph() {
      return this.inEnglish
        ? 'A full open bar will be available during cocktail hour after the ceremony.'
        : 'Un open bar sera disponible après la cérémonie.'
    },
    foodMenuTitle() {
      return this.inEnglish
        ? 'Food Menu'
        : 'Menu'
    },
    foodMenuParagraph() {
      return this.inEnglish
        ? ['To be announced soon!']
        : ['Informations à venir!']
    }
  },
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
p, ul {
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
.info-section h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  letter-spacing: 2.5px;
  margin-left: 2rem;
}
.info-section ul {
  margin: 0 3rem;
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
  .info-section ul {
    margin: 0 2rem;
  }
}
</style>