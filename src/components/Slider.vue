<style>
  .slider {
    overflow-y: hidden;
    max-height: 2000px;
    /* approximate max height */
    -webkit-transition: all 2s cubic-bezier(0, 1, 0.5, 1);
    -moz-transition: all 2s cubic-bezier(0, 1, 0.5, 1);
    -ms-transition: all 2s cubic-bezier(0, 1, 0.5, 1);
    -o-transition: all 2s cubic-bezier(0, 1, 0.5, 1);
    transition: all 2s cubic-bezier(0, 1, 0.5, 1);
  }
  
  .slider.closed {
    max-height: 0;
    padding-bottom: 0;
  }

</style>

<template>

  <div :class="['slider row sentence', closed? 'closed' : '']">
    <slot></slot>
  </div>

</template>

<script>
  export default {
    props: {
      closed: {
        type: Boolean,
        default: true
      }
    }
  }

</script>
