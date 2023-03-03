import React from 'react';
import Header from  './Header';
import Footer from  './Footer';


function HOC(Component) {
    function NewComponent(props){
        return(
            <>
                <Header/>
                <Component {...props}/>
                <Footer/>
            </>
        );
    }
    return NewComponent;
}

export default HOC;