<template>
  <div class="info">
    <router-link :to="item.href" v-for="(item, index) in IconList" :key="index">
      <i :class="item.icon"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HeaderIconInfo',
  data() {
    return {
      IconList: [
        {
          icon: 'el-icon-share',
          href: ''
        },
        {
          icon: 'el-icon-user',
          href: ''
        },
        {
          icon: 'el-icon-setting',
          href: '/setting'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.info
  padding .5rem 0
  text-align right 
  i    
    font-size 1.3rem
    padding-left 1rem
</style>
