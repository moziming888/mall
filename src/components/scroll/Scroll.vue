<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <!-- 调用时，slot的标签需要加class="content" -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    setTimeout(this._initScroll, 20)
  },
  methods: {
    _initScroll() {
      /* 1. 创建BScoll对象 */
      this.scroll = new BScroll(this.$refs.wrapper, {
        // 这个一定要设置为true，不然滚动区域的内容不能点击跳转
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      /* 2. 监听滚动的位置, 谁调用，谁绑定 probeType */
      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on('scroll', position => {
          this.$emit('scroll', position)
        })
      }

      /* 3. 监听scroll滚动到底部，上拉事件，谁调用，谁绑定 pullUpLoad */
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
          console.log('上拉加载')
        })
      }
    },
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    refresh() {
      // console.log("重刷新次数");
      this.scroll && this.scroll.refresh()
    },
    // 完成上拉
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    }
  }
  /*  watch: {
    data() {
      setTimeout(this.refresh, 20);
    }
  } */
}
/*
 ** ref 如果是绑定在组件中的，那么通过this.$ref.refname获取到的是一个组件对象
 ** ref 如果是绑定在普通元素中，那么通过this.$ref.refname获取到的是一个元素对象
 */
</script>
