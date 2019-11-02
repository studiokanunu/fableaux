import React, {Component} from 'react';
import Email from'./../../svg/Email.svg'; 
import BarChart from '../Components/Bars';

export default class EmailStats extends Component {

    render() {

        return (
            <div>
            <div className="card-header"><img src={ Email } className="icon" alt="GeoFence" align="left" /><h5>Email Statistics</h5></div>
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
