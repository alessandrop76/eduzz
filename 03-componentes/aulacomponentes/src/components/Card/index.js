import {useState} from 'react';
import Button from '../Button';

const Card = ({children}) =>{
    const [valor, setValor] = useState(0)    
    function Adicionar(){
     setValor(valor + 1);
    }
    function Remover(){
        if(valor == 0){
            setValor(valor)
        }else{
            setValor(valor - 1)
        }
        
    }
    return(
        <div className="card border-success mb-3">
            <div className="card-header bg-transparent border-success">Header</div>
            <div className="card-body text-success">
            <h5 className="card-title">Incrementando e Decrementando</h5>
            <p className="card-text">Com React</p>
        </div>
        <div className="card-footer bg-transparent border-success">
            <Button
            className="btn btn-success"
            onClick={(Adicionar)}>
                + Adicionar
            </Button>
            <Button
            className="btn btn-danger"
            onClick={(Remover)}
            >
            - Remover
            </Button>
            <h4>{valor}</h4>
            <button
            type="button" className="btn btn-success"
            // onClick={(event)=>{setValor(event.target.value +1)}}>+ Numeros</button>
            onClick={(Adicionar)}>+ Numeros</button>
            <button 
            type="button" class="btn btn-danger"
            onClick={(event)=>{setValor(Remover)}}
            >- Numeros</button>
        </div>
        </div>
        )
}

export default Card;