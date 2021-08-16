import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function restaurant({ id, name, menu, reviews }) {

  const averageCount = (array) => {
    const average = array.map(element => element.rating)
      .reduce((prev, cur) => {
        return prev + cur;
      }, 0) / array.length;

    return average;
  }

  return (
    <div key={id}>
      <h3>{name}</h3>
      <h4>Average Rating: </h4>
      <Rate rating={averageCount(reviews)} />
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  )
}