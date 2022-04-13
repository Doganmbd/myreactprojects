import React from 'react'

const DeleteButton = ({setTasks}) => {

    const DeleteAllInformation = () => {
        setTasks("")
    }

  return (
    <div >
        <button onClick={DeleteAllInformation} style={{textAlign:"center" ,width:"100%",backgroundColor:"red",color:"white", height:"50px"}}>Delete All Input</button>
    </div>
  )
}

export default DeleteButton