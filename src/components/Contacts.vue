<template>
  <div>
    <div class="container">
      <div class="row page-title">
        <div class="col-12">
          <h1>Contacts</h1>

          <div class="pagination">
            <ul>
              <li>Page: </li>
              <li v-for="page in pages" :key="page">
                <router-link :to="{name: 'Contacts', params: {page: page}}">{{page}}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="contact-area">
        <customer-module :customer="customer" v-for="(customer, index) in currentCustomers" :key="index"></customer-module>
      </div>

      <div class="row pagination">
        <div class="col-12">
          <ul>
            <li>Page: </li>
            <li v-for="page in pages" :key="page">
              <router-link :to="{name: 'Contacts', params: {page: page}}">{{page}}</router-link>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import data from '@/data.json'
import CustomerModule from '@/components/CustomerModule'

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
  },
  components: {
    CustomerModule
  }
}
</script>

<style lang="scss" scoped>

.contact-area {
  margin: 30px 0;
}
.pagination {
  ul {
    list-style-type: none;
    display: inline-block;
    margin: 0;
    padding: 0;
    li {
      float: left;
      margin-right: 10px;

      a.router-link-exact-active {
        opacity: .5;
      }
    }

  }
}
</style>
