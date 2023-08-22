import Style from "./css/header.module.css";
import logo from "./img/logo spotify.png";
function Header (props){
    return(
        <>
        <header className={Style.header}>
            <article className={Style.article}>
                <div>
                    <img src={logo} alt="Logo do app Spotify" />
                </div>
                <div className={Style.divheader}>
                    <span className={Style.spanheader||Style.headerhover}>Políticas</span>
                </div>
                <div className={Style.divheader}>
                    <span className={Style.spanheader||Style.headerhover}>Benefícios</span>
                </div>
                <div className={Style.divheader}>
                    <span className={Style.spanheader||Style.headerhover}>Planos</span>
                </div>
                <div className={Style.divheader}>
                    <span className={Style.spanheader||Style.headerhover}>Suporte</span>
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