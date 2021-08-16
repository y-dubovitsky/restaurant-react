import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';
import { useMemo } from 'react';

export default function Restaurant({ id, name, menu, reviews }) {

  const averageRating = useMemo(() => {
    const sum = reviews.map(review => review.rating).reduce((prev, cur) => prev + cur, 0);
    const average = Math.round(Math.floor(sum / reviews.length));

    return average;
  }, [reviews]);


  return (
    <div key={id}>
      <h3>{name}</h3>
      <h4>Average Rating: </h4>
      <Rate rating={averageRating} />
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  )
}