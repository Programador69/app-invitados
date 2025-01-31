import "@/app/buscar-codigo/estilo.css";
import { FaArrowLeft } from "react-icons/fa";
import { inter } from "../page";
import { TbAlertSquare } from "react-icons/tb";

export default function BuscarCodigo() {
    return (
        <div className={inter.className}>
            <header>
                <a href="/invitados">
                    <FaArrowLeft/>
                </a>
                <h1>Buscar por código</h1>
            </header>

            <main>
                <section>
                    <label htmlFor="inputId">
                        <TbAlertSquare />
                    </label>
                    <input id="inputId" type="number" min={1} placeholder="Codigo del invitado" className={inter.className}/>
                </section>
            </main>
        </div>
    )
}