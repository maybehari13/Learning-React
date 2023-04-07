import React from 'react'

const ComponentWithProps = props => {

    const {objProp} = props 
    const objDisplay =  Object.entries(objProp).map(([key,val]) => 
    <h3 key={key}>{key} : {val}</h3>
    );

  return (
    <div>
        <h1>{props.headerText}</h1>
        <h2>{props.numericProp}</h2>
        {objDisplay}
        {/* { 
            Object.entries(objProp).map(([key,val]) => 
                <h3 key={key}>{key} : {val}</h3>
            )
        } */}
        {/* <h3>JSON.stringify({objProp})</h3> */}
    </div>
  )
}

export default ComponentWithProps;