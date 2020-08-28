import React, {Component} from "react"

class Specials extends Component{
    render(){
        const specialsList = this.props.specials.map((s, idx)=>{
            return <li key={idx}>{s}</li>
        })
        console.log(this.props.specials)
        return(
            <div>
                <h1>
                    Specials
                    
                </h1>
                {specialsList}
            </div>
        )
    }
}
export default Specials