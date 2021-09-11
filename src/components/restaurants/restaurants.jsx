import { useEffect } from 'react';
import { connect } from 'react-redux';
import Navigation from '../navigation';
import Restaurant from './restaurant';
import Basket from '../basket';
import Loader from '../loader';

import {
  restaurantListSelector,
  restaurantsLoadingSelector,
  restaurantsLoadedSelector,
  currentRestaurantIdSelector
} from '../../redux/selectors';

import {
  loadRestaurants,
  setCurrentRestaurant
} from '../../redux/actions/action';

import style from './restaurants.module.css';

function Restaurants(
  {
    allRestaurants,
    currentRestaurantId,
    loadRestaurants,
    setCurrentRestaurant,
    loading,
    loaded
  }
) {

  useEffect(() => {
    if (!loading && !loaded) {
      loadRestaurants();
    }
  }, [loading, loaded]);

  if (!loaded) {
    return <Loader />;
  }

  return (
    <div className={style.restaurants}>
      <Basket />
      <Navigation onRestaurantClick={setCurrentRestaurant} />
      <Restaurant id={currentRestaurantId || allRestaurants[0]?.id} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentRestaurantId: currentRestaurantIdSelector(state),
    allRestaurants: restaurantListSelector(state), // Загрузили все для всего приложения рестораны!
    loading: restaurantsLoadingSelector(state),
    loaded: restaurantsLoadedSelector(state)
  }
}

export default connect(mapStateToProps, { loadRestaurants, setCurrentRestaurant })(Restaurants);