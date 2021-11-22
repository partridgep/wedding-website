<template>
  <div id="menu">
    <div class="menu-top">
      <div>
        <img src="../assets/branch.svg" class="branch first-branch" />
      </div>
      <div>
        <h3>Hors d'oeuvres</h3>
        <ul>
          <li>{{horsdoeuvres[0]}}</li>
          <li>{{horsdoeuvres[1]}}</li>
          <li>{{horsdoeuvres[2]}}</li>
          <li>{{horsdoeuvres[3]}}</li>
        </ul>
      </div>
      <div>
        <img src="../assets/branch.svg" class="branch second-branch" />
      </div>
    </div>
    <h3>{{firstCourseTitle}}</h3>
    <ul>
      <li>{{firstCourseDescr}}</li>
    </ul>
    <h3>{{secondCourseTitle}}</h3>
    <p class="explainer">{{secondCourseExpl}}</p>
    <ul>
      <li>{{secondCourse[0]}}</li>
      <br>
      <li>{{secondCourse[1]}}</li>
      <br>
      <li>{{secondCourse[2]}}</li>
    </ul>
    <h3>{{thirdCourseTitle}}</h3>
    <p class="explainer">{{thirdCourseExpl}}</p>
    <ul>
      <li>{{thirdCourse[0]}}</li>
      <br>
      <li>{{thirdCourse[1]}}</li>
    </ul>
    <br>
    <br>
    <p class="explainer">{{thirdCourseExpl2}}</p>
    <h3>{{dessertsTitle}}</h3>
    <ul>
      <li>{{desserts[0]}}</li>
      <br>
      <li>{{desserts[1]}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: 'Menu',
  computed: {
    ...mapState(['language']),
    inEnglish() {
      return this.language === 'English'
    },
    horsdoeuvres() {
      return this.inEnglish
        ? 
      [
        'Scallop Wrapped in Applewood Smoked Bacon',
        'Miniature Grilled Cheese with Tomato Bisque',
        'Crispy Pork and Green Curry Dumpling served with Ginger Sesame Sauce',
        'Coconut Marinated Chicken Satay with a Red Curry and Peanut Chutney'
      ]
        : 
      [
        'Coquilles Saint-Jacques avec bacon',
        'Mini sandwich fromage avec bisque de tomate',
        'Ravioli de porc et curry vert avec sauce gingembre-sésame',
        'Satay de poulet mariné à la noix de coco avec chutney de curry rouge et cacahuète'
      ]
    },
    firstCourseTitle() {
      return this.inEnglish
        ? 'First Course'
        : 'Entrée'
    },
    firstCourseDescr() {
      return this.inEnglish
        ? 'Endive and Arugula Salad, Vanilla Roasted Pear, Blue Cheese Turnover, Lavender Honey Vinaigrette'
        : "Salade d'endives et roquette, poire rôtie à la vanille, chausson au fromage bleu, vinaigrette au miel et lavande"
    },
    secondCourseTitle() {
      return this.inEnglish
        ? 'Second Course'
        : 'Plat Principal'
    },
    secondCourseExpl() {
      return this.inEnglish
        ? 'Choose between the three following entrees, please make note of any food allergies/preferences'
        : 'Veuillez choisir parmi les trois options, et notez vous allergies/préférences'
    },
    secondCourse() {
      return this.inEnglish
        ? 
      [
        'Grilled Filet of Beef, Parsley and Horseradish Crust, Herb Basted Shrimp Skewer, Citrus Risotto, Prosciutto Wrapped Asparagus, Tomato Béarnaise',
        'Free Range Breast of Chicken Stuffed with Chatham Lobster, Crushed Potato with Olive Tapenade, Braised Kale, Lobster and Aged Sherry Sauce',
        'Butternut Squash Ravioli (vegetarian)'
      ]
        : 
      [
        "Filet de Boeuf Grillé, Croûte de Persil et Raifort, Brochette de Crevettes, Risotto aux Agrumes, Asperges Enrobées de Prosciutto, Tomate Béarnaise",
        "Poulet Fermier Farci au Homard, Pommes de Terre avec Tapenade d'Olives",
        'Raviolis à la Courge Butternut (végétarien)',
      ]
    },
    thirdCourseTitle() {
      return this.inEnglish
        ? 'Third Course'
        : 'Dessert'
    },
    thirdCourseExpl() {
      return this.inEnglish
        ? 'Choose between the following two options'
        : 'Veuillez choisir parmi les deux options'
    },
    thirdCourse() {
      return this.inEnglish
        ? 
      [
        'Empire Apple Tart Tatin, Flakey Puff Pastry, Cider Caramel Reduction, Vanilla Sage Chantilly',
        'Raspberry Chocolate Truffle Tart, Bittersweet Chocolate Custard, Red Berry Coulis',
      ]
        : 
      [
        'Tarte Tatin, Réduction au Cidre et Caramel, Chantilly Vanille Sauge',
        'Tartelette Framboise et Chocolat, Crème au Chocolat Amer, Coulis de Fruits Rouges',
      ]
    },
    thirdCourseExpl2() {
      return this.inEnglish
        ? 'Freshly Brewed Coffee, Tea, and Decaffeinated Coffee will be served after dinner'
        : 'Du thé, café frais et décaféiné seront servies après le dîner'
    },
    dessertsTitle() {
      return this.inEnglish
        ? 'Just desserts'
        : 'Juste les desserts'
    },
    desserts() {
      return this.inEnglish
        ? 
      [
        'Chocolate-covered strawberries with champagne will be distributed after dinner',
        'A delectable tiered cake will be ceremoniously cut and served: chocolate cake with espresso frosting + almond cake with a Bailey’s frosting',
      ]
        : 
      [
        'Des fraises enrobées de chocolat et champagne seront distribués après le dîner',
        "Un délicieux gâteau étagé sera cérémonieusement coupé et servi : gâteau au chocolat avec glaçage expresso + gâteau aux amandes avec glaçage Bailey's"
      ]
    },
  }
}
</script>

