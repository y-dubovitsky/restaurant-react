import style from './header.module.css';

export default function Header() {
  return (
    <div className={style.header}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contacts</li>
        <li>FAQ</li>
      </ul>
    </div>
  )
}