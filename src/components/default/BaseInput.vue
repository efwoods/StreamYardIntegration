<template>
  <div>
    <label :for="uuid" v-if="label">{{ label }}</label>
  </div>
  <input
    class="field"
    v-bind="{ ...$attrs, onInput: updateValue }"
    :placeholder="label"
    :class="{ error }"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :id="uuid"
    :aria-describedby="error ? `${uuid}-error` : false"
    :aria-invalid="error ? true : false"
  />

  <BaseErrorMessage v-if="error" :id="`${uuid}-error`">
    {{ error }}
  </BaseErrorMessage>
</template>

<script>
import UniqueID from '@/features/UniqueID'
import SetupFormComponent from '@/features/SetupFormComponent'
export default {
  name: 'BaseInputVue',
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
    error: {
      type: String,
      default: '',
    },
  },
  setup(props, context) {
    const { updateValue } = SetupFormComponent(props, context)
    const uuid = UniqueID().getID()
    return { updateValue, uuid }
  },
  methods: {},
}
</script>

<style scoped></style>
