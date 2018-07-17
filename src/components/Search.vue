<template>
  <div id="search_lp">
    <div class="container">
      <div class="row page-title">
        <div class="col-12">
          <h1>Search</h1>
        </div>
      </div>

      <div class="row search">
        <div class="col-12">
          <input v-model="searchKey" class="form-control" name="search" placeholder="Term" id="search">
        </div>
      </div>
    </div>

    <div class="container results">
      <!-- <div class="col-12"> -->
      <customer-module :customer="customer" v-for="(customer, index) in results" :key="index"></customer-module>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import data from '@/data.json'
import {isArray, isObject} from 'lodash'
import CustomerModule from '@/components/CustomerModule'

export default {
  name: 'Search',
  data () {
    return {
      customers: [],
      searchKey: ''
    }
  },
  mounted () {
    this.customers = data
  },
  methods: {
    customFlat (arrData) {
      const flatData = Object.values(arrData)
      flatData.forEach((el, index) => {
        if (isObject(el)) {
          flatData[index] = Object.values(el)
        }

        if (isArray(el)) {
          const newArray = []
          el.forEach((val, index) => {
            if (isObject(val)) {
              newArray.push(Object.values(val))
              return
            }
            newArray.push(val)
          })
          flatData[index] = newArray
        }
      })
      return flatData
    }
  },
  computed: {
    results () {
      if (this.searchKey.length < 1) {
        return []
      }
      return this.customers.filter(customer => {
        const stringObject = JSON.stringify(this.customFlat(customer))
        return stringObject.match(new RegExp(this.searchKey, 'i'))
      })
    }
  },
  components: {
    CustomerModule
  }
}
</script>

<style lang="scss" scoped>

#search_lp {
  min-height: 300px;
}
.search {
  margin-bottom: 30px;
}
</style>
