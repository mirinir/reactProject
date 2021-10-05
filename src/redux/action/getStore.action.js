export const ADD_All_STORES = 'ADD_All_STORES'


export function getAllStores(stores){
    return{
        type: ADD_All_STORES,
        payload: stores
    }
}