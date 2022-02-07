import React, { Component } from 'react';
import Twitter from './Twitter2'

class Twitter2 extends Component {
   
    componentDidMount() {
        const loading = props
        console.log('componentDidMount', posts)
        console.log('componentDidMount', loading)
    }

    componentDidMount = (prevProps) => {
        const {loading} = props
        if(props.loading !== prevProps.loading){
            console.log('componentDidUpdate:loading: ', loading)
        }
    }

    componentWillUnmount(){
        console.log('Fui removido :(')
    }

    shouldComponentUpdate(nextProps, nextState){
        return this.props
    }

    render(){
        const posts = [{
            name: 'John',
            lastname: 'Dree'
        },{
            name:'Emma',
            lastname:'Dree'
        }];
     
     const{loading} = this.props
     console.log('render', posts,loading)
    
         return(
            <div>
               posts2:
            </div>
        )
    }
}

export default Twitter2;