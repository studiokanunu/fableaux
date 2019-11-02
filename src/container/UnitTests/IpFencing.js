import React, {Component} from 'react';
import IpFencing from'./../../svg/Ipfencing.svg'; 
import BarChart from '../Components/Bars';

export default class Ipfence extends Component {

    render() {

        return (
            <div>
            <div className="card-header"><img src={ IpFencing } className="icon" alt="GeoFence" align="left" /><h5>IP Fencing Violations</h5></div>
            <div className="widge-box">

                <div>
                    <BarChart />
                </div>

               




                </div>
<div className="actionitems">
{/*actionable controls on the */}

</div>

    </div>    
            
        )
    }
}
