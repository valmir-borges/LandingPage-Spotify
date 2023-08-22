import "./css/rodape.css";
import twitter from "./img/icon-twitter.png"
import instagram from "./img/icon-instagram.png"
import facebook from "./img/icon-facebook.png"
import logo from "./img/logo spotify.png"

function Rodape (props){
    return(
        <>
        <section className="footer">
            <div className="footer-icons">
                <div>
                    <img src={logo} alt="Logo do Spotify" />
                </div>
                <div className="footer-icons-social">
                    <div className="background-icon-footer">
                        <img src={twitter} alt="" height="24px" width="24px"/>
                    </div>
                    <div  className="background-icon-footer">
                        <img src={instagram} alt="" height="24px" width="24px"/>
                    </div>
                    <div  className="background-icon-footer">
                        <img src={facebook} alt="" height="24px" width="24px"/>
                    </div>
                </div>
            </div>
            <div className="span-footer">
                <span className="span-hover-footer">Legal</span>
                <span className="span-hover-footer">Política de privacidade</span>
                <span className="span-hover-footer">Cookies</span>
                <span className="span-hover-footer">Acessibilidade</span>
            </div>
        </section>
        </>
    );
}
export default Rodape;