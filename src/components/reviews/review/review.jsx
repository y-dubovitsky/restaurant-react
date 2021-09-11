import { connect } from 'react-redux';
import {
  reviewByIdWithUserSelector,
} from '../../../redux/selectors';

import Loader from '../../loader/loader';

import Rate from '../../rate';

import style from './review.module.css';

function Review(props) {

  const { id, reviewWithUser } = props;

  if (!reviewWithUser) return <Loader />;

  const { text, rating, user } = reviewWithUser;

  return (
    <div data-test="reviews" className={style.reviewContainer}>
      <h4>Author: {user.name}</h4>
      <p>{text}</p>
      <Rate rating={rating} />
    </div>
  )
}

const mapStateToProps = (state, props) => (
  {
    reviewWithUser: reviewByIdWithUserSelector(state, props),
  }
)

export default connect(mapStateToProps)(Review);
