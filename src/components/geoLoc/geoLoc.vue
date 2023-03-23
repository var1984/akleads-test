<template>
   <div class="mt-5 p-3 bg-slate-200 rounded-lg"  v-if="geoLoc">
      <p class="text-sm uppercase font-bold" v-if="geoLoc.city">City: {{geoLoc.city}}</p>
      <p class="text-sm uppercase font-bold" v-if="geoLoc.country_name">Country: {{geoLoc.country_name}}</p>
      <p class="text-sm uppercase font-bold" v-if="geoLoc.organization">Provider: {{geoLoc.organization}}</p>
      <p class="text-sm uppercase font-bold" v-if="geoLoc.state_prov">Region: {{geoLoc.state_prov}}</p>
      <p class="text-sm uppercase font-bold" v-if="geoLoc.state_prov">IP: {{geoLoc.ip}}</p>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "GeoLoc",
  methods: {
    ...mapActions({ getGeoLoc: "getGeoLoc" }),
    initGeoLoc() {
      this.getGeoLoc();
    },
  },
  computed: {
    ...mapGetters({ geoLoc: "geoLoc"}),
  },
};
</script>
