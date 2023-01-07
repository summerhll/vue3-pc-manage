
<template>
  <div id="app">
    <h1>{{ count }}</h1>
    <h1>{{ double }}</h1>
   
    <button @click="increase">+1</button>
    <h1>X: {{ x }}</h1>
    <h1>Y: {{ y }}</h1>
  </div>
</template>


<script  lang="ts">
import { ref, computed, reactive, toRefs , onMounted, onUnmounted} from "vue";
import useMousePosition from "./hooks/useMousePosition";
interface DataProps {
  count: number;
  double: number;
  increase: () => void;
}
export default {
  setup() {
    // const count = ref(0);
    // const double = computed(()=>{
    //   return count.value * 2;

    // })
    // const increase = () =>{
    //   count.value++;
    // }

    const data: DataProps = reactive({
      count: 0,
      increase: () => { data.count++ },
      double: computed(() => data.count * 2)
    });


    const refData = toRefs(data);

    // const x = ref(0);
    // const y = ref(0);
    // const updateMouse = (e: MouseEvent) => {
    //   x.value = e.pageX;
    //   y.value = e.pageY;

    // }

    // onMounted(() => {
    //   document.addEventListener("click", updateMouse);
      
    // })
    // onUnmounted(() => {
    //   document.removeEventListener("click", updateMouse);
      
    // })
 
    const {x, y} =  useMousePosition();
    return {
      // count,
      // double,
      // increase

      ...refData,
      x,
      y,
      // updateMouse


    }

  }

}


</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
