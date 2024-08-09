import { Link } from 'react-router-dom'
import style from './header.module.css';


export default function Header() {
  return (
    <header className={style.header}>

      <a href="https://www.instagram.com/raoni.ct?igsh=ZDM2NG95dW9oejR0"><img className={style.imgHeader} src="https://i.pinimg.com/736x/65/cb/8e/65cb8e9176e13050f96983b36bae3f65.jpg" alt="" /></a>

        <ul className={style.menu}>
          <li><Link to="./"><button className={style.neomorphbtn}>Home</button></Link></li>
          <li><Link to="./Livros"><button className={style.neomorphbtn}>Livros</button></Link></li>
          <li><Link to="./Sagas"><button className={style.neomorphbtn}>Sagas</button></Link></li>
          <li><Link to="./Filmes"><button className={style.neomorphbtn}>Area de cinema</button></Link></li>
          <li><Link to="./Projeto"><button className={style.neomorphbtn}>Projetos</button></Link></li>
        </ul>
    </header>
  )
}