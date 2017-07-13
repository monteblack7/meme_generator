/**
 * Created by wyattblackhurst on 7/12/17.
 */
import React from "react";
import ReactDOM from "react-dom";

//Get the thing that provides store to your app
import { Provider } from "react-redux";

//Get the thing that makes the store
import { createStore } from "redux";

//Get the reducer to handle state
import reducers from "./reducers/";


import MemeContainer from "./containers/meme-container.js";
import FormContainer from "./containers/form-container.js";
import Header from "./components/header.js";
import "./index.css";

//make the store
const store = createStore(reducers);


class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <FormContainer />
                        </div>
                        <div className="col-md-6">
                            <MemeContainer/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

//Give store to the app through Provider
ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));