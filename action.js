import { ADD_DELETE_DATA,ADD_SEARCH_DATA,ADD_EXPENSES_SUCCESS,ADD_INCOME_SUCCESS } from "../type";


export const AddExpDelete=((data)=>{
 console.log("deleteaction",data.item.id)   
return{
    type:ADD_DELETE_DATA,
    payload:data.item.id
}
});
export const AddExpSucc=((data)=>{
    console.log("actionexp",data)
return{
    type:ADD_EXPENSES_SUCCESS,
    payload:data
}
});
export const AddIncSucc=((data)=>{
    console.log("actionincome",data)
return{
    type:ADD_INCOME_SUCCESS,
    payload:data
}
});




export const AddSearch=((data)=>{
    console.log("action====",data)
return{
    type:ADD_SEARCH_DATA,
    payload:data
}
});
// const addExpfailure=((error)=>{
// return{
//     type:ADD_EXPENSES_LOADER,
//     payload:error
// }
// });

// const addinccLoader=(()=>{
// return{
//     type:ADD_INCOME_LOADER
// }
// });
// const addincSucc=((data)=>{
// return{
//     type:ADD_INCOME_SUCCESS,
//     payload:data
// }
// });
// const addincfailure=((error)=>{
// return{
//     type:ADD_INCOME_FAILURE,
//     payload:error
// }
// });


