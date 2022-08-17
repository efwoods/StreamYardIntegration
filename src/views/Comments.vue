<template>
  <div>Comments</div>
  <p v-if="json">{{ this.json }}</p>
</template>

<script>
// import DefaultService from '@/services/DefaultService'
import axios from 'axios'
// import router from '@/router'
export default {
  name: 'CommentsVue',
  created() {
    // DefaultService.getComments()
    this.fetchAPI()
  },

  data() {
    setInterval(this.fetchAPI, 1000)
    return { json: Object }
  },
  props: {},
  methods: {
    fetchAPI() {
      axios
        .get('http://localhost:8081/comments')
        .then((res) => {
          console.log('comments: ' + res.data)
          this.json = res.data
        })
        .catch((error) => {
          error.response.status
          console.log('Error', error)
        })
        .finally(() => {
          // Perform action in always
          console.log('default service called')
        })
    },
  },
}
</script>

<style lang="scss" scoped></style>
