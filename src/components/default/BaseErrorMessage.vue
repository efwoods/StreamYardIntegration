<template>
  <p aria-live="assertive" class="errorMessage" :id="id">
    <slot />
  </p>
</template>

<script>
export default {
  name: 'BaseErrorMessage',
  created() {},
  data() {
    return {}
  },
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
  methods: {},
}
</script>

<style lang="scss" scoped></style>
