import { connect } from 'react-redux';

import Rate from './rate';

//TODO Сделать еще 1 компонент Review
function Review({ review }) {
  return (
    <div data-test="reviews">
      <h4>{review.user}</h4>
      <p>{review.text}</p>
      <Rate rating={review.rating} />
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    review: state.reviews[props.id]
  }
}

export default connect(mapStateToProps)(Review);