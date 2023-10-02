
<template>
  <div class="card">
    <pv-toolbar>
      <template #start>

        <router-link to="/home">
          <h1 :aria-label="$t('pageName')">{{ $t("pageName") }}</h1>
        </router-link>
      </template>
      <template #end>
        <div class="nav">
          <router-link to="/home">
            <pv-button class="btn-nav" :aria-label="$t('alBtnHome')" :label="$t('btnHome')" icon="pi pi-home" />
          </router-link>

          <router-link to="/home">
            <pv-button class="btn-nav" :aria-label="$t('alBtnNav')" :label="$t('btnNav')" icon="pi pi-home" />
          </router-link>
        </div>
      </template>


    </pv-toolbar>
  </div>
</template>

<script >
import { ref } from 'vue';

const items = ref([

])
export default {
  name: "header-content"
}
</script>

<style scoped>
pv-toolbar {
  color: #ffffff;
}
h1{
  color: #6366f1;
}
router-link a {
  text-decoration: none;
}
.nav{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.btn-nav{
  display: flex;
  gap: 8px;
}
</style>