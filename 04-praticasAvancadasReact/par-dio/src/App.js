// import React from './react';
// import ReactDom from 'react-dom';

// const Pai = (props)=>{
//     return(
//         <div 
//         style={{
//             width: "75%",
//             background: "#FFEFD5",
//             height: "200px",
//             padding: "20px"
//         }}
//         >
//            <h5>Sou um pai</h5> 
//         </div>
//     );
// };

// const Filho = (props)=>{
//     return(
//         <div 
//         style={{
//             width: "50%",
//             background: "#FA8072",
//             height: "100px",
//             padding: "20px",
//             color: "white",
//             fontsiza: "30px",
//         }}
//         >
//           {props.autor}
//         </div>
//     )
// }

// function App() {
//   return (
//     <Pai>
//         <Filho autor="Sou um filho" />
//     </Pai>
//   );
// }

// ReactDom.render(<App />, document.getElementById("root"));

// export default App;

import React from 'react';
import { Component } from "react";
import Twitter from './Twitter'
import Twitter2 from './Twitter2';


class App extends Component{
    
    state={
        loading: false,
        actived : true,
        tweet: 'title'
}

    componentDidMount() {
        setTimeout(()=>{
            this.setState({loading: true})
        },3000)
        console.log(loading)
    }

    onRemove=(()=>{
        this.setState({
            actived: false
        })
    })

    render(){
        const posts = [{
            name: 'John',
            lastname: 'Dree'
        },{
            name:'Emma',
            lastname:'Dree'
        }]
      
        return(
            <>
            <Twitter posts={posts} />
            (this.state.actived &&{
                 <Twitter2 posts={posts} loading={this.setState.loading} />
            })
            <button onClick={this.onRemove}></button>
            </>
           
        )
    }
}
export default App;