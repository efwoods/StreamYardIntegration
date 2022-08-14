import axios from 'axios'

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
