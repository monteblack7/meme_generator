/**
 * Created by wyattblackhurst on 7/12/17.
 */
import React from "react";



class Meme extends React.Component {
    render() {
        return (
            <div className="meme" style={{backgroundImage: `url(${this.props.url})`}}>
                <p className="top">{this.props.top}</p>
                <p className="bottom">{this.props.bottom}</p>
            </div>
        )
    }
}



export default Meme;