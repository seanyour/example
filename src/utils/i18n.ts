import {useI18n} from "vue-i18n";

const {te, t} = useI18n();
export function formatTitle(title: string){
    if (te('route.' + title)){
        return t('route.' + title);
    }else {
        return title;
    }
}