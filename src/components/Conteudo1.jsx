import "./css/conteudo1.css";
import premium from "./img/premium.png";
function Conteudo1 (props){
    return(
        <>
        <main>
            <section>
                <div className="textos">
                    <span className="titulo">Ouça quando quiser e onde quiser!</span>
                    <span className="sub-titulo">Ouça suas músicas favoritas a qualquer momento sem interrupções. Cancele a qualquer momento.</span>
                    <div className="experimente">
                        <span>Experimemente 3 meses por R$0,00</span>
                    </div>
                </div>
                <div>
                    <img src={premium} alt="" />
                </div>
            </section>
        </main>
        </>
    );
}
export default Conteudo1;