import Pie from './componentes/pie';
import Formulario from './componentes/formularioInicio';
import { Inter } from 'next/font/google';

const inter = Inter({subsets: ["latin"], weight: "700", style: ["italic"]})

export default function Home() {
  return (
    <div className='panelInicio'>
      <header className={inter.className}>
        <h1>App de invitados</h1>
      </header>

      <main className={inter.className}>
        <section className='sectionFormulario'>
          <Formulario/>
          <ul>
            <li> <a href='/recuperar-cuenta'>Olvide mi contraseña</a> </li>
            <li> <a href='/crear-cuenta'>No tengo cuenta</a> </li>
          </ul>
        </section>

      </main>
      <Pie/>
    </div>
  )
}