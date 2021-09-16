import CurrencySwitcher from '../currency-switcher/currency-switcher';
import style from './header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className={style.header}>
      <Link to='/restaurants' className={style.logo}>
        <img src={process.env.PUBLIC_URL + '/logo100_120.png'} alt="coming soon..." />
        <p>Consegna del cibo</p>
      </Link>
      <CurrencySwitcher />
      <div className={style.menu}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contacts</li>
          <li>FAQ</li>
        </ul>
      </div>
    </div>
  )
}