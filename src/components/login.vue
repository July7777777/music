<template>
  <div class="login" :class="isHiden ? 'hide' : ''">
    <div id="close" @click="close">
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
            <div class="input_box">
              <div class="acc">
                <div class="changeNum">
                  <span class="text">账号</span>
                </div>
                <input type="text" placeholder="请输入163邮箱" />
                <div class="getNum"></div>
              </div>

              <div class="password">
                <div class="changeNum">
                  <span class="text">密码</span>
                </div>
                <input
                  type="text"
                  placeholder="请输入密码"
                  @blur="isHiden = false"
                  @focus="isHiden = true"
                />
              </div>
            </div>
          </div>

          <div v-if="login_way == 3">
            <div class="input_box">
              <div class="acc">
                <div class="changeNum">
                  <span class="text">账号</span>
                </div>
                <input type="text" placeholder="请输入手机号" />
                <div class="getNum"></div>
              </div>

              <div class="password">
                <div class="changeNum">
                  <span class="text">密码</span>
                </div>
                <input
                  type="text"
                  placeholder="请输入密码"
                  @blur="isHiden = false"
                  @focus="isHiden = true"
                />
              </div>
            </div>
          </div>

          <div v-if="login_way == 4">
            <div class="input_box">
              <div class="acc">
                <div id="ITC">
                  <div class="changeNum" @click="ulCode = !ulCode">
                    <span class="text">{{ phoneCode }}</span>
                    <div id="triangle_size">
                      <img src="../assets/img/re_triangle.png" alt="" />
                    </div>
                  </div>
                  <ul class="ITCode" v-if="ulCode">
                    <li
                      class="ITCodeitem"
                      v-for="(item, index) in CountryCode"
                      :key="index"
                      @click="CodeChose(item)"
                    >
                      <span
                        class="phoneCode"
                        :class="
                          phoneCode == item.phoneCode ? 'phoneCodeActive' : ''
                        "
                        >{{ item.phoneCode }}</span
                      >
                      <span class="countryName">{{ item.countryName }}</span>
                    </li>
                  </ul>
                </div>
                <input type="text" placeholder="请输入手机号" />
                <div
                  class="getNum"
                  :class="isActive ? 'getNumActive' : 'ban'"
                  @click="getVCode"
                >
                  {{ verificationCodeText }}
                </div>
              </div>

              <div class="password">
                <div class="changeNum">
                  <span class="text">验证码</span>
                </div>
                <input
                  type="text"
                  placeholder="请输入验证码"
                  @blur="isHiden = false"
                  @focus="isHiden = true"
                />
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
        <div class="reminder">
          <p>{{ reminder }}</p>
        </div>
        <div class="button_box">
          <div class="button" @click="submit">登录</div>
        </div>
      </div>
      <div class="footer">
        注意:本项目仅用于学习使用，不得用于任何商业用途 <br />
        请于下载24h内删除
      </div>
    </div>
  </div>
</template>


<script>
import { useStore } from "vuex";
import { reactive, onMounted, defineComponent, toRefs } from "vue";
import { useRouter } from "vue-router";
// import { CountryCode } from "../assets/js/CountryCode";
import { CountryCode } from "../assets/js/cod";
import { cellphone } from "../request/api";

