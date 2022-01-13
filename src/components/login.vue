<template>
  <div id="login">
    <div>
      <img :src="img_show" alt="" />
    </div>
    <div>
      <div id="login_change">
        <p @click="login_change(1)">扫码登录</p>
        <p @click="login_change(2)">邮箱登录</p>
        <p @click="login_change(3)">密码登录</p>
        <p @click="login_change(4)">短信登录</p>
      </div>
      <div>
        <div v-if="login_way == 1">扫码登陆</div>
        <div v-if="login_way == 2">邮箱登录</div>
        <div v-if="login_way == 3">
          密码登录
          <div id="input_box">
            <div>
              <input type="text" placeholder="请输入手机号" />
            </div>
            <div>
              <input type="text" placeholder="请输入密码" />
            </div>
          </div>
        </div>
        <div v-if="login_way == 4">短信登录</div>
      </div>
    </div>
  </div>
</template>


<script>
import { useStore } from "vuex";
import { reactive, onMounted, defineComponent, toRefs } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "login",
  setup(props) {
    let data = reactive({
      img_hide: require("../assets/img/login/hide1.jpg"),
      img_show: require("../assets/img/login/show1.jpg"),
      login_way: "1",
    });
    let store = useStore();
    let router = useRouter();
    // onMounted(() => {
    //   console.log('1111')
    //   console.log("useStore", store.state.searchResultList);
    // });
    let login_change = (e) => {
      let text = "";
      switch (e) {
        case 1:
          text = "，扫码登陆";
          break;
        case 2:
          text = "，邮箱登陆";
          break;
        case 3:
          text = "，密码登陆";
          break;
        case 4:
          text = "，短信登陆";
          break;
        default:
          break;
      }
      console.log("参数为" + e + "，登陆方式为" + text);
      data.login_way = e;
    };
    return {
      ...toRefs(data),
      login_change,
    };
  },
});
</script>

<style scoped lang="less">
#login {
  width: 390px;
  height: 270px;
  background-color: antiquewhite;
  border-radius: 6px;

  #login_change {
    display: flex;
    justify-content: center;
    p {
      padding: 10px;
      cursor: pointer;
    }
  }
}

#input_box {
  input {
    font-size: 13px;
    letter-spacing: 1px;
    color: #fff;
    background-color: #e13e3e;
    // background-color: #e1584f80;
    // background-color: #eb2f23;
    height: 30px;
    line-height: 30px;
    padding: 10px;
    // padding-left: 30px;
    border-radius: 20px;

    border: none;
    outline: none;
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

.pointer {
  cursor: pointer;
}
</style>
