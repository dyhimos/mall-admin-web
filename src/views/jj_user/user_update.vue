<template> 
  <coupon-detail :isEdit="true"></coupon-detail>
</template>
<script>
  import CouponDetail from './user_couponDetail.vue'
  export default {
    name: 'updateCoupon',
    components: { CouponDetail }
  }
</script>
<style scoped>
</style>


