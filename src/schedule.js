import React  from "react";

const gameArray = [
    {name:'Out of Time',genre:'2D Action',budget:1000,yor:2022},
    {name:'Burnt',genre:'Arcade Racing',budget:30000,yor:2024},
    {name:'Despair',genre:'Action Crime',budget:50000,yor:2024},
    {name:'Outsiders',genre:'Adventure Space',budget:25000,yor:2025}
]

var Func1 = function generateTable(){
    var rowArr = gameArray.map((tmparr) => {
        return (
            <tr key={tmparr.name}>
                <td className="bara">{tmparr.name}</td>
                <td/>{tmparr.genre}
                <td/>{tmparr.yor}
                <td/>{tmparr.budget>25000?<>{tmparr.budget}</>:<>{tmparr.budget} - This is expensive</>}
                {/*<td/>{h1}*/}
            </tr>   
        )
    })
    return (
        <table className="table text-right col-8 border-12">
            <tbody className="space-x-80">{rowArr}</tbody>
        </table>
    )
}

export default Func1;