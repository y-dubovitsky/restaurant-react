import style from './header.module.css';

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.logo}>Logo</div>
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