import { connect } from 'react-redux';
import { useState } from 'react';
import Navigation from '../navigation';
import Restaurant from './restaurant';
import Basket from '../basket';
import Loader from '../loader';
import {
  restaurantListSelector,
  restaurantsLoadingSelector,
  restaurantsLoadedSelector
} from '../../redux/selectors';
import { loadRestaurants } from '../../redux/actions/action';
import { useEffect } from 'react';

function Restaurants({ restaurants, loadRestaurants, loading, loaded }) {

  // Берем 1ый ресторан и выбираем его id
  const [currentRestId, setCurrentRestId] = useState(restaurants[0]?.id);

  useEffect(() => {
    if (!loading && !loaded) loadRestaurants();
  }, [loading, loaded]);

  if (!loaded) {
    return <Loader />; //TODO Зачем тут вообще loading если можно loaded просто использовать!
  }

  const restaurantId = currentRestId || restaurants[0]?.id;

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
    restaurants: restaurantListSelector(state), // Загрузили все для всего приложения рестораны!
    loading: restaurantsLoadingSelector(state),
    loaded: restaurantsLoadedSelector(state)
  }
}

export default connect(mapStateToProps, { loadRestaurants })(Restaurants);