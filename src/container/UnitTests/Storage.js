import React, {Component} from 'react';
import {Chart} from 'primereact/chart';
import Storage from'./../../svg/Storage.svg';

class StorageStats extends Component {

    render() {
        const data = {
            labels: ['Johnny','Mary','Clover'],
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
                <div className="card-header"><img src={ Storage } className="icon" alt="GeoFence" align="left" /><h5>Storage Utilization</h5></div>
                <div className="widge-box">
                <div>
                    <Chart type="pie" data={data} options= {pieOptions}  />
                </div>
                </div>
<div className="actionitems">
{/*actionable controls on the */}

</div>

    </div>
        )
    }
}
export default StorageStats