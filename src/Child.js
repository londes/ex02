import React from 'react';

class Child extends React.Component {
    render() {
        return (<div><p>Hi, my name is {this.props.name} and I'm the child Component</p></div>);
    }   
}

export default Child;