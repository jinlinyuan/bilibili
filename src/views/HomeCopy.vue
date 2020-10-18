<template>
  <div class="homecopy">
    <div class="homecopy-top"></div>
    <van-tabs v-model="active" sticky>
      <van-tab v-for="item in categoryList" :key="item._id" :title="item.title">
        <van-list
          :immediate-check="false"
          v-model="item.loading"
          :finished="item.finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <!-- <Article v-for="(act, index) in item.list" :key="index"></Article> -->
          <bili-article v-for="(act, index) in item.list" :key="index" :article-data="act"></bili-article>
          <!-- <div v-for="(act, index) in item.list" :key="index">{{ act.name }}</div> -->
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import BiliArticle from '../components/common/Article';

export default {
  data() {
    return {
      categoryList: [],
      active: 0
    };
  },
  created() {
    this.getCategory();
  },
  watch: {
    active(newValue, oldValue) {
      this.selectArticle();
    },
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        this.getCurCategory().page += 1;
        // this.getCurCategory().page = this.getCurCategory().page + 1
        this.selectArticle();
      }, 1000)
    },
    async getCategory() {
      const res = await this.$http.get("/category");
      res.data.forEach((item) => {
        item.page = 0;
        item.pagesize = 10;
        item.loading = false;
        item.finished = false;
        item.list = [];
      });
      this.categoryList = res.data;
      this.selectArticle();
    },
    // 获取当前页的视频数据
    async selectArticle() {
      let current = this.getCurCategory();
      const res = await this.$http.get("/detail/" + current._id, {
        params: {
          page: current.page,
          pagesize: current.pagesize,
        },
      });
      // [1,2,3,4]
      current.list.push(...res.data);
      current.loading = false;
      // 99 10 9 9
      if (res.data.length < current.pagesize) {
        current.finished = true;
      }
    },
    getCurCategory() {
      return this.categoryList[this.active];
    },
  },
  components: {
    BiliArticle
  },
  computed: {
    currentCat() {
      return this.categoryList[this.active];
    }
  }
};
</script>

<style lang="less">
.homecopy {
  &-top {
    height: 80px;
    background-color: aqua;
  }
}
</style>
