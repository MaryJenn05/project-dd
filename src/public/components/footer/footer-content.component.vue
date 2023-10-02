<script >
export default {
  name: "footer-content"
}
</script>

<template>
  <div class="footer">
    <div>
      <p :aria-label="$t('copyright')"> {{ $t("copyrightContent")}}</p>
    </div>
    <div>
      <p :aria-label="$t('developer')">{{ $t("developerContent")}}</p>
    </div>
  </div>
</template>

<style scoped>
.footer{
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #6366f1;
  padding: 50px;
}
</style>