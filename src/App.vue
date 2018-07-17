<template>
  <div id="app">
    <broker-header></broker-header>
    <router-view :key="$route.path"/>
  </div>
</template>

<script>
import BrokerHeader from '@/components/BrokerHeader'

export default {
  name: 'App',
  components: {
    BrokerHeader
  },
  mounted () {
  }
}

</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
