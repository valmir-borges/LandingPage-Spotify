import "./css/conteudo2.css";
import vantagem1 from "./img/vantagem 1.png"
import vantagem2 from "./img/vantagem 2.png"
import vantagem3 from "./img/vantagem 3.png"

function Conteudo2 (props){
    return(
        <>
        <section className="sec-2">
            <div className="titulo-vantagens">
                <h1>Quem assina não se arrepende!</h1>
            </div>
            <div className="beneficios-geral">
                <div className="vantagens">
                    <img src={vantagem1} alt="Vantagens" />
                    <div className="div-span-vantagem">
                        <span className="span-vantagem">Modo offline</span>
                    </div>
                </div>
                <div className="vantagens">
                    <img src={vantagem2} alt="Vantagens" />
                    <div className="div-span-vantagem">
                        <span className="span-vantagem">Ouça sem anúncios</span>
                    </div>
                </div>
                <div className="vantagens">
                    <img src={vantagem3} alt="Vantagens" />
                    <div className="div-span-vantagem">
                        <span className="span-vantagem">Ouça na ordem que quiser</span>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
export default Conteudo2;