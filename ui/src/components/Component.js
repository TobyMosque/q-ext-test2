import { h, computed } from 'vue'
import { Component } from '@tobymosque/quasar-ui-ext-test1'
import { QAvatar } from 'quasar'
export default {
  name: 'QExtTest2',
  props: {
    src: {
      type: String,
      default: 'https://cdn.quasar.dev/logo-v2/svg/logo.svg'
    }
  },
  setup (props, { attrs, slots }) {
    const src = computed(() => props.src)
    return () => h(Component, {
      ...attrs,
      class: 'QExtTest2'
    }, {
      ...slots,
      append () {
        if (slots.append) {
          return slots.append()
        }
        return h(QAvatar, null, {
          default () {
            return h('img', {
              src: src.value
            })
          }
        })
      }
    })
  }
}
