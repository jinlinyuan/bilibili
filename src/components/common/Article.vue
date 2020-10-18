<template>
  <div class="article" @click="golink">
    <div class="article-img">
      <img :src="articleData.img" alt="">
      <div class="icon-container">
        <van-icon name="success" />
        <van-icon name="friends-o" />
      </div>
    </div>
    <p class="article-name">{{ articleData.name }}</p>
  </div>
</template>

<script>
export default {
  props: ['articleData'],
  methods: {
    golink() {
      // console.log(this.articleData);
      // this.$router.push(`/article/${this.articleData.id}`)
      this.$router.push('/article/' + this.articleData.id);
    }
  }
}
</script>

<style lang="less">
.article {
  background-color: #fff;
  margin-bottom: 15px;

  &-name {
    padding: 15px 5px;
  }

  &-img {
    position: relative;

    .icon-container {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 0 15px;
      color: #fff;
      font-size: 32px;
      display: flex;
      justify-content: space-between;
    }
  }

  img {
    width: 100%;
    display: block;
  }
}
</style>