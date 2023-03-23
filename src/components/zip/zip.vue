<template>
  <div>
    <div class="p-5 w-full bg-emerald-500 rounded-lg">
      <h2 class="text-purple-900 font-bold text-2xl">Enter the USA code</h2>
      <p v-if="errorZip" class="text-red-600 font-bold  animate-pulse">This zip code does not exist! Enter a valid zip</p>
      <p v-if="!zip" class="text-red-600 font-bold  animate-pulse">The field is empty enter ZIP code please</p>
      <div class="flex mt-3">
        <input
          placeholder="ZIP-code"
          class="p-2 outline-none rounded-lg"
          v-model="zip"
          type="number"
          required
          min="0"
          @keypress.enter="initZip"
        />
        <button
          @click="initZip"
          class="mx-3 px-6 py-1 bg-slate-500 rounded-lg hover:bg-pink-500 text-black text-xl hover:text-white uppercase"
        >
          Render
        </button>
        <button
          class="mx-3 px-6 py-1 bg-slate-500 rounded-lg hover:bg-pink-500 text-black text-xl hover:text-white uppercase"
          @click="initGeoLoc"
        >
          User Ip Info
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Zip",
  data() {
    return {
      zip: "",
    };
  },
  methods: {
    ...mapActions({
      getZipCode: "getZipCode",
      getGeoLoc: "getGeoLoc",
    }),
    initZip() {
      this.getZipCode(this.zip);
      this.$store.commit('ErrorZipCode', false)
    },
    initGeoLoc() {
      this.getGeoLoc(this.ip);
    },
  },
  computed: {
    ...mapGetters({ errorZip: "errorZip" }),
  },
};
</script>
