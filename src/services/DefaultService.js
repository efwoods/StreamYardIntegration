import axios from 'axios'
import router from '@/router'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
  getTestJson() {
    axios
      .get('https://efwoods.github.io/json-server/db.json')
      .then(function (response) {
        console.log('Response', response)
      })
      .catch(function (err) {
        console.log('Error', err)
      })
  },
  // getTestJsonReturn() {
  //   axios
  //     .get('https://efwoods.github.io/json-server/db.json')
  //     .then(function (response) {
  //       console.log('Response', response)
  //     })
  //     .catch(function (err) {
  //       console.log('Error', err)
  //     })
  // },
  getTestJsonReturn() {
    // console.log('input vars: ' + email + ', ' + password + ', ' + url)
    axios
      .get('https://efwoods.github.io/json-server/db.json')
      .then((res) => {
        // Perform Success Action
        let temp = JSON.stringify(res.data)
        // console.log('res success: ' + JSON.stringify(res.data))

        router.push({
          name: 'CommentsVue',
          params: {
            json: temp,
          },
        })
      })
      .catch((error) => {
        //error.response.status
        console.log('Error', error)
      })
      .finally(() => {
        //Perform action in always
        console.log('default service called')
      })
  },

  getTestJsonLinkedIn(email, password, url) {
    let queryURL =
      'http://localhost:8081/scrape' +
      '?url=' +
      url +
      '&username=' +
      email +
      '&password=' +
      password

    axios.get(queryURL)
  },

  async getComments() {
    return await axios.get('http://localhost:8081/comments').then((res) => {
      console.log('comments: ' + res.data)
    })
  },

  sendForm() {
    // add 'e' as an input to detect errors
    //Pseudocode for error checking
    // if (formNotValid()) { // create and call this function if the form is not valid
    //   this.errors = []
    //   return
    // }
    axios
      .post(
        'https://my-json-server.typicode.com/Code-Pop/Vue-3-Forms/events',
        this.event
      )
      .then(function (response) {
        console.log('Response', response)
      })
      .catch(function (err) {
        console.log('Error', err)
      })
  },
  formNotValid() {},
}
