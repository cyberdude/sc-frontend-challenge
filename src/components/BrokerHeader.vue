<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-6">
          Broker Portal
        </div>

        <div class="col-6">
          <div id="broker_menu">
            <ul>
              <li><router-link :to="'Home'">Home</router-link></li>
              <li><router-link :to="'/contacts/1'">Contacts</router-link></li>
              <li><router-link :to="'Search'">Search</router-link></li>
              <li><router-link :to="'Help'">Help</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrokerHeader'
}
</script>

<style lang="scss" scoped>

#broker_menu {
  ul {
    float: right;
    list-style-type: none;
    li {
      float: left;
      margin-right: 20px;
    }
  }
}

</style>
