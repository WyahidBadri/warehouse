import React from 'react'
import './todayPickups_cell.css'

export default function TodayPickups_cells(props){

    return(
        <div className="container-pickups">

        <div className="pickup-flex-box">

            <div className="time-col">

            {/* hourly time military */}
                 <h2>0000</h2> 

            </div>

        </div>
        <div className="rectangle-pickups">

           <div className="rectangle2-pickups">

             <h2>Order#</h2> 
             <h2>number</h2> {/* Pickup order id */}

             <h2>Client:</h2>
             <h2>name</h2> {/*Client name */}

           </div>

           <h2>Pickup:</h2> 
           <h2>Time</h2> {/*Scheduled order pickup time */}

           <h2>Trucking:</h2> 
           <h2>Truck co.</h2> {/*Transportation company picking up the order */}

           <h2>Driver:</h2>
           <h2>Guy</h2> {/*Driver name */}

           <h2>Delivery:</h2>
           <h2>mm/dd/yyyy</h2> {/*Date of pickup */}

         </div>
     </div>
    )
}