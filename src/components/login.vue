<template>
  <div id="login">
    <div id="close">
      <!-- 关闭 -->
    </div>
    <div id="main_box">
      <div class="main">
        <div id="login_box">
          <div v-if="login_way == 1">
            <div id="QC_size">
              <img src="../assets/img/login/logo.png" alt="" />
            </div>
          </div>

          <div v-if="login_way == 2">
            <div id="input_box">
              <div id="acc">
                <span class="text">账 号</span>
                <input type="text" placeholder="请输入163邮箱" />
              </div>

              <div id="password">
                <span class="text">密 码</span>
                <input type="text" placeholder="请输入密码" />
              </div>
            </div>
          </div>

          <div v-if="login_way == 3">
            <div id="input_box">
              <div id="acc">
                <span class="text">账 号</span>
                <input type="text" placeholder="请输入手机号" />
              </div>

              <div id="password">
                <span class="text">密 码</span>
                <input type="text" placeholder="请输入密码" />
              </div>
            </div>
          </div>

          <div v-if="login_way == 4">
            <div id="input_box">
              <div id="acc">
                <span class="text">账 号</span>
                <input type="text" placeholder="请输入手机号" />
              </div>

              <div id="password">
                <span class="text">验证码</span>
                <input type="text" placeholder="请输入密码" />
              </div>
            </div>
          </div>
        </div>
        <div id="login_change">
          <p
            :class="login_way == item.id ? 'p_active' : ''"
            v-for="item in login_change_arr"
            :key="item.id"
            @click="login_change(item.id)"
          >
            {{ item.name }}
          </p>
        </div>
        <div>
          <div class="button">登录</div>
        </div>
      </div>
      <div class="footer">
        footer
        <!-- footer -->
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
      login_change_arr: [
        {
          name: "扫码登陆",
          id: "1",
        },
        {
          name: "邮箱登录",
          id: "2",
        },
        {
          name: "密码登陆",
          id: "3",
        },
        {
          name: "短信登陆",
          id: "4",
        },
      ],
      login_way: "3",
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
  background-color: antiquewhite;
  border-radius: 6px;

  width: 500px;
  border-radius: 8px;
  box-shadow: 0 0 6px rgb(0 0 0 / 10%);
  padding: 70px 65px 29px;
  box-sizing: border-box;
  background-color: #fff;
  //  img_hide: require("../assets/img/login/hide1.jpg"),
  //     img_show: require("../assets/img/login/show1.jpg"),

  background-image: url(../assets/img/login/left_show.png),
    url(../assets/img/login/logo.png), url(../assets/img/login/right_show.png);
  background-position: 0 100%, 50% 0, 100% 100%;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-size: 14%;
  position: relative;
  flex-direction: column;
  #close {
    position: absolute;
    width: 18px;
    height: 18px;
    top: 20px;
    right: 20px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEgSURBVHgB7ddLCsIwEAbgSXqRepReQnAjuBJPJK4EN4KX8Cj2Im1NSldhYubVjc2/0BLJ5AObTAtQU/Nncdjg7fH6xO9xGLrL6dCDYa73Z+ub5h2vz8f9Lv3do7Om+XOeGAuAPaZd1gASaByHLkzoLVEJpp/XQOJ+FvChgAsFIBRQ/H0YJlfLFQspURxMEaRFcTEkkBQlwZBBXJQUwwJRURoMG1RCaTEiUA4Vx7UYMQhDLcMqjAqEoECLifGgjctcG5RjJb2Bl2otKNuM/KZGGqVF75Nt+8xusuh9/IOxsLW1KF7rIJ4zGhS9uTIPPSmK9vghPIElqPIDmrIdcFFuTYwE5dbGcFFo67DGxMQa6dsMujY6ewKwxKCoCWpqtpEvwlafLd9Y4QQAAAAASUVORK5CYII=)
      no-repeat;
    background-size: cover;
    cursor: pointer;
  }
  #main_box {
    // background-color: rgba(80, 97, 252);
  }
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    // background-color: rgba(127, 255, 212);

    #login_change {
      display: flex;
      justify-content: center;
      p {
        font-size: 14px;
        margin: 10px;
        // padding: 3px 5px;
        cursor: pointer;
        color: #505050;
      }
      .p_active {
        // color: #4fa5d9;
        color: #eb3023e7;

        // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      }
    }

    #login_box {
      width: 260px;
      height: 100px;
      margin: 10px 0;
      // background-color: rgb(246, 255, 127);
      display: flex;
      align-items: center;
      justify-content: center;
      #QC_size {
        width: 100px;
        height: 100px;
        border-radius: 4px;
        // border: 1px solid #505050;
        // box-shadow: 0 0 6px rgb(0 0 0 / 10%);
        // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
      }
      #input_box {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        border-radius: 8px;

        // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);

        #acc {
          display: flex;
          padding: 0 20px;
          align-items: center;
          border: 1px solid #e7e7e7;
          border-radius: 8px 8px 0 0;
          height: 35px;
          // border-bottom: none;
        }
        #password {
          position: relative;
          display: flex;
          padding: 0 20px;
          align-items: center;
          // justify-content: space-between;
          border: 1px solid #e7e7e7;
          border-radius: 0 0 8px 8px;
          height: 35px;
        }
        .text {
          white-space: normal;
          margin-right: 20px;
          font-size: 14px;
          color: #212121;
        }
        input {
          // font-size: 13px;
          // letter-spacing: 1px;
          // color: #fff;
          // // background-color: #e13e3e;
          // // background-color: #e1584f80;
          // // background-color: #eb2f23;
          // height: 30px;
          // line-height: 30px;
          // padding: 10px;
          // // padding-left: 30px;
          // border-radius: 20px;

          // border: none;
          // outline: none;

          width: 150px;
          outline: none;
          border: none;
          font-size: 14px;
          color: #212121;
          -webkit-box-shadow: 0 0 0 20px #fff inset;
          box-shadow: inset 0 0 0 20px #fff;
        }
        ::-webkit-input-placeholder {
          /* WebKit browsers */
          // color: #f09e9e;
          font-size: 13px;
        }

        ::-moz-placeholder {
          /* Mozilla Firefox 19+ */
          // color: #f09e9e;
          font-size: 13px;
        }
        :-ms-input-placeholder {
          /* Internet Explorer 10+ */
          // color: #f09e9e;
          font-size: 13px;
        }
      }
    }
    .button {
      box-sizing: border-box;
      width: 100px;
      height: 30px;
      border-radius: 4px;
      line-height: 30px;
      text-align: center;
      font-size: 14px;
      cursor: pointer;
      // background-color: #00a1d6;
      background-color: #eb3023e7;
      color: #fff;
    }
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
