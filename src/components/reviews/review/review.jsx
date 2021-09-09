import { useEffect } from 'react';
import { connect } from 'react-redux';
import { userByIdSelector } from '../../../redux/selectors';
import { loadUsers } from '../../../redux/actions/action';

import Rate from '../../rate';
import Loader from '../../loader';

import style from './review.module.css';

function Review({ review, user, loadUsers }) {

  useEffect(() => {
    loadUsers();
  }, [])

  if(!user) return <Loader/>;

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

export default connect(mapStateToProps, { loadUsers })(Review);