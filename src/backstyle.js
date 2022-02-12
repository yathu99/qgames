var disp2= () =>{
    console.log("Did Something")
}

function var1() {
    return (
            <div>
            <label>Click Here to do Something</label>
            <br/>
            <input className="button1" type="button" value="Do something" onClick={disp2}/>
            <br/>
            <label>Click Here to do Something</label>
            <br/>
            <input className="button2"  type="button" value="Do something" onClick={disp2}/>
            <br/>
            <label>Click Here to do Something</label>
            <br/>
            <input className="button3" type="button" value="Do something" onClick={disp2}/>
            
            
            
            </div>
    )
}

export default var1;