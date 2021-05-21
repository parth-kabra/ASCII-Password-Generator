//HomePage

import React,{ useEffect } from "react"
import "./Generator.css"
import {IconButton} from "@material-ui/core"
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Head from "./Head"
function Header(){
    useEffect(() => {
        document.title = "Mr.Protector (Generate strong password!)"
     }, []);
    return(
        <div className="FullApp">
            <div className="hi">
                <h1 className="hello">Hello & Welcome</h1>
                <p className="msg">Stop Neglect, Protect before you connect.</p>
            </div>
            
        </div>
    )
}
export default Header