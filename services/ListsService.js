import Api from '../services/Api.js'

export default {
  fetchLists () {
    return Api().get('lists')
  },
  getList (params) {
    return Api().get('list/' + params.id)
  },
  addList (params) {
    return Api().post('list', params)
  },
  updateList (params) {
    return Api().put('lists/' + params.id, params)
  },

  deleteList (id) {
    return Api().delete('lists/' + id)
  }
}
