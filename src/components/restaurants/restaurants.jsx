import { connect } from 'react-redux';
import { useState } from 'react';
import Navigation from '../navigation';
import Restaurant from './restaurant';
import Basket from '../basket';
import Loader from '../loader';
import { restaurantListSelector } from '../../redux/selectors';
import { loadRestaurants } from '../../redux/actions/action';
import { useEffect } from 'react';

function Restaurants({ restaurants, loadRestaurants }) {

  //TODO Улучшить это
  const [currentRestId, setCurrentRestId] = useState(restaurants[0]?.id);

  useEffect(() => loadRestaurants(), []);

  const restaurantId = currentRestId || restaurants[0]?.id;

  if(restaurants.length === 0) return <Loader/>;

  return (
    <div>
      <Basket />
      <Navigation
        onRestaurantClick={(id) => setCurrentRestId(id)}
      />
      <Restaurant id={restaurantId} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    restaurants: restaurantListSelector(state)
  }
}

export default connect(mapStateToProps, { loadRestaurants })(Restaurants);