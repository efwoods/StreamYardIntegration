<template>
  <label :for="uuid" v-if="label">{{ label }}</label>
  <input
    type="radio"
    :checked="modelValue === value"
    :value="value"
    v-bind="$attrs"
    @change="$emit('update:modelValue', value)"
    @click="$emit('update:modelValue', $event.target.value)"
    :id="uuid"
  />
</template>

<script>
import UniqueID from '@/features/UniqueID'
export default {
  name: 'BaseRadioVue',
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
      type: [String, Number],
      default: '',
    },
    value: {
      type: [String, Number],
      required: true,
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
