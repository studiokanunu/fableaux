import React, {Component} from 'react';
import DeniedDoc from'./../../svg/DeniedDoc.svg'; 
import BarChart from '../Components/Bars';

export default class DeniedDocs extends Component {

    render() {

        return (
            <div>
            <div className="card-header"><img src={ DeniedDoc } className="icon" alt="GeoFence" align="left" /><h5>Denied Documents</h5></div>
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
