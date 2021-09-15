import style from './header.module.css';

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <img src={process.env.PUBLIC_URL + '/logo100_120.png'} alt="coming soon..." />
        <p>Consegna del cibo</p>
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