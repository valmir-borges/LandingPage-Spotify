import Style from "./css/header.module.css";
import logo from "./img/logo spotify.png";
function Header (props){
    return(
        <>
        <header>
            <article>
                <div>
                    <img src={logo} alt="Logo do app Spotify" />
                </div>
                <div>
                    <span className={Style.spanheader||Style.spanhover}>Políticas</span>
                </div>
                <div>
                    <span className={Style.spanheader||Style.spanhover}>Benefícios</span>
                </div>
                <div>
                    <span className={Style.spanheader||Style.spanhover}>Planos</span>
                </div>
                <div>
                    <span className={Style.spanheader||Style.spanhover}>Suporte</span>
                </div>
                <div className={Style.divassineja}>
                    <span className={Style.spanheader}>Assine já</span>
                </div>
            </article>
        </header>
        </>
    );
}
export default Header;