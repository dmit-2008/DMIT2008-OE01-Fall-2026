import { BASE_URL } from './base.js'

const getReviews = () => {
    return fetch(`${BASE_URL}/reviews`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            return response.json()
        })
        .then((data)=>{
            return Promise.resolve(data)
        })
}

const postReview = ({title,comment,rating}) => {
    return fetch(`${BASE_URL}/reviews`, {
      method: "POST",
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        title,
        comment,
        rating
      })
    }).then((response)=>{
      return response.json()
    }).then((data)=>{
        return Promise.resolve(data)
    })
}

export { getReviews, postReview }