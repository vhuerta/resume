<style>
.btn-link.disabled {
  color: #ffffff !important;
}
</style>

<template>
  <div class="row sentence">
    <div class="col-xs-12">
      <div class="col-xs-12 comment">
        <p class="code-comment">
          <span class="pull-right">
            <!-- <a
              :class="['btn btn-link', {'disabled': isSelectedEs}]"
              href="#es"
              @click="setLang"
            >{{$t('spanish')}}</a>/ -->
            <a
              :class="['btn btn-link', {'disabled': isSelectedEn}]"
              href="#en"
              @click="setLang"
            >{{$t('english')}}</a>|
            <a :class="['btn btn-link']" href="https://github.com/vhuerta/resume" target="__blank">
              {{$t('github_view')}}
              <i class="fa fa-github"></i>
            </a>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.setLang();
  },
  data() {
    return {
      lang: ""
    };
  },
  computed: {
    isSelectedEs() {
      return this.lang === "es";
    },
    isSelectedEn() {
      return this.lang === "en";
    }
  },
  methods: {
    setLang() {
      setTimeout(() => {
        let userLang = navigator.language || navigator.userLanguage;
        userLang = userLang.substr(0, 2);
        let lang = window.location.hash.replace("#", "") || userLang;
        lang = (["es", "en"].indexOf(lang) > -1 && lang) || "es";
        this.$i18n.locale = lang;
        this.lang = lang;
      }, 100);
    }
  }
};
</script>