<style scoped>
  #menu {
    background-color: #F2EDE7;
    padding: 2rem;
    border-radius: 0.2rem;
    border: 2px solid #C9C8C6; 
    text-align: center;
    color: #534D3F;
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.25rem;
    letter-spacing: 0.15rem;
    font-weight: 700;
    overflow: hidden;
  }
  ul {
    display: block;
    max-width: 100%;
    list-style-type: none;
    line-height: 1.8rem;
  }
  li {
    max-width: 100%;
  }
  h3 {
    text-transform: uppercase;
    margin: 2.8rem 0;
  }
  .explainer {
    margin-top: -0.8rem;
    font-style: italic;
  }
  .menu-top {
    display: flex;
  }
  .menu-top > div:nth-child(2) {
    width: 80%;
  }
  .menu-top > div:nth-child(1), .menu-top > div:nth-child(3) {
    width: 10%;
    height: max-content;
  }
  .branch {
    transform: rotate(270deg);
    width: 100%;
    filter: invert(29%) sepia(20%) saturate(382%) hue-rotate(4deg) brightness(95%) contrast(91%);
    padding-top: 4rem;
  }
  .first-branch {
    transform: rotate(300deg); 
  }
  .second-branch {
    transform: rotate(60deg) scaleX(-1);
  }
  @media (max-width: 900px) {
  #menu {
    padding: 1rem;
  }
  ul {
    padding: 0;
  }
  li {
    padding-top: 0.5rem;
  }
  .menu-top {
    width: 100%;
  }
  .menu-top > div:nth-child(2) {
    width: 100%;
  }
  .branch {
    width: 6rem;
    margin-top: -2rem;
  }
  .menu-top > div:nth-child(1) > img {
    margin-left: -3rem;
  }
  .menu-top > div:nth-child(3) > img {
    margin-right: 5vw;
  }
}
</style>