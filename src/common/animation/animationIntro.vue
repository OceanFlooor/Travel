<template>
  <transition
    name="animation"
    enter-active-class="animated zoomIn animationIntro"
  >
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'animationIntro'
}
</script>

<style lang="stylus" scoped>
  .animationIntro
    animation-duration .5s
</style>
