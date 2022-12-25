import React, { useEffect, useState } from 'react'


function EditNode(props) {
    useEffect(()=>{
        console.log(props.markDown);
    },[props.markDown])

    const onChange = (e)=>{
        props.setMarkDown(e.target.value)
    }

  return (<>
    <div>
        <textarea value={props.markDown} onChange={onChange}></textarea>
    </div>
  </>
  )
}

export default EditNode
