import Review from './review';

export default function Reviews({reviewsIds}) {
  return (
    <div data-test="reviews">
      {
        reviewsIds.map(id => (
          <Review key={id} id={id}/>
        ))
      }
    </div>
  )
}