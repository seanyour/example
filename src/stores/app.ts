import {defineStore} from "pinia";
import {ref} from "vue";

export const useAppStores = defineStore('app', () => {
    let isCollapse = ref(false)

    function toggle(){
        isCollapse.value = !isCollapse.value
    };

    return {isCollapse, toggle}
})