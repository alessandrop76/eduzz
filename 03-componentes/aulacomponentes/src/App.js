import Item from './components/Item';
import Card from './components/Card';

const App= ()=>{
  return (
    // fragments <> </> - usados para renderização de componentes no mesmo nível - componentes irmãos

    <>                   
     <h1>Welcome, Hello World! - Primeira Aplicação React</h1>
     <p>Primeiro parágrafo</p>
     <ul>
       <Item texto="Item 1">Item 1A</Item>
       <Item texto="Item 2">Item 2B</Item>
       <Item>Item 3c</Item>
       <Card></Card>
     </ul>
    </>
  )
}

export default App;