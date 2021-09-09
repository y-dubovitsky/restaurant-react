const get = (url) => fetch(url).then(resp => resp.json());

export default {
  loadRestaurants: () => get('/api/restaurants'),
  loadReviews: (id) => get(`/api/reviews?id=${id}`),
}