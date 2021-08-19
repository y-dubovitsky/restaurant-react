import { connect } from 'react-redux';
import Menu from '../../menu';
import Reviews from '../../reviews/reviews';
import Rate from '../../rate';
import { useMemo } from 'react';

function Restaurant({ id, restaurant, reviewsIds }) {

  // const averageRating = useMemo(() => {
  //   const sum = reviews.map(review => review.rating).reduce((prev, cur) => prev + cur, 0);
  //   const average = Math.round(Math.floor(sum / reviews.length));

  //   return average;
  // }, [reviews]);

  return (
    <div key={restaurant.id}>
      <h3>{restaurant.name}</h3>
      <h4>Average Rating: </h4>
      {/* <Rate rating={averageRating} /> */}
      <Menu menu={restaurant.menu} />
      {console.log(reviewsIds)}
      <Reviews reviewsIds={reviewsIds} />
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    restaurant: state.restaurants[props.id],
    reviewsIds: state.restaurants[props.id].reviews
  }
}

export default connect(mapStateToProps)(Restaurant);