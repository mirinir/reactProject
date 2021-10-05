export const ADD_All_CLIENTS = 'ADD_All_CLIENTS'
export const ADD_INVESTMENT_POOL = 'ADD_INVESTMENT_POOL'

export function getAllClient(cilents){
    return{
        type: ADD_All_CLIENTS,
        payload: cilents
    }
}


export function getInvestmentPool(cilentId){
    return{
        type: ADD_INVESTMENT_POOL,
        payload: cilentId
    }
}


