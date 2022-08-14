<template>
  <input
    type="checkbox"
    :checked="modelValue"
    @change="$emit('update:modelValue', $event.target.checked)"
    class="field"
    :id="uuid"
  />
  <label :for="uuid" v-if="label">{{ label }}</label>
</template>

<script>
import UniqueID from '@/features/UniqueID'
export default {
  name: 'BaseCheckBoxVue',
  created() {},
  data() {
    return {}
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const uuid = UniqueID().getID()
    return { uuid }
  },
  methods: {},
}
</script>

<style lang="scss" scoped></style>
