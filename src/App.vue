<template>
  <div id="app">
    <broker-header></broker-header>
    <router-view/>
  </div>
</template>

<script>
import BrokerHeader from '@/components/BrokerHeader'

export default {
  name: 'App',
  components: {
    BrokerHeader
  }
}

</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
