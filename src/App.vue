<style lang="scss">
  @import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
  @import './../node_modules/font-awesome/css/font-awesome.min.css';
  @import './assets/sass/colors.scss';
  @import url('https://fonts.googleapis.com/css?family=Inconsolata');
  body {
    font-family: 'Inconsolata', monospace;
    font-size: 14px;
    background-color: $color-base;
    color: $color-contrast;
  }
  
  .sentence {
    padding-bottom: 10px;
    .comment {
      font-size: 1.0em;
    }
  }

</style>


<template>
  <div class="container">
    <header-info></header-info>
    
    <prompt :start="whoamiStart" :name="$t('prompt_name')" :path="$t('prompt_path')" :command="$t('whoami')" @end="next('personalInfoClosed', 'skills')"></prompt>
    
    <slider :closed="personalInfoClosed">
      <personal-info></personal-info>
    </slider>

    <prompt v-show="skillsShow" :start="skillsStart" :name="$t('prompt_name')" :path="$t('prompt_path')" :command="$t('skills_prompt')" @end="next('skillsInfoClosed', '')"></prompt>

    <slider :closed="skillsInfoClosed">
      <skills-info :start="skillsInfoClosed"></skills-info>
    </slider>

  </div>
</template>

<script>
  import HeaderInfo from './components/HeaderInfo';
  import Slider from './components/Slider';
  import Prompt from './components/Prompt';
  import PersonalInfo from './components/PersonalInfo';
  import SkillsInfo from './components/SkillsInfo';

  export default {
    name: 'App',
    components: {
      HeaderInfo,
      Slider,
      Prompt,
      PersonalInfo,
      SkillsInfo
    },
    mounted() {
      setTimeout(() => this.whoamiStart = true, 1000);
    },
    data() {
      return {
        whoamiStart: false,
        personalInfoClosed: true,
        skillsShow: false,
        skillsStart: false,
        skillsInfoClosed: true
      };
    },
    methods: {
      next(section, next) {
        this[section] = false;
        this[`${next}Show`] = true;
        setTimeout( () => {          
          this[`${next}Start`] = true;
        }, 500);
      }
    }
  }

</script>
