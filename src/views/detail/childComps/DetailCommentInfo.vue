<template>
  <div class="commwnt-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="comment-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="comment-user">
      <img :src="commentInfo.user.avatar" alt="" />
      <span>{{ commentInfo.user.uname }}</span>
    </div>
    <div class="comment-detail">
      <P>{{ commentInfo.content }}</P>
      <div class="info-other">
        <span class="date">{{ commentInfo.created | showDate }}</span>
        <span>{{ commentInfo.style }}</span>
      </div>
      <div class="info-imgs">
        <img
          :src="item"
          v-for="(item, index) in commentInfo.images"
          :key="index"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/until";
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    showDate(value) {
      // 将时间戳转化为date对象
      const date = new Date(value * 1000);

      // 2.将date进行格式化
      return formatDate(date, "yyyy-MM-dd");
    }
  }
};
</script>
<style scoped>
.commwnt-info {
  padding: 20px 15px;
  border-bottom: 3px solid rgba(0, 0, 0, 0.1);
}
.comment-header {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
.comment-user {
  display: flex;
  align-items: center;
  margin: 8px 0;
}
.comment-user img {
  width: 3em;
  height: 3em;
  border-radius: 50%;
}
.comment-user span {
  padding-left: 10px;
}
.comment-detail .info-other {
  font-size: 0.8em;
  padding: 0.5em 0;
}
.info-imgs {
}
.info-imgs img {
  width: 24%;
  padding-right: 1%;
}
</style>
