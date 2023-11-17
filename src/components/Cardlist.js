import React from "react"
import Card from "./Card"

const Cardlist = ({robots}) => {
    // if(1)
    // {
    //     throw new Error("error check");
    // }
     return (
        <div>
        {
            robots.map((user,i) => {
            return (
            <Card 
                key={i} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email} 
                />
            );
        })
        }
        
        </div>
     );
}

export default Cardlist;