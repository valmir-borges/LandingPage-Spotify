import Style from "./css/conteudo1.module.css";
import premium from "./img/premium.png";
function Conteudo1 (props){
    return(
        <>
        <main>
            <section>
                <div className={Style.textos}>
                    <span className={Style.titulo}>Ouça quando quiser e onde quiser!</span>
                    <span className={Style.subtitulo}>Ouça suas músicas favoritas a qualquer momento sem interrupções. Cancele a qualquer momento.</span>
                    <div className={Style.experimente}>
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