import {action} from "../actions/actions-types"
const initialState = {
    userData: {}
}

const userReducer = (state = initialState, action: action) =>{
    switch(action.type){
        case "Example" : {
            const example = action.payload
            return { ...state}
        }
        default:
            return{
                ...state,
            }
    }
}

export default userReducer