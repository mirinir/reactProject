export const ADD_INVESTMENT_POOL = 'ADD_INVESTMENT_POOL'
export const ADD_All_STORES = 'ADD_All_STORES'


export function getInvestmentPool(investmentPool){
    return{
        type: ADD_INVESTMENT_POOL,
        payload: investmentPool
    }
}

export function getStoresNames(prop){
    return{
        type: ADD_All_STORES,
        payload: prop
    }
}