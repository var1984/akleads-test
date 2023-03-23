<template>
  <div class="m-auto max-w-5xl pt-10">
    <Zip />
    <InfoBoard />
    <HelloWorld />
  </div>
</template>
<script>
import HelloWorld from "@/components/userAgentInfo/userAgentInfo.vue";
import Zip from "@/components/zip/zip";
import InfoBoard from "@/components/infoBoard/infoBoard";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    InfoBoard,
    Zip,
  }
};
</script>
