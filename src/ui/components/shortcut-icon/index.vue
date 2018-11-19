<template>
  <div class="shortcut-icon" :style="style">
    <i v-if="withButton"
         class="icon-delete-btn fa fa-times"
         @mousedown="remove" />
    <slot>
        
        <a :href="link" :style="{ 'background-image': 'url(' + image + ')' }">
        </a>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number
    },
    image: {
        type: String,
        default: 'https://cdn.hyperbridge.org/blockhub/images/products/might-&-magic-heroes-vi-4896/med-tile.jpg'
    },
    link: {
        type: String,
        default: '#'
    },
    withButton: {
      type: Boolean,
      default: false
    },
    color: {
      type: Object,
      default: () => {
        return null
      }
    }
  },
  computed: {
    brightness () {
      let { r, g, b } = this.color
      return 0.299 * r + 0.587 * g + 0.114 * b
    },
    style () {
      if (this.color) {
        let { r, g, b } = this.color
        let background = `rgb(${r}, ${g}, ${b})`
        let shadow = `rgba(${r}, ${g}, ${b}, 0.5)`
        return {
          'background-color': background,
          //'box-shadow': `0px 6px 20px ${shadow}`,
          'color': this.brightness > 180 ? '#777' : '#f3f3f3'
        }
      }
      return null
    }
  },
  methods: {
    remove () {
      this.$emit('remove', {
        index: this.index
      })
    }
  }
}
</script>

<style lang="scss">
@keyframes shake {
  from {
    transform: rotate(-4deg);
  }
  to {
    transform: rotate(4deg);
  }
}
.shortcut-icon {
  position: relative;
  background-color: transparent;
  margin: 0;
  height: 50px;
  width: 50px;
  border-radius: 10px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.07);
  color: #777;
  font-weight: 900;
  font-size: 12px;
  line-height: 50px;
  text-align: center;
  transition: all 0.1s;
  cursor: pointer;
  border: 1px dashed #dcdcdc;
  overflow: hidden;
  a {
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    display: block;
  }
  img {
      object-fit: contain;
  }
  &:hover {
    border: 1px dashed #f96854;
    background: hsla(7,93%,65%,.13);
    box-shadow: 0 4px 10px 0 hsla(7,93%,65%,.13);
  }
}
.shortcut-icon .icon-delete-btn {
    display: block;
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 7px;
    right: 6px;
    top: 6px;
}

.c-grid-item-dragging .shortcut-icon {
  animation-name: shake;
  animation-duration: 0.07s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
</style>