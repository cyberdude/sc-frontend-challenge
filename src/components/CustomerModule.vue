<template>
  <div class="row customer">
    <div class="col-8">
      <h4><img :src="customer.picture"> {{customer.name.first}} {{customer.name.last}}</h4>
      <div class="email"><a :href="'mailto:'+ customer.email">{{customer.email}}</a></div>
      <div class="company">{{customer.company}}</div>
      <div class="phone">{{customer.phone}}</div>
    </div>

    <div class="col-4 balance">
      <h4>{{customer.balance}}</h4>
      <div>Balance</div>
    </div>

    <div class="col-12 more-details">
      <a @click.stop.prevent="openDrawer(customer)" class="more-detail-link" href="">More details <span :class="{opened: customer.drawerOpen}">&#x25BE;</span></a>

      <div class="row drawer" v-show="customer.drawerOpen">

         <div class="col-6">
          <GmapMap
            :center="{lat: Number(customer.latitude), lng: Number(customer.longitude)}"
            :zoom="5"
            map-type-id="terrain"
            style="width: 100%; height: 200px"
          >
            <GmapMarker
              :position="google && new google.maps.LatLng(customer.latitude, customer.longitude)"
              :clickable="true"
              :draggable="true"
              @click="center=m.position"
            />
          </GmapMap>
        </div>

        <div class="col-6">
          <div>Age: {{customer.age}}</div>
          <div>Eye Color: {{customer.eyeColor}}</div>
          <div>Registered: {{customer.registered}}</div>
          <div>Status: {{customerStatus(customer.isActive)}}</div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import {gmapApi} from 'vue2-google-maps'

export default {
  name: 'Help',
  props: ['customer'],
  data () {
    return {
    }
  },
  methods: {
    customerStatus (status) {
      return status ? 'Is Active' : 'Not Active'
    },
    openDrawer (customer) {
      this.$set(this.customer, 'drawerOpen', !(customer.drawerOpen === true))
    }
  },
  computed: {
    google: gmapApi
  }
}
</script>

<style lang="scss" scoped>

@keyframes spin { 100% { -webkit-transform: rotate(180deg); transform:rotate(180deg); } }

.customer {
  margin-bottom: 30px;

  h4 {
    margin-bottom: 5px;
  }

  .email {
    font-size: .9rem;
  }
  .company, .phone {
    font-size: .8rem;
  }

  .balance {
    text-align: right;
  }

  .drawer {
    margin: 18px 0 30px;
  }

  .more-details {
    a.more-detail-link {
      margin-top: 5px;
      display: inline-block;
      span.opened {
        display: inline-block;
        transform: rotate(180deg);
      }
    }
  }
}

</style>
