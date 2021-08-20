import style from './rate.module.css';

export default function Rate({ rating }) {

  return (
    <div>
      {
        [...Array(5)].map((_, idx) => {
          //TODO Добавить className библиотеку
          return <div key={idx} className={idx < rating ? style.red : style.white}>*</div>
        })
      }
    </div>
  )
}