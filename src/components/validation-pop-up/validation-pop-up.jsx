import cn from 'classnames';

import style from './validation-pop-up.module.css';

export default function ValidationPopUp() {
  return (
    <div className={cn(style.validation)}>
      <h1>Invalid Data</h1>
    </div>
  )
}