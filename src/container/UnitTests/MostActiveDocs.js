import React, {Component} from 'react';
import {Chart} from 'primereact/chart';
import ActiveDocs from'./../../svg/MostActiveDocs.svg'; 

export default class MostActiveDocs extends Component {

    render() {
        const data = {
            labels: ['Huron Business Proposal','UnderArmor WC Jersey','Missed A Spot'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]    
            };
         const pieOptions = {
            legend: {
                position: 'bottom'
            }
        };
        return (
            <div>
            <div className="card-header"><img src={ ActiveDocs } className="icon" alt="GeoFence" align="left" /><h5>Most Active Documents</h5></div>
            <div className="widge-box">

                <div>
                    <Chart type="doughnut" data={data} options={pieOptions} />
                </div>

               




                </div>
<div className="actionitems">
{/*actionable controls on the */}

</div>

    </div>    
            
        )
    }
}
//DeniedDocDefault-DoNut