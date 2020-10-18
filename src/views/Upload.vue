<template>
  <div class="upload">
    <!-- <van-uploader v-model="fileList" :after-read="afterRead" /> -->
    <van-uploader accept="video/*" :after-read="afterRead" />
    
    <!-- <img :src="img" alt=""> -->

    <!-- <van-uploader :after-read="afterRead" />
    <img class="image" :src="img" alt=""> -->
    <!-- <img class="image" :src="img" alt="">
    <br> -->
    <!-- <input type="file" accept="image/*" @change="afterRead"> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: '',
      fileList: []
    }
  },
  methods: {
    async afterRead(e) {
      // console.log(e.target.files[0]);
      const formdata = new FormData();
      formdata.append('file', e.target.files[0]);
      const response = await this.$http.post('/upload', formdata);
      this.img = response.data.url;
    }
    // async afterRead(file) {
    //   // 此时可以自行将文件上传至服务器
    //   console.log(file);
    //   // this.img = file.content;
    //   // this.fileList.push(file.content);
    //   const formdata = new FormData();
    //   formdata.append('file', file.file);
    //   // 上传的接口
    //   // this.$http.post('/upload', formdata).then()
    //   const response = await this.$http.post('/upload', formdata);
    //   // console.log(response);
    //   this.img = response.data.url;
    // },
  }
}
</script>

<style lang="less">
.upload {
  height: 100vh;
  width: 100vw;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;

  .image {
    width: 200px;
    height: 200px;
  }
}
</style>