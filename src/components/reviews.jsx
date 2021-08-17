import Rate from './rate';

//TODO Сделать еще 1 компонент Review
export default function Reviews({reviews}) {
  return (
    <div data-test="reviews">
      {
        reviews.map(review => {
          return (
            <div key={review.id}>
              <h4>{review.user}</h4>
              <p>{review.text}</p>
              <Rate rating={review.rating} />
            </div>
          )
        })
      }
    </div>
  )
}