import React, { Component } from 'react'

export default class StatefulApp extends Component {
    //mocked state 
    state={
        data:[
            {"id":101,"name":"Murthy","balance":500000},
            {"id":102,"name":"Sriram","balance":900000},
            {"id":103,"name":"Kiran","balance":600000},
        ]
    }
  render() {
    return (
    <>
      <h3 className="bg-danger">Account Holder Details</h3>
       <table className="table table-hover table-striped">
          <tbody>
              {
                this.state.data.map( (customer,index) =>{
                    return <TableRow key={index} dataProp={customer}/>
                })
              }
          </tbody>
       </table>
    </>      
    )
  }
}
//=========================================
//Presentation  : SFC
// state is mutable/dynamic/modifiable    : props are readonly, static
const TableRow= (props) =>{
    return (
        <tr>
            <td>{props.dataProp.id}</td>
            <td>{props.dataProp.name}</td>
            <td>{props.dataProp.balance}</td>
        </tr>
    )
}
