<template>
  <div>

    <div class="container">
      <div class="row page-title">
        <div class="col-12">
          <h1>Overview</h1>
        </div>
      </div>
      <div class="row stat-summary">
        <div class="col-12 col-md-4">
          <div class="content-wrap">
            <div class="stat">{{customerCount}}</div>
            <h5>Customers</h5>
          </div>
        </div>

        <div class="col-12 col-md-4">
          <div class="content-wrap">
            <div class="stat">{{averageAge}}</div>
            <h5>Average Age</h5>
          </div>
        </div>

         <div class="col-12 col-md-4">
          <div class="content-wrap">
            <div class="stat">{{standardDeviation}}</div>
            <h5>Standard Deviation</h5>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <GmapMap
            :center="{lat:22, lng:10}"
            :zoom="2"
            map-type-id="terrain"
            style="width: 100%; height: 500px"
          >
            <GmapMarker
              :key="index"
              v-for="(m, index) in customers"
              :position="google && new google.maps.LatLng(m.latitude, m.longitude)"
              :clickable="true"
              :draggable="true"
              @click="center=m.position"
            />
          </GmapMap>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {gmapApi} from 'vue2-google-maps'
import accounting from 'accounting'
import data from '@/data.json'

export default {
  name: 'Home',
  data () {
    return {
      stat: {
        count: 0
      },
      customers: []
    }
  },
  mounted () {
    this.customers = data
  },
  methods: {
  },
  computed: {
    google: gmapApi,
    customerCount () {
      return data.length
    },
    averageAge () {
      var totalAges = 0

      data.forEach(customer => {
        totalAges += customer.age
      })
      return parseInt(totalAges / data.length)
    },
    standardDeviation () {
      const moneyOwnedSet = data.map(cust => {
        return accounting.unformat(cust.balance)
      })

      var totalMoneyOwed = 0
      moneyOwnedSet.forEach(m => { totalMoneyOwed += m })

      const moneyOwnedSetAvg = totalMoneyOwed / moneyOwnedSet.length

      const mean = totalMoneyOwed / moneyOwnedSetAvg

      const squaredValues = moneyOwnedSet.map(m => {
        return Math.pow((m - mean), 2)
      })

      var sumSquaredValue = 0
      squaredValues.forEach(sVal => { sumSquaredValue += sVal })

      const calculatedSquared = sumSquaredValue / (moneyOwnedSet.length - 1)
      return accounting.formatMoney(Math.sqrt(calculatedSquared))
    }
  }
}
</script>

<style lang="scss" scoped>

.page-title {
  text-align: center;
  h1 {
    width: 100%;
  }
}

.stat-summary {
  height: 120px;
  margin-bottom: 30px;
  > div {
    justify-content: center;
    align-items: center;
    display: flex;
    .content-wrap {
      text-align: center;
      .stat {
        font-size: 2rem;
      }
    }
  }
  > div:not(:first-child) {
    border-left: 1px solid #ccc;
  }
}
</style>
