import React, {Component} from "react";
import HOC1 from "./HOC1";

class LikesComp extends Component{
    render(){
        return(
            <>
                <div>
                    <p>Total Likes: {this.props.CountNumber}</p>
                    <button onClick={this.props.handleClick}>Increment</button>
                </div>
            </>
        );
    }
}

const EnhancedLikes = HOC1(LikesComp,0);
export default EnhancedLikes;