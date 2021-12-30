import { createStore } from 'vuex'
import { useRouter } from "vue-router";
import { SearchList } from "../request/api";

// https://www.cnblogs.com/mica/p/10757965.html
export default createStore({
  state: {
    searchState: false,//搜索状态
    searchInfo: '',//搜索信息  input

    searchListResult: "",//搜索list结果
  },
  mutations: {

    changeState(state, param) {//修改任意一个state中的值
      state[param.name] = param.value
    },

    
  },
  actions: {
    searchList(context) {//单曲搜索
      console.log(context)
      let state=context.state
      console.log('state中的searchList事件;搜索值：', state.searchInfo)

      state.searchState = true;
      let param = { keywords: state.searchInfo, timestamp: Date.parse(new Date()) };
      SearchList(param)
        .then((res) => {
          console.log(res)
          console.log(res.result);
          state.searchState = false;
          state.searchListResult = res.result;
          
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
