import Review from './review/review';

//TODO Может убрать этот компонент?
function Reviews({ reviews }) {
  return (
    <div data-test="reviews">
      {
        reviews.map(review => {
          return <Review key={review.id} review={review} />
        })
      }
    </div>
  )
}

export default Reviews;
