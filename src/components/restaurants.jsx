import { useState } from 'react';
import Navigation from './navigation';
import Restaurant from './restaurant';

export default function Restaurants({restaurants}) {

  const [currentRest, setCurrentRest] = useState(restaurants[0]);

  return (
    <div>
      <Navigation
        restaurants={restaurants}
        onRestaurantClick={(id) => setCurrentRest(id)}
      />
      <Restaurant {...currentRest}/>
    </div>
  )
}