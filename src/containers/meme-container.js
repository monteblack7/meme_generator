/**
 * Created by wyattblackhurst on 7/12/17.
 */
import React from "react";
import Meme from "../components/meme.js";

//Get the thing that connects react to redux
import { connect } from "react-redux";

//get 'bindActionCreators' to bind the 'this' to the store
import { bindActionCreators } from "redux";

//get all the actions and put them in an object called actionCreators
import * as actionCreators from "../actions";


class MemeContainer extends React.Component {
    render() {
        return (
           <Meme top={this.props.top} bottom={this.props.bottom} url={this.props.url}/>
        )
    }
}

//map our data from store to props
const mapStateToProps = (state) => {
    return state;
};

//take all our (actions = actionCreators) and map them to props
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MemeContainer);