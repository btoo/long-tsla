<template>
  <router-link to="/" @click="invokeCallback" />
</template>

<script>
export default {
  name: 'CloseButton',
  props: ['callback'],
  methods: {
    invokeCallback () {
      if (this.callback) this.callback()
    }
  }
}
</script>

<style lang="scss" scoped>
  a {
    color: #000;
    position: relative;
    margin-top: 0;
    margin-left: 0;
    width: 21px;
    height: 21px;

    &:before, &:after {
      content: '';
      position: absolute;
      top: 10px;
      left: 0;
      width: 21px;
      height: 1px;
      background-color: currentColor;
    }

    &:before {
      transform: rotate(-45deg);
    }

    &:after {
      transform: rotate(45deg);
    }
  }
</style>
