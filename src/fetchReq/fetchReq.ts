import axios from 'axios'


export default class FetchReq {
    static fetchReqPost (page : number) {
        return axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`)

    }
}

