import { connect } from 'react-redux';
import { userByIdSelector } from '../../../redux/selectors';

import Rate from '../../rate';

import style from './review.module.css';

function Review({ review, user }) {
  return (
    <div data-test="reviews" className={style.reviewContainer}>
      <h4>Author: {user.name}</h4>
      <p>{review.text}</p>
      <Rate rating={review.rating} />
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    user: userByIdSelector(state, props)
  }
}

export default connect(mapStateToProps)(Review);