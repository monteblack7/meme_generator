/**
 * Created by wyattblackhurst on 7/13/17.
 */
import React from "react";
import Form from "../components/form.js";
import autoBind from "react-autobind";

//get the "connect" to connect react to the store
import { connect } from "react-redux";

//get 'bindActionCreators' to bind the 'this' to the store
import { bindActionCreators } from "redux";

//get all the actions and put them in an object called actionCreators
import * as actionCreators from "../actions";


class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            top: "",
            bottom: "",
            url: ""
        };
        autoBind(this);
    }

    handleChange(key, event) {
        let stateCopy = {...this.state};
        stateCopy[key] = event.target.value;
        this.setState(stateCopy);
    }


    render() {
        return (
            <Form handleClick={this.props.makeMeme} handleChange={this.handleChange} info={this.state}/>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);