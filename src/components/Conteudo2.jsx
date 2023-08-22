import  Style from "./css/conteudo2.module.css";
import vantagem1 from "./img/vantagem 1.png"
import vantagem2 from "./img/vantagem 2.png"
import vantagem3 from "./img/vantagem 3.png"

function Conteudo2 (props){
    return(
        <>
        <section className={Style.sec2}>
            <div>
                <h1>Quem assina não se arrepende!</h1>
            </div>
            <div className={Style.beneficiosgeral}>
                <div className={Style.vantagens}>
                    <img src={vantagem1} alt="Vantagens" />
                    <div className={Style.divspanvantagem}>
                        <span className={Style.spanvantagem}>Modo offline</span>
                    </div>
                </div>
                <div className={Style.vantagens}>
                    <img src={vantagem2} alt="Vantagens" />
                    <div className={Style.divspanvantagem}>
                        <span className={Style.spanvantagem}>Ouça sem anúncios</span>
                    </div>
                </div>
                <div className={Style.vantagens}>
                    <img src={vantagem3} alt="Vantagens" />
                    <div className={Style.divspanvantagem}>
                        <span className={Style.spanvantagem}>Ouça na ordem que quiser</span>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
export default Conteudo2;