<template>
  <div>
    <ZipCodeInfo />
    <GeoLoc />
  </div>
</template>
<script>
import GeoLoc from "@/components/geoLoc/geoLoc";
import ZipCodeInfo from "@/components/zipCodeInfo/zipCodeInfo";
export default {
  name: "InfoBoard",
  components: {
    GeoLoc,
    ZipCodeInfo,
  },
};
</script>
