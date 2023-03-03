import React from 'react';

const HOC1 = (Component,data) => {
    return class extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                count: data
            };
        }
        handleClick = ()=>{
            this.setState({
                count: this.state.count + 1
            });
        }
        render(){
            return(
                <Component CountNumber={this.state.count} handleClick= {this.handleClick}></Component>
            );
        }
    };
};

export default HOC1;