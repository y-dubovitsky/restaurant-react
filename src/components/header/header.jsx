import CurrencySwitcher from '../currency-switcher/currency-switcher';
import style from './header.module.css';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { totalOrderPriceSelector } from '../../redux/features/order';
import { connect } from 'react-redux';
import { MoneyContext } from '../../context/money-context';
import { useContext } from 'react';

function Header({ totalOrderCost }) {

  const { recalculatePrice } = useContext(MoneyContext);

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
          <li>
            <NavLink to='/checkout' className={style.checkout}>
              <i><FontAwesomeIcon icon={faShoppingBasket} />{recalculatePrice(totalOrderCost)}</i>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    totalOrderCost: totalOrderPriceSelector(state)
  }
}

export default connect(mapStateToProps)(Header);