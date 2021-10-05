  import produce from 'immer'

const initialState = {
    allClients: [],
    investmentPools:[],
    storesName:[]

 }
export default produce((state , action) => {
    switch (action.type) {
        case 'All_CLIENTS':
            state.allClients = action.payload;
            return state
            case 'INVESTMENT_POOL':
                state.investmentPools = action.payload;
                 console.log("investmentPools- reducer: ",state.investmentPools)
                return state
            case 'All_STORES':
                    state.storesName = action.payload;
                     console.log("storesName - reducer: ",state.storesName)
                return state
        default:
            return state
    }
},initialState)

// export default produce((state = initialState, action) => {
//     switch (action.type) {
//         case 'All_CLIENTS':
//             state.allClients = action.payload;
//             return state 
//             // console.log("allClients- reducer: ",state.allClients)
//         default:
//             return state
//     }
// })