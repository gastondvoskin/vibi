
const initialState = {
    userData: {}
}
//! HAY QUE ACONDICIONAR ESTE REDUCER COMO EL DE PUBLICATION
const userReducer = (state = initialState, action: any) =>{
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