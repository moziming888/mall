<template>
  <div class="params-info" v-if="Object.keys(paramsInfo).length !== 0">
    <div class="info-sizes">
      <div class="info-title">{{ paramsInfo.rule.anchor }}</div>
      <div class="info-title">{{ paramsInfo.rule.key }}</div>
      <div
        class="info-sizes-table"
        v-for="(table, index) in paramsInfo.rule.tables"
        :key="index"
      >
        <div class="info-sizes-tr" v-for="(tr, indey) in table" :key="indey">
          <div class="info-sizes-td" v-for="(td, indez) in tr" :key="indez">
            {{ td }}
          </div>
        </div>
      </div>
      <div class="info-disclaimer">{{ paramsInfo.rule.disclaimer }}</div>
    </div>

    <div class="info-param">
      <div class="info-title">{{ paramsInfo.info.anchor }}</div>
      <div class="info-title">{{ paramsInfo.info.key }}</div>
      <div
        class="info-param-item"
        v-for="(item, index) in paramsInfo.info.set"
        :key="index"
      >
        <div class="info-param-key">
          {{ item.key }}
        </div>
        <div class="info-param-value">
          {{ item.value }}
        </div>
      </div>
    </div>

    <div class="info-img" v-if="paramsInfo.info.images">
      <img :src="paramsInfo.info.images[0]" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style scoped>
.params-info {
  padding: 0.6rem 1rem;
  border-bottom: 3px solid rgba(0, 0, 0, 0.1);
}

.info-sizes {
  padding: 0.6rem 0;
}
.info-title {
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  padding-bottom: 0.3rem;
}
.info-sizes-table {
  display: flex;
  flex-direction: column;
}

.info-sizes-tr {
  display: flex;
  flex-direction: row;
  padding: 0.6rem 0;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-sizes-td {
  flex: 1;
}
.info-disclaimer {
  font-size: 0.8rem;
  padding: 0.5rem 0;
}
.info-param-item {
  display: flex;
  align-items: center;
  padding: 0.6rem 0;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-param-key {
  min-width: 4rem;
}
.info-param-value {
  color: var(--color-high-text);
}
</style>
