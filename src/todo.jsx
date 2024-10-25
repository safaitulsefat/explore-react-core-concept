// export default function Todo({name,isdone}){
//     return (
//         <div>
//            <h3>My {name}</h3> 
//         </div>
//     )
// }

// export default function Todo({name,isdone}){
//     if(isdone){
//         return <li>work done {name}</li>
//     }else{
//         return <li>available {name}</li>
//     }
        
// }

// export default function Todo({name,isdone}){
//         return(
//             <li>{isdone ? 'finesed' : 'work on'}</li>
//         )
            
//     }
    
export default function Todo({name,isdone}){
    return(
        <li>{name}{isdone && ':Done'}</li>
    )
        
}
