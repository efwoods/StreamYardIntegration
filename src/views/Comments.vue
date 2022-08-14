<template>
  <div>Comments</div>
  <!-- <p v-if="jsonResponse">{{ jsonResponse }}</p> -->

  <p v-if="json">{{ this.json }}</p>
</template>

<script>
export default {
  name: 'CommentsVue',
  created() {},
  data() {
    console.log('this.testAPI: ' + this.json)
    return {}
  },
  props: {
    json: String,
  },
  methods: {},
}
</script>

<style lang="scss" scoped></style>
