
<template>
  <div class="container-not-found">
    <h1 :aria-label="$t('titlePageNotFound')">{{  $t("pageNotFound") }}</h1>
    <p :aria-label="$t('pageNotFound')"> {{  $t("pageNotFoundContent") }} </p>
    <p :aria-label="$t('pageNotFound')">"{{ $route.path }}"</p>
    <router-link to="/home" >
      <pv-button class="btn-home" :aria-label="$t('alBtnReturnHome')" >{{$t('btnReturnHome')}}</pv-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "not-found",
}
</script>
<style scoped>
.container-not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px;
  gap: 20px;
  height:70vh;
}
router-link a {
  text-decoration: none;
  color: white;
}



</style>