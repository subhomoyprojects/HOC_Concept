import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';


function HOC2(Component) {
    function Checking(props){
        const [word,setWord] = useState('Testing');
        const [count, setCount] = useState(0);

        for(let i = 0; i < setWord.length; i++){
            if(word.charAt(i)==='a'||word.charAt(i)==='e'||word.charAt(i)==='i'||word.charAt(i)==='o'||word.charAt(i)==='u'){
                setCount(count + 1);
                console.log(setCount(count + 1));
            }
        }
        return(
            <>
                <Header/>
                <Component {...props} />
                <Footer/>
            </>
        );
    }
    return Checking;
}

export default HOC2;