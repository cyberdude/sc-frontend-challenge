<template>
  <div id="help_lp">
    <div class="container">
      <div class="row page-title">
        <div class="col-12">
          <h1>Help</h1>
        </div>
      </div>

      <div class="row help-cta">
        <div class="col-12">
          Please contact <a href="mailto:support@brokerportal.com">support@brokerportal.com</a> with questions or concerns.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Help',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>

#help_lp {
  min-height: 300px;
  .help-cta {
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      margin: 0 3px;
    }
  }
}

</style>
