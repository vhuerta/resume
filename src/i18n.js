import Vue from 'vue';
import i18n from 'vue-i18n';

import es from './locales/es';
import en from './locales/en';

// ready translated locales
var messages = {
  es,
  en
};

// install plugin
Vue.use(i18n);

// set lang
Vue.config.lang = 'en';

// set locales
export default new i18n({
  locale: 'en',
  fallbackLang: 'en',
  messages
});
