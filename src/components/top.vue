<template>
  <div id="top" class="flex">
    <div id="left" class="flex">
      <router-link to="/Home">
        <div id="ico_size">
          <img src="../assets/img/ico.png" alt="" />
        </div>
      </router-link>
      <div id="search">
        <input
          type="text"
          v-model="input"
          @keyup.enter="search"
          placeholder="搜索"
        />
        <div id="search_img_size">
          <img src="../assets/img/search.png" alt="" />
        </div>
      </div>
    </div>
    <div id="right" class="flex">
      <div id="login" class="flex">
        <div id="handsame">
          <img :src="webHender ? webHender : locHender" alt="" />
        </div>
        <div>
          <p id="userName">{{ userName ? userName : "未登录" }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { useStore } from "vuex";
import { reactive, onMounted, defineComponent, toRefs } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "top",
  setup(props) {
    let data = reactive({
      input: "",
      locHender: require("../assets/img/handsame.png"),
      webHender: "",
    });
    let store = useStore();
    let router = useRouter();
    // onMounted(() => {
    //   console.log('1111')
    //   console.log("useStore", store.state.searchResultList);
    // });
    let icon_click = () => {};
    let search = () => {
      router.push({ path: "/Search" });
      store.commit("changeState", { name: "searchInfo", value: data.input });
      store.dispatch("search", { type: "1" });
    };
    return {
      ...toRefs(data),
      search,
    };
  },
});
</script>

<style scoped lang="less">
#top {
  // height: 50px;
  padding: 10px 20px;
  justify-content: space-between;
  #left {
    #ico_size {
      width: 110px;
      margin-right: 30px;
    }
    #search {
      position: relative;
      input {
        font-size: 13px;
        letter-spacing: 1px;
        color: #fff;
        background-color: #e13e3e;
        height: 30px;
        line-height: 30px;
        padding: 10px;
        padding-left: 30px;
        border-radius: 20px;
      }
      ::-webkit-input-placeholder {
        /* WebKit browsers */
        color: #f09e9e;
        font-size: 13px;
      }

      ::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #f09e9e;
        font-size: 13px;
      }
      :-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: #f09e9e;
        font-size: 13px;
      }
      #search_img_size {
        position: absolute;
        top: 5px;
        left: 10px;
        width: 20px;
      }
    }
  }
  #right {
    #login {
      #handsame {
        width: 26px;
        border-radius: 50%;
        overflow: hidden;
        background-color: #e0e0e0;
      }
      #userName {
        color: #fbd9d9;
        margin: 0 10px;
      }
    }
  }
}

input {
  border: none;
  outline: none;
}
.flex {
  display: flex;
  align-items: center;
  // justify-content: center;
}
img {
  display: block;
  width: 100%;
  height: 100%;
}
input,
p,
div,
a {
  font-family: "微软雅黑", Courier, monospace;
  font-size: 13px;
}
</style>
