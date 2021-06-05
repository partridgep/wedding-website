<template>
  <div class="navigator">
    <button
      v-for="option in options"
      :key="option"
      class="navigatorBtn"
    >
      {{option}}
    </button>
  </div>
</template>

<script>
export default {
  name: 'WebsiteNavigator',
  data() {
    return {
      options: [
        'Our Story',
        'Wedding Details',
        'Registry'
      ]
    }
  }
}
</script>

<style scoped>
.navigator {
  height: 90vh;
  padding: 5vh 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.navigatorBtn {
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  width: 80vw;
  padding: 2rem;
  font-size: 2rem;
  background-color: white;
  border: none;
  line-height: 15px;
  position: relative;
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
  transform: scaleX(0.6);
}
.navigatorBtn:focus {
  font-weight: 900;
}
</style>