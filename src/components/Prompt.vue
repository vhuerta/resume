<style lang="scss">
  @import './../assets/sass/colors';
  .prompt {
    padding: 2px 10px;
    &.name {
      background-color: $color-dark;
    }
    &.node {
      background-color: $color-code-1;
    }
    &.end {
      background-color: $color-code-2;
    }
    &.text {
      padding-right: 0;
    }
    &.triangle {
      padding: 0 !important;
      border-style: solid;
      border-width: 12px 0 12px 12px;
      height: 0;
      width: 0;
      &.name {
        border-color: $color-code-1 $color-code-1 $color-code-1 $color-dark;
      }
      &.node {
        border-color: $color-code-2 $color-code-2 $color-code-2 $color-code-1;
      }
      &.end {
        border-color: $color-base $color-base $color-base $color-code-2;
      }
    }
  }
  
  .ityped-cursor {
    font-size: 18px;
    opacity: 1;
    -webkit-animation: blink 0.7s infinite;
    -moz-animation: blink 0.7s infinite;
    animation: blink 0.7s infinite;
  }
  
  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  @-webkit-keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  @-moz-keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

</style>
<template>

  <div class="row sentence whoami">

    <div class="col-xs-12">
      <span class="prompt name pull-left"><i :class="name_icon"></i>&nbsp;{{name}}</span>
      <div class="prompt triangle name pull-left"></div>
      <span class="prompt node pull-left"><i :class="path_icon"></i>&nbsp;{{path}}</span>
      <div class="prompt triangle node pull-left"></div>
      <span class="prompt end pull-left">$</span>
      <div class="prompt triangle end pull-left"></div>
      <span class="prompt text pull-left" ref="command"></span>
      <div class="clearfix"></div>
    </div>

  </div>



</template>
<script>
  import { init, destroy } from 'ityped';

  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      name_icon: {
        type: String,
        default: 'fa fa-code'
      },
      path: {
        type: String,
        required: true
      },
      path_icon: {
        type: String,
        default: 'fa fa-folder-o'
      },
      command: {
        type: String,
        required: true
      },
      start: {
        type: Boolean,
        default: true
      }
    },
    mounted() {
      if (this.start) {
        this.prompt();
      }
    },
    watch: {
      start(newVal, oldVal) {
        if (newVal === true && oldVal === false) {
          this.prompt();
        }
      }
    },
    methods: {
      prompt() {
        const _this = this;
        const element = _this.$refs.command;

        init(element, {
          strings: [_this.command],
          typeSpeed: 200,
          startDelay: 500,
          cursorChar: '|',
          onFinished() {
            const parent = element.parentNode;
            parent.querySelector('.ityped-cursor').remove();
            _this.$emit('end');
          }
        })
      }
    }
  }

</script>
