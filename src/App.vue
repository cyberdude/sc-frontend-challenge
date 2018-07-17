<template>
  <div id="app">
    <broker-header></broker-header>
    <router-view :key="$route.path"/>
    <broker-footer></broker-footer>
  </div>
</template>

<script>
import BrokerHeader from '@/components/BrokerHeader'
import BrokerFooter from '@/components/BrokerFooter'

export default {
  name: 'App',
  components: {
    BrokerHeader,
    BrokerFooter
  },
  mounted () {
  }
}

</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  position: relative;
}
</style>

<style lang="scss">
.page-title {
  // text-align: center;
  h1 {
    width: 100%;
    // text-align: center;
  }
}
</style>
