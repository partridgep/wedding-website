<template>
  <div class="header">
    <router-link class="header-link" to="/">{{homeBtn}}</router-link>
    <div class="languageSelector">
      <button class="languageBtn"
        @click="toggleLanguageDropdown"
        @blur="closeLanguageDropdown"
      >
        {{selectedLanguage}}
        <ChevronDownIcon v-if="!languageDropdownOpen" class="arrowIcon"/>
        <ChevronUpIcon v-if="languageDropdownOpen" class="arrowIcon"/>
      </button>
      <div v-if="languageDropdownOpen" class="languageDropdown">
        <button
          v-for="langOption of availableLanguages"
          :key="langOption"
          @click="SET_LANGUAGE(langOption)"
        >{{langOption}}</button>
      </div>
    </div>
    <button class="menuBtn" @click="showMobileNav"><MenuIcon class="menuIcon"/></button>
    <div class="grouped-links" :class="mobileNavOpen && 'mobileNav'">
      <router-link
        v-for="page in options"
        :key="page"
        class="header-link"
        :to="path(page)"
        :class="[isCurrentPage(page), mobileBtnClass]"
        @click.native="mobileNavOpen = false"
      >
        {{page}}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"
import { MenuIcon, ChevronDownIcon, ChevronUpIcon } from "@vue-hero-icons/outline"

export default {
  name: 'Header',
  components: {
    MenuIcon,
    ChevronDownIcon,
    ChevronUpIcon
  },
  data() {
    return {
      mobileNavOpen: false,
      languageDropdownOpen: false
    }
  },
  computed: {
    ...mapState(['language', 'availableLanguages', 'navOptions']),
    selectedLanguage() {
      return this.language === 'English' ? 'EN' : 'FR'
    },
    homeBtn() {
      return this.language === 'English' ? 'Home' : 'Accueil'
    },
    options() {
      return this.language === 'English' ? this.navOptions.english : this.navOptions.french
    },
    mobileBtnClass () {
      return this.showMobileNav && 'mobileNavBtn'
    },
  },
  methods: {
    ...mapMutations(['SET_LANGUAGE']),
    englishPageValue(option) {
      if (this.language === 'English') return
      else {
        let optionIdx = this.navOptions.french.findIndex((val) => val === option)
        let englishOption = this.navOptions.english[optionIdx]
        return englishOption
      }
    },
    path(option) {
      if (this.language === 'English') return `/${option.replace(/\s/g, '-')}`.toLowerCase()
      else return `/${this.englishPageValue(option).replace(/\s/g, '-')}`.toLowerCase()
    },
    isCurrentPage(page) {
      if (this.language === 'English') return page === this.$route.name ? 'current-page' : ''
      else return this.englishPageValue(page) === this.$route.name ? 'current-page' : ''
    },
    showMobileNav() {
      this.mobileNavOpen = !this.mobileNavOpen
    },
    toggleLanguageDropdown() {
      this.languageDropdownOpen = !this.languageDropdownOpen
    },
    closeLanguageDropdown() {
      setTimeout(() => this.languageDropdownOpen = false, 100)
    }
  },
}
</script>

<style scoped>
.header {
  width: 100vw;
  height: 75px;
  background-color: black;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
}
.header-link {
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  color: white;
  text-decoration: none;
  letter-spacing: 1px;
  font-size: 1.3em;
  margin: 1.2em;
  transition: all 0.2s;
}
@media (max-width: 800px) {
  .mobileNavBtn {
    border-top: 1px solid white;
    height: 100%;
    width: 100vw;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fade-in 0.2s ease-in;
  }
}
.current-page {
  font-weight: 900;
}
.grouped-links {
  margin-left: 1rem;
}
@media (max-width: 800px) {
  .grouped-links {
    display: none;
    margin-left: 0;
  }
}
@media (max-width: 800px) {
  .mobileNav {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 284px;
    position: absolute;
    top: 75px;
    left: 0;
    background-color: black;
    text-align: center;
    animation: unroll 0.2s ease-in;
  }
}
.languageSelector {
  position: relative;
  margin: 0 1rem 0 auto;
}
.languageBtn {
  color: white;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  border: 1px solid rgb(158, 158, 158);
  padding: 4px 8px 2px 8px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.arrowIcon {
  margin-bottom: 0.25rem;
}
.languageDropdown {
  position: absolute;
  top: 2.5rem;
  right: 0;
  background-color: black;
  border: 1px solid rgb(158, 158, 158);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.languageDropdown > button {
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  background: none;
  border: none;
  color: white;
  padding: 10px 25px;
  font-size: 1.1rem;
  cursor: pointer;
}
.languageDropdown > button:first-of-type {
  border-bottom: 0.5px solid white;
}
.menuIcon {
  color: white;
  height: 2rem;
  width: 2rem;
}
.menuBtn, .languageBtn {
  background: none;
  cursor: pointer;
}
.menuBtn {
  border: none;
  margin: 0 1rem;
}
@media (min-width: 800px) {
  .menuBtn {
    display: none;
  }
}
@keyframes unroll {
  from {height: 0;}
  to {height: 284px;}
}
</style>