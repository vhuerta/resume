<style>
  .slider {
    display: none;
  }

</style>

<template>

  <div :class="['slider row sentence']" ref="container">
    <slot></slot>
  </div>

</template>

<script>
  import $ from 'jquery';

  export default {
    props: {
      closed: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      closed(newVal, oldVal) {
        !newVal? $(this.$refs.container).slideDown('fast') : $(this.$refs.container).slideUp('fast');
      }
    }
  }

</script>
