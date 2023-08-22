import "./css/header.css";
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
                    <span className="span-header header-hover">Políticas</span>
                </div>
                <div>
                    <span className="span-header header-hover">Benefícios</span>
                </div>
                <div>
                    <span className="span-header header-hover">Planos</span>
                </div>
                <div>
                    <span className="span-header header-hover">Suporte</span>
                </div>
                <div className="div-assine-ja">
                    <span className="span-header">Assine já</span>
                </div>
            </article>
        </header>
        </>
    );
}
export default Header;