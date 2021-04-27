import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: 'https://back-maplist.herokuapp.com/'
  })
}