export default defineComponent({
  name: "login",
  setup(props) {
    let data = reactive({
      isHiden: false, //背景图片是否捂眼睛
      verificationCodeText: "获取验证码",
      isActive: true, //获取验证码  是否可用
      login_way: "4", //默认登陆方式
      phoneCode: "+86",
      ulCode: false,
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
      reminder: "", //提醒信息
    });
    let store = useStore();
    let router = useRouter();
    onMounted(() => {
      console.log("1111");
      console.log("useStore", store.state.searchResultList);
      console.log(CountryCode);
    });
    let close = () => {
      console.log("top组件中 点击事件");

      let param = !store.state.loginState;
      store.commit("changeState", { name: "loginState", value: param });
    };
    let CodeChose = (e) => {
      console.log("CodeChose", e);
      data.ulCode = false;
      data.phoneCode = e.phoneCode;
      // let param = !store.state.loginState;
      // store.commit("changeState", { name: "loginState", value: param });
    };

    let getVCode = () => {
      //点击获取二维码事件
      console.log("111");
      if (data.isActive) {
        data.isActive = false;
        let i = 59;
        data.verificationCodeText = `${i}s后重试`;
        let time = setInterval(function () {
          i--;
          if (i > 0) {
            data.verificationCodeText = `${i}s后重试`;
          } else {
            data.isActive = true;
            data.verificationCodeText = `获取验证码`;
            clearInterval(time);
          }
        }, 1000);
      }
    };
    let login_change = (e) => {
      //点击切换登陆方式事件
      let text = "";
      switch (e * 1) {
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
      console.log(e == 1, text);
      console.log("参数为" + e + "，登陆方式为" + text);
      data.reminder = "";
      data.login_way = e;
    };
    let cellphone = (e) => {
      let data = {
        phone: "",
        md5_password: "",
        captcha: "",
      };
      cellphone(data)
        .then((res) => {
          console.log(res);
          console.log(res.result);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    let submit = () => {
      let e = data.login_way;
      let text = "";
      switch (e * 1) {
        case 1:
          text = "*请用手机网易云app扫码登录";
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
      data.reminder = text;
    };
    return {
      ...toRefs(data),
      getVCode,
      login_change,
      submit,
      close,
      CodeChose,
      CountryCode,
    };
  },
});
</script>

<style scoped lang="less">
#main_box {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10+ and Edge */
  user-select: none; /* Standard syntax */
}
.login {
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
  background-position: 0 100%, 50% 6px, 100% 100%;
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
  .footer {
    font-size: smaller;
    margin-bottom: -17px;
    color: #5050507c;
    text-align: center;
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
        margin: 9px;
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
      // width: 260px;
      height: 100px;
      margin: 9px 0;
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
      .input_box {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        border-radius: 8px;

        // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);

        .acc {
          display: flex;
          padding: 0 20px;
          align-items: center;
          border: 1px solid #e7e7e7;
          border-bottom: none;
          border-radius: 8px 8px 0 0;
          height: 35px;
          .getNum {
            width: 65px;
            padding-left: 10px;
            border-left: 1px #e7e7e7 solid;
          }
          .getNumActive {
            cursor: pointer;
            color: #eb3023e7;
          }
          .ban {
            cursor: no-drop;
            color: silver;
          }
        }
        .password {
          position: relative;
          display: flex;
          padding: 0 20px;
          align-items: center;
          // justify-content: space-between;
          border: 1px solid #e7e7e7;
          border-radius: 0 0 8px 8px;
          height: 35px;
        }
        .changeNum {
          width: 60px;
          margin-right: 5px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          #triangle_size {
            width: 14px;
            height: 8px;
          }
        }
        #ITC {
          cursor: pointer;
          position: relative;
          .ITCode {
            width: 239px;
            height: 170px;
            z-index: 3000;
            background-color: #fff;
            position: absolute;
            left: -10px;
            top: 27px;
            overflow: auto;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            .ITCodeitem {
              padding: 5px 10px;
              .phoneCode {
                color: rgb(97, 97, 97);
                font-size: 13px;
              }
              .phoneCodeActive {
                color: #eb3023e7;
                font-weight: bold;
              }
              .countryName {
                float: right;
                color: rgb(132, 146, 166);
                font-size: 13px;
              }
            }
            .ITCodeitem:hover {
              background-color: #f5f7fa;
            }
          }
        }
        .text {
          white-space: normal;
          // margin-right: 20px;
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

          width: 160px;
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
    .reminder {
      height: 17px;
      line-height: 17px;
      color: #eb3023e7;

      font-size: 12px;
      transform: scale(0.9);
    }
    .button_box {
      margin: 10px;
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
.hide {
  background-image: url(../assets/img/login/left_hide.png),
    url(../assets/img/login/logo.png), url(../assets/img/login/right_hide.png);
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
