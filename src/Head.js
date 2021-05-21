import React,{useEffect,useState} from 'react'
import "./Head.css"
import {IconButton} from "@material-ui/core"
import db from "./firebase"
import generator from "generate-password"
import FileCopyIcon from '@material-ui/icons/FileCopy';

function Head() {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(10);
    const [isLowerCase, setIsLowerCase] = useState(true);
    const [isUpperCase, setIsUpperCase] = useState(false);
    const [isNumbers, setIsNumbers] = useState(false);
    const [isSymbols, setIsSymbols] = useState(false);
   
    const generatePassword = () => {
      const pwd = generator.generate({
        length: length,
        lowercase: isLowerCase,
        uppercase: isUpperCase,
        numbers: isNumbers,
        symbols:isSymbols
      });
      setPassword(pwd);
    }
    return (
        <div className="headDiv">
            <div className="optionsDiv">
                <div className="h1"><h2>Prevent a jam, don’t open spam</h2></div>
                <div className="passwordDiv">
                    <div className="password">
                        <p className="pass" id="pass">{password}</p>
                        <div><IconButton><FileCopyIcon className="copy" /></IconButton></div>
                    </div>
                </div>
                <form>
                    <div className="length">
                        <label for="len" id="passwordLen">Password Length</label>
                        <input type="number" className="len" name="quantity" min="1" max="100" onChange={e => setLength(e.target.value)}/>
                    </div>
                    <div className="ul">
                        <div className="lowercase">
                            <input type="checkbox" checked={isLowerCase} className="lcase" onChange={() => setIsLowerCase(val => !val)}/>
                            <label for="lcase" id="l">Lower Case</label>
                        </div>
                        <div className="lowercase">
                            <input type="checkbox" checked={isUpperCase} className="lcase" onChange={() => setIsUpperCase(val => !val)}/>
                            <label for="lcase" id="l">Upper Case</label>
                        </div>
                    </div>

                    <div className="ul">
                        <div className="lowercase">
                            <input type="checkbox" className="lcase" checked={isNumbers} onChange={() => setIsNumbers(val => !val)}/>
                            <label for="lcase" id="l">Numbers</label>
                        </div>
                        <div className="lowercase">
                            <input type="checkbox" className="lcase" checked={isSymbols} onChange={() => setIsSymbols(val => !val)}/>
                            <label for="lcase" id="l">Symbols</label>
                        </div>
                    </div>

                    <button className="btn" type="button" onClick={generatePassword}>Generate Password</button>
                </form>
            </div>
        </div>
    )
}

export default Head