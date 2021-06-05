<template>
  <div>
    <MainSplash />
    <WebsiteNavigator />
  </div>
</template>

<script>
import MainSplash from '../components/MainSplash'
import WebsiteNavigator from '../components/WebsiteNavigator'

export default {
  name: "Home",
  title: "Janie + Paul",
  components: {
    MainSplash,
    WebsiteNavigator
  }
};
</script>