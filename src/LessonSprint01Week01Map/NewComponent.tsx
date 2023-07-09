import React from "react";

type NewComponentPropsType = {
    students: {
        id: number
        name: string
        age: number
    }[]
}


export const NewComponent: React.FC<NewComponentPropsType>
    = (props) => {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]
    return (<div>
        {props.students[0].name}
        <ul>
            {props.students.map(student =>
                <li key={student.id}>
                    <span>{student.name}</span>
                    <span> age: {student.age}</span>
                </li>)}
        </ul>
        <br/>
        <table>
            {topCars.map((car, ind)=>
                <tr key={ind+1}> <td>{car.manufacturer} </td>  <td>{car.model}</td> </tr>
            )}

        </table>

    </div>)
}
