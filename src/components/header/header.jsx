import style from './header.module.css';

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="" srcset="" />
      </div>
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