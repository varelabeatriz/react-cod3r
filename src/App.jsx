import './App.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Numero from './components/basicos/Numero'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'

export default () => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">

                <Card titulo="#06 - Repetição" color="orange">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#05 - Componente com Filhos" color="blue">

                    <Familia sobrenome="Ferreira">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Ana" />
                    </Familia>

                </Card>

                <Card titulo="#04 - Desafio Aleatório" color="red">
                    <Numero min="1" max="100" />
                </Card>

                <Card titulo="Exemplo de Card">
                    <ComParametro
                        titulo="Segundo Componente"
                        subtitulo="Muito Legal"
                    />
                </Card>

                <Card titulo="Exemplo de Card">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )
}