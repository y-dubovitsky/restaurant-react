import { connect } from 'react-redux';
import { useState } from 'react';
import Navigation from '../navigation';
import Restaurant from './restaurant';
import Basket from '../basket';

function Restaurants({ restaurants }) {

  //TODO Улучшить это
  const [currentRestId, setCurrentRestId] = useState(restaurants[0].id);

  return (
    <div>
      <Basket />
      <Navigation
        onRestaurantClick={(id) => setCurrentRestId(id)}
      />
      <Restaurant id={currentRestId} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    restaurants: Object.values(state.restaurants)
  }
}

export default connect(mapStateToProps)(Restaurants);