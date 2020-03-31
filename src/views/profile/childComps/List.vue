<template>
  <ul class="list">
    <!-- <li > -->
    <list-item
      v-for="(item, index) in list"
      :key="index"
      :item="item"
      @click.native="item.path === '' ? '' : $router.push(item.path)"
    >
      <div slot="left">
        <i class="title-icon" :class="item.icon"></i>
        <span class="title">{{ item.title }}</span>
      </div>
      <div slot="right">
        <slot name="right-icon" v-if="item.info">{{ item.info }}</slot>
        <i class="ico-right el-icon-arrow-right"></i>
      </div>
    </list-item>
    <!-- </li> -->
  </ul>
</template>

<script>
import ListItem from './ListItem'
export default {
  name: 'List',
  components: {
    ListItem
  },
  props: {
    list: {
      type: Array
    }
  }
}
</script>
<style lang="stylus" scoped>
.list
  .title-icon
    color $color-blue
    font-size 1.2rem
  .title
    padding-left .5rem
  .ico-right
    padding-left .4rem
</style>
