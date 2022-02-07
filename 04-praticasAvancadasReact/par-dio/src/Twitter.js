import React, { Component } from 'react';

class Twitter extends Component {
   
/*
    componentWillMount(){ //component deprecated replace by componentDidMount
        const {posts} = this.props
        console.log('componentWillMount', posts)
    }
*/
    componentDidMount() {
        const {posts} = this.props
        console.log('componentDidMount', posts)
    }
    render(){
     const {posts} = this.props
        return(
            <div>
               posts:
            </div>
        )
    }
}

export default Twitter;