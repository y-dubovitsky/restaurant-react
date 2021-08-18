import { connect } from 'react-redux';
import { useState } from 'react';
import Navigation from './navigation';
import Restaurant from './restaurant';
import Basket from './basket';

function Restaurants({restaurants}) {

  const [currentRest, setCurrentRest] = useState(restaurants[0]);

  return (
    <div>
      <Basket/>
      <Navigation
        restaurants={restaurants}
        onRestaurantClick={(id) => setCurrentRest(id)}
      />
      <Restaurant {...currentRest}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants
  }
}

export default connect(mapStateToProps)(Restaurants);