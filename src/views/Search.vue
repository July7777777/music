<template>
  <div class="Search">
    搜索展示区域
    <!-- {{state.searchResultList }} -->
    <!-- <div v-for="item in list" :key="item.id">
      <span>id:{{ item.id }}</span>
      <span>mark:{{ item.mark }}</span>
      <span>name:{{ item.name }}</span>
      <span>mvid:{{ item.mvid }}</span>
    </div> -->
  </div>
</template>

<script>
import { reactive,onMounted,defineComponent,toRefs } from 'vue'
import {useStore} from "vuex";
export default defineComponent({
  name: "Search",
  components: {},
  setup(props) {
    let data=reactive({
      input: "",
      list:''
    })
    onMounted(()=>{
      let store=useStore()
      console.log('useStore',store.state.searchResultList);
    })
     return {
        ...toRefs(data)
    } 
  }
})
</script>
