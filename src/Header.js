import React,{ useEffect } from "react"
import "./Header.css"
import {IconButton} from "@material-ui/core"
import FileCopyIcon from '@material-ui/icons/FileCopy';
function Header(){
    useEffect(() => {
        document.title = "Password Generator"
     }, []);
    return(
        <div className="FullApp">
            <div className="appheader">
                <h2 className="AppName">Your app name</h2>
                <a className="Text1" href="#header">Generate Password</a>
                <a className="Text2" href="#header">Password History</a>
            </div>
            <div className="hi">
                <h1 className="hello">Hello & Welcome</h1>
                <p className="msg">Stop Neglect, Protect before you connect.</p>
            </div>
            
            
            {/*<div className="header" id="header">
                <div className="text"><h1 className="appname">Your App Name</h1></div>
                <div className="search">
                    <div className="pass"><p className="password">AKdfdfdfdddddddddddddddddddddddddJDS898J</p></div>
                    <IconButton><FileCopyIcon className="copy"/></IconButton>
                </div>
                <div className="otherOptions">
                    <form className="otheroptionsform">
                        <label for="length">Password Length  </label>
                        <input type="number" className="length" name="quantity" min="1" max="2000"/>  
                        
                        <label for="inittext">Add Initial Text  </label>
                        <input type="text" className="inittext" name="string"/> 

                        <label for="pronocepassword">Pronounceable Password</label>    
                        <input type="checkbox" className="pronouncepassword"/>       

                        <label for="uppercase">Include Uppercase Letters</label>
                        <input type="checkbox" className="uppercase"/>  

                        <label for="lowercase">Include Lowercase Letters</label>  
                        <input type="checkbox" className="lowercase"/>

                        <label for="number">Include Numbers</label>  
                        <input type="checkbox" className="number"/>

                        <label for="symbols">Include Symbols</label>  
                        <input type="checkbox" className="symbols"/>

                        <button className="generate" type="submit">Generate Password</button>
                    </form>
                </div>
                <br/><br/><br/><br/><br/>
                
            </div>*/}
        </div>
    )
}
export default Header