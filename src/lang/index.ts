import {createI18n, type I18n} from "vue-i18n";
import cn from './cn';
import en from './en';

const i18n: I18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'cn',
    messages: {
        cn,
        en
    }
});

export default i18n;