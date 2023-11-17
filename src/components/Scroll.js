import React from "react";
import './scroll.css';

function Scroll(props){
    return (
        <div id="ok" style={{overflowY: 'scroll',
            overflowX: 'scroll' ,height: '800px'}}>
        {props.children}
        </div>
    );
};

export default Scroll;