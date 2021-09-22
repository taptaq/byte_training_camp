<template>
  <div>
      <Header/>
      <HeaderBg/>
      <Recommend/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import HeaderBg from '@/components/HeaderBg.vue';
import Recommend from '@/components/Recommend.vue';
export default {
  name: 'Home',
  components: {
    Header,
    HeaderBg,
    Recommend
  }
}
</script>
