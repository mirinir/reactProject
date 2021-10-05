import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAllClient } from '../redux/action/getAllClient.action';
import { getInvestmentPool,getStoresNames } from '../redux/action/getInvestmentPool.action';



import Select from 'react-select'


const mapDispatchToProps = (dispatch) =>({
    
        // changeGrade: (newGrade) => dispatch(actions.changeGrade(newGrade))
        getAllClient: () => dispatch(getAllClient()),
        getInvestmentPool:(clientId) =>{
           
           dispatch(getInvestmentPool(clientId)) 
           
        },
        getStoresNames:(investmentPool)=>{ 
            console.log("investmentPool: ",investmentPool.IPI,investmentPool.clientId)

            dispatch(getStoresNames(investmentPool) )
           
        }
})
const mapStateToProps = (state) => {
    return {
        getAllClientt: state.get.allClients,
        getInvestmentPooll:state.get.investmentPools,
        getAllStoress:state.get.storesName

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(function Main1(props) {
   
    useEffect(() => {
        getAllClient();
        getInvestmentPool();

    },[])
    useEffect(() => {
    
    },[getAllClient,getInvestmentPool])




  const { getAllClient,getAllClientt,getInvestmentPool,getInvestmentPooll , getStoresNames,getAllStoress} = props
  const [cId,setCId]=useState(0)

  function getInvestmentsPool (clientId){
      debugger;
    setCId (clientId) 
    getInvestmentPool(clientId)
  }

  
  return (<div>


        
    <select class="form-select form-select-lg mb-3"
     onChange={(e)=>getInvestmentsPool(e.target.value)}>
         <option selected>client names...</option>
    {getAllClientt.map((client,index)=>
                    <option
                    placeholder="Select ClientName..."
                    key={index}
                    value={client.id}> {client.name} </option>
        )
        }
        </select>
        <select class="form-select form-select-lg mb-3"
        onChange={(e)=>getStoresNames({IPI:e.target.value,clientId:cId})}>
        <option selected>investment pool names...</option>
         {getInvestmentPooll.map((investmentPool,index)=>
                    <option
                    key={index}
                    value={investmentPool.IPI}> {investmentPool.name} </option>
        )}
          
        </select>
        <div >
       
  <div>
      { getAllStoress[0] ?
       <ui>{getAllStoress[0].amount_invested}</ui>
       :
       <ui> </ui>
      }
  </div>
      
            
       {  getAllStoress&&getAllStoress.map((store,index) =>
        
        <li>{store.name}</li>
        )}
    </div>
        
   
 
        </div>
    )
})