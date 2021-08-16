import style from './rate.module.css';

export default function rate({rating}) {

  const array = Array.of(1,2,3,4,5);

  return (
    <div>
      {
        array.map((rate, idx) => {
          return <div key={idx} className={idx < rating ? style.red : style.white}>*</div>
        })
      }
    </div>
  )
}