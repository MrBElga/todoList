import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

export function App() {
  const [tarefa, setTarefa] = useState("");
  const [listaTarefa, SetListaTarefa] = useState([]);

  useEffect(() =>{
    console.log("teste");
  }, [listaTarefa])

  return (
    <div className='container'>
      <input type = "text" onChange={e => setTarefa(e.target.value)}/>
      <button onClick={() => adcionarTarefa()}>ADICIONAR</button>
   
      <ul>
        {listaTarefa.map((tarefa, index) => {
          return(

            <div className='tarefas'>
              <li key={index}>{tarefa}</li>
              <button onClick={() => deletarTarefa(index)}>DELETAR</button>
            </div>

          )
        })}
      </ul>
    </div>
    
  )
  function adcionarTarefa(){
    if(tarefa.length == 0){
      alert("Digite algo valido");
      return;
    } 
    const verificar = listaTarefa.indexOf(tarefa);
    
    if(verificar >= 0){
      alert("Já possui esta tarefa");
      return;
    }

    SetListaTarefa([...listaTarefa,tarefa]);
  }

  function deletarTarefa(index){
    const aux = [...listaTarefa];
    aux.splice(index, 1);
    SetListaTarefa(aux);
  }
}


