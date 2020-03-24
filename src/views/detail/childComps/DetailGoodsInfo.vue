<template>
  <div v-if="Object.keys(goodsInfo).length !== 0">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{ goodsInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div v-for="(item, index) in goodsInfo.detailImage" :key="index">
      <div class="info-key">
        {{ item.key }}
      </div>
      <div class="info-list">
        <img
          v-for="(item, index) in item.list"
          :key="index"
          :src="item"
          @load="imageLoad"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0
    };
  },
  methods: {
    imageLoad() {
      if (++this.counter == this.imagesLength) {
        this.$emit("detailImageLoad");
      }
    }
  },
  watch: {
    goodsInfo() {
      this.imagesLength = this.goodsInfo.detailImage[0].list.length;
    }
  }
};
</script>
<style scoped>
.goods-info {
  padding: 1.25rem 0;
  border-bottom: 5px solid #f2f5f8;
}

.info-desc {
  padding: 0 1rem;
}

.info-desc .start,
.info-desc .end {
  width: 5.625rem;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}

.info-desc .start {
  float: left;
}

.info-desc .end {
  float: right;
}

.info-desc .start::before,
.info-desc .end::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: var(--color-black-s);
  bottom: 0;
}

.info-desc .end::after {
  right: 0;
}

.info-desc .desc {
  padding: 1rem 0;
}

.info-key {
  margin: 0.6rem 0 0.6rem 1rem;
  color: var(--color-black-s);
  font-size: 1.1em;
  font-weight: bold;
}

.info-list img {
  width: 100%;
}
</style>
