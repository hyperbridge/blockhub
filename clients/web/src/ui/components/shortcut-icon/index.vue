<template>
  <div class="shortcut-icon" :style="style">
    <i v-if="withButton && !icon"
         class="icon-delete-btn fa fa-times"
         @mousedown="remove" />
    <slot>
        <a :href="link" :style="{ 'background-image': image ? 'url(' + image + ')' : 'none' }" @click="click">
            <i v-if="icon"
                :class="icon" />
        </a>
        <!-- <c-tooltip position="right" :iconHide="true" :delay="0">
            <div slot="tooltip" v-if="text">{{ text }}</div>
        </c-tooltip> -->
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number
    },
    text: {
        type: String,
        default: null
    },
    image: {
        type: String,
        default: null
    },
    link: {
        type: String,
        default: '#'
    },
    icon: {
        type: String,
        default: null
    },
    eventKey: {
        type: String,
        default: null
    },
    eventValue: {
        type: String,
        default: null
    },
    withButton: {
      type: Boolean,
      default: false
    },
    color: {
      type: Object,
      default: () => {
        return {
            r: null,
            g: null,
            b: null
        }
      }
    }
  },
  components: {
    'c-tooltip': (resolve) => require(['@/ui/components/tooltips/universal'], resolve)
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
    remove() {
      this.$emit('remove', {
        index: this.index
      })
    },
    click() {
        if (this.eventKey) {
            BlockHub.store.dispatch(this.eventKey, this.eventValue)
        }
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
  border: 1px dashed rgba(255, 255, 255, 0.4);

  a {
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    display: block;

    i {
        font-size: 18px;
        color: rgba(255, 255, 255, 0.4);
    }
  }
  img {
      object-fit: contain;
        border-radius: 10px;
  }
  &:hover {
    border: 1px dashed #f96854;
    background: hsla(7,93%,65%,.13);
    box-shadow: 0 4px 10px 0 hsla(7,93%,65%,.13);

    i {
        color: #f96854;
    }
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