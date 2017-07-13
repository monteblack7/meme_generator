/**
 * Created by wyattblackhurst on 7/13/17.
 */
import React from "react";

class Form extends React.Component {
    render() {
        return (
            <div>
                <input onChange={(event) => {
                    this.props.handleChange("url", event);
                }} value={this.props.info.url} placeholder="Image URL" className="form-control form-custom2"/>

                <input onChange={(event) => {
                    this.props.handleChange("top", event);
                }} value={this.props.info.top} placeholder="Top Text" className="form-control form-custom" />

                <input onChange={(event) => {
                    this.props.handleChange("bottom", event);
                }} value={this.props.info.bottom} placeholder="Bottom Text" className="form-control form-custom" />

                <button onClick={() => {
                    this.props.handleClick(this.props.info);
                }} className="btn btn-primary form-control"> Meme </button>
            </div>
        )
    }
}

export default Form;