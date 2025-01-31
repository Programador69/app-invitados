"use client";

import "@/app/leer-qr/estilo.css";
import { FaArrowLeft } from "react-icons/fa";
import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import { inter } from "../page";

export default function Qr() {
    const [valor, setValor] = useState("Leyendo Qr...")

    const verificarQr = (data: object[]) => {
        const [{rawValue}] = data; 
        setValor(rawValue)
    }

    return (
        <div className={inter.className}>
            <header>
                <a href="/invitados">
                    <FaArrowLeft/>
                </a>
                <h1>Buscar por Qr</h1>
            </header>

            <main>
                <section>
                    <Scanner onScan={(result) => verificarQr(result)} />
                </section>
                <section>
                    <h2>Lectura del codigo:</h2>
                    <span>{valor}</span>
                </section>
            </main>
        </div>
    )
}