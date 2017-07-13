/**
 * Created by wyattblackhurst on 7/13/17.
 */
let defaultState = {
    top: "",
    bottom: "",
    url: ""
};

let mainReducer = (state, action) => {
    if(action.type === "MAKE_MEME"){
        return {
            ...state,
            top: action.meme.top,
            bottom: action.meme.bottom,
            url: action.meme.url
        }
    }else {
        return {
            ...state
        }
    }
};

export default mainReducer;