import { useState } from 'react';
import Menu from './menu';
import Navigation from './navigation';

export default function Restaurants(props) {

  const [currentRest, setCurrentRest] = useState(props.restaurants[0]);

  return (
    <div>
      <Navigation
        restaurants={props.restaurants}
        onRestaurantClick={(id) => setCurrentRest(id)}
      />
      <Menu menu={currentRest.menu} />
    </div>
  )
}