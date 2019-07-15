import React from 'react'
import './todayPickups_cell.css'

export default function TodayPickups_cells(props){


    return(
        <div className="container-pickups">

        <div className="rectangle-pickups">

           <div className="rectangle2-pickups">

             <h2>Order#</h2> 
             <h2>{`${props.ordernum}`}</h2>
             <h2>Client:</h2>
             
           </div>

           <h2>Pickup:</h2> 
           <h2>Trucking:</h2> 
           <h2>Driver</h2>
           <h2>Delivery:</h2>

         </div>
     </div>
    )
}