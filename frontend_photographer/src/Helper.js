// export const token=()=>{
//     let mytoken = localStorage.getItem("token")
//     if(mytoken){
//         return  
//     }
//     else{
//         return null;
//     }
// }
export const token=()=>{
    let token = { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`}}
}