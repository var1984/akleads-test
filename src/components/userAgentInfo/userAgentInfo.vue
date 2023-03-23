<template>
  <div class="mt-5 p-3 bg-slate-200 rounded-lg" v-if="userAgent || referer">
    <p class="text-sm uppercase font-bold" v-if="userAgent">User Agent: {{ userAgent }}</p>
    <p class="text-sm uppercase font-bold" v-if="referer">HTTP Referer: {{ referer }}</p>
  </div>
</template>

<script>
export default {
  name: "UserAgent",
  data() {
    return {
      userAgent: "",
      referer: "",
    };
  },

  mounted() {
    this.userAgent = navigator.userAgent;

    const urlParams = new URLSearchParams(window.location.search);
    this.referer = document.referrer || null;
    if (urlParams.has("utm1")) {
      this.utmTags.utm1 = urlParams.get("utm1");
    }
    if (urlParams.has("utm2")) {
      this.utmTags.utm2 = urlParams.get("utm2");
    }
  },
};
</script>
