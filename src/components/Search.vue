<template>
  <div>
    <div class="container">
      <div class="row search">
        <input v-model="searchKey" name="search" placeholder="Search" id="search">
      </div>
    </div>

    <div class="container results">
      <div class="row" v-for="(customer, index) in results" :key="index">
        {{customer.name}}
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/data.json'
import {isArray, isObject, flattenDeep} from 'lodash'

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
    console.log(data)
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
      return this.customers.filter(customer => {
        const stringObject = JSON.stringify(this.customFlat(customer))
        return stringObject.match(new RegExp(this.searchKey, 'i'))
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
