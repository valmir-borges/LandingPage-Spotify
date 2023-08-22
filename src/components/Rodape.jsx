import Style from "./css/rodape.module.css";
import twitter from "./img/icon-twitter.png"
import instagram from "./img/icon-instagram.png"
import facebook from "./img/icon-facebook.png"
import logo from "./img/logo spotify.png"

function Rodape (props){
    return(
        <>
        <section className={Style.footer}>
            <div className={Style.footericons}>
                <div>
                    <img src={logo} alt="Logo do Spotify" />
                </div>
                <div className={Style.footericonssocial}>
                    <div className={Style.backgroundiconfooter}>
                        <img src={twitter} alt="" height="24px" width="24px"/>
                    </div>
                    <div  className={Style.backgroundiconfooter}>
                        <img src={instagram} alt="" height="24px" width="24px"/>
                    </div>
                    <div  className={Style.backgroundiconfooter}>
                        <img src={facebook} alt="" height="24px" width="24px"/>
                    </div>
                </div>
            </div>
            <div className={Style.spanfooter}>
                <span className={Style.spanhoverfooter}>Legal</span>
                <span className={Style.spanhoverfooter}>Política de privacidade</span>
                <span className={Style.spanhoverfooter}>Cookies</span>
                <span className={Style.spanhoverfooter}>Acessibilidade</span>
            </div>
        </section>
        </>
    );
}
export default Rodape;