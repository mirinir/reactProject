
import axios from 'axios';
export const ADD_All_CLIENTS = 'ADD_All_CLIENTS'
export const ADD_INVESTMENT_POOL = 'ADD_INVESTMENT_POOL'
export const ADD_All_STORES = 'ADD_All_STORES'



export const getAllClients = ({ dispatch, getState }) => next => action => {

    if (action.type === ADD_All_CLIENTS) {
        console.log("alllllllllllllll")
        axios.get(`http://localhost:5000/getAllClients`)

            .then((AllClient) => {
                console.log("alllllllllllllll: ", AllClient.data.nameList.recordset)
                dispatch({
                    type: "All_CLIENTS",
                    payload: AllClient.data.nameList.recordset,
                })
            }).catch((err) => {
                console.log(err)
            })
    }
    return next(action)
}
export const getInvestmentPool = ({ dispatch, getState }) => next => action => {
if (action.type === ADD_INVESTMENT_POOL) {
   
    console.log("curd>INVESTMENT_POOL")
    console.log("curd>action.payload: ",action.payload)
    const cId = action.payload?action.payload:null
    axios.get(`http://localhost:5000/getInvestmentPoolmName/${cId}`)
        .then((investmentPool) => {
           
            console.log("investmentPool: ", investmentPool.data.CPool.recordset)
            dispatch({
                type: "INVESTMENT_POOL",
                payload: investmentPool.data.CPool.recordset,
            })
        }).catch((err) => {
            
            console.log(err)
        })
}
return next(action)
}
export const getAllStores = ({ dispatch, getState }) => next => action => {

    if (action.type === ADD_All_STORES) {
        console.log("crud>All_STORES")
        debugger;
        const IPI=action.payload.IPI
        const cId=action.payload.clientId
        axios.get(`http://localhost:5000/getStoresNames/${IPI}/${cId}`)

            .then((AllStores) => {
                debugger;
                console.log("AllStores: ", AllStores.data.stores.recordset)
            dispatch({
                    type: "All_STORES",
                    payload: AllStores.data.stores.recordset,
                })
            }).catch((err) => {
                console.log(err)
            })
    }
    return next(action)
}
