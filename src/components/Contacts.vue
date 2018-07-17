<template>
  <div>
    <div class="container">
      <div class="row customer" v-for="(customer, index) in currentCustomers" :key="index">

        <div class="col-6">
          {{customer.name.first}} {{customer.name.last}}
        </div>

      </div>

      <div class="row pagination">
        Current page: {{currentPage}}
        <ul>
          <li v-for="page in pages" :key="page">
            <router-link :to="{name: 'Contacts', params: {page: page}}">{{page}}</router-link>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
import data from '@/data.json'
const CUSTOMERS_PER_PAGE = 10

export default {
  name: 'Contacts',
  data () {
    return {
      customers: []
    }
  },
  mounted () {
    this.customers = data
  },
  methods: {
  },
  computed: {
    currentPage () {
      return parseInt(this.$route.params.page)
    },
    currentCustomers () {
      const startIndex = (this.currentPage - 1) * CUSTOMERS_PER_PAGE

      return this.customers.slice(startIndex, startIndex + CUSTOMERS_PER_PAGE)
    },
    pages () {
      return parseInt(this.customers.length / CUSTOMERS_PER_PAGE) + 1 || 0
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
