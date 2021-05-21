import React from "react"
import "./History.css"
import db from "./firebase"
function History(){
    const Add=()=>{
        const add=prompt("Enter a password Name:");
        if (add){
            db.collection("rooms").add({
                name:add
            })
        }
        else{
            alert("Your password was not saved!")
        }
    }
    return(
        <div className="history">
            <div className="historyBar">
                <button onClick={Add}>Hello</button>
                <h1>Password History</h1>
                <div className="passwordNamePass">
                    <h2>Password</h2>
                    <p>Password</p>
                </div>
            </div>
        </div>
    );
}

export default History;