<template>
  <component :is="type" class="button" :class="status">
      <slot/>
  </component>
</template>

<script>
export default {
    name: 'button-wide',
    props: {
        type: {
            type: String,
            default: 'button'
        },
        status: {
            type: String,
            default: 'basic'
        }
    }

}
</script>

<style lang="scss" scoped>
.button {
    color: #fff;
    border-radius: 4px;
    border-style: none;
    box-sizing: border-box;
    width: 100%;
    line-height: 26px;
    &:hover {
        cursor: pointer;
    }
    &.basic {
        background-color: #5D75F7;
    }
    &.action {
        background-color: #43C981;
        color: #3D3E5D;
    }
    &.alert {
        background-color: #F75D5D;
    }
}
</style>
