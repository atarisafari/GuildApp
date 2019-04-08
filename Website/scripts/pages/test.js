
import React from 'react'
export default props => {
    // const {message} = useContext(FBContext); 
    console.log('props: ', props); 
    return (
    <div>
        <h1> Sample Page2: Test. </h1> 
        {/* <SamplePage2 />  */}
        <button onClick={()=>props.history.push('/')}>Back to App</button>
    </div>
    )
}
