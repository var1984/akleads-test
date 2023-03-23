<template>
  <div class="mt-5 p-3 bg-slate-200 rounded-lg" v-if="zipCodeInfo">
    <p class="text-sm mb-2 uppercase font-bold">
      State: {{ zipCodeInfo?.places[0]?.state }}
    </p>
    <p class="text-sm mb-2 uppercase font-bold">
      City: {{ zipCodeInfo?.places[0]?.["place name"] }}
    </p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "ZipCodeInfo",

  computed: {
    ...mapGetters({ zipCodeInfo: "zipCodeInfo" }),
  },
};
</script>
