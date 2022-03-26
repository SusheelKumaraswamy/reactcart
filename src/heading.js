import React from 'react' ;

class heading extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div style={{background: "black",height:"200px",justifyContent:"center",padding:"40px",marginBottom:"50px"}}>
                <div style={{alignContent:"center"}}> 
                    <h1 style={{color: "white",textAlign:"center"}}>Shop in Syle</h1>
                    <p style={{color: "white",textAlign:"center"}}>with this shop homepage templete</p>
                </div>
            </div>
        )
    }
}

export default heading;