import logo from '../assets/Logo.svg'
import style from '../components/Header.module.css'
export function Header(){
    return(
        <header className={style.header}>
            <img src={logo} alt="Logo da Aplicação" />
        </header>
    )
}