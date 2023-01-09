import { ITarefa } from '../../Types/tarega';
import Item from './Item';
import style from './Lista.module.scss';

interface Porps { 
    tarefas: ITarefa[]
    selecionaTarefa: (tarefaSelecionada:ITarefa) => void
}

function Lista({ tarefas, selecionaTarefa }: Porps )  {    
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map(item => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;