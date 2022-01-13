import { createStore } from 'vuex'
import { useRouter } from "vue-router";
import { Search } from "../request/api";

// https://www.cnblogs.com/mica/p/10757965.html
export default createStore({
  state: {
    searchState: false,//搜索  状态
    searchInfo: '',//搜索信息  input
    searchType: '',//搜索类型  type
    searchResult: "",//搜索    list结果
    MusicUrlInfo: "",//音乐播放地址





    loginState: true,//login 登录窗口  显示状态
  },
  mutations: {

    changeState(state, param) {//修改任意一个state中的值
      state[param.name] = param.value
    },


  },
  actions: {
    search(context, E) {//单曲搜索
      console.log(context)
      console.log(E)

      let state = context.state
      console.log('state中的searchList事件;搜索值：', state.searchInfo)

      state.searchState = true;//修改状态
      let param = {
        keywords: state.searchInfo,
        type: E.type,
        limit: '100',
        timestamp: Date.parse(new Date())
      };
      Search(param)
        .then((res) => {
          console.log(res)
          console.log(res.result);
          state.searchState = false;
          state.searchResult = res.result;

        })
        .catch((err) => {
          state.searchState = false;
          console.log(err);
        });
    }
  },
  modules: {
  }
})
