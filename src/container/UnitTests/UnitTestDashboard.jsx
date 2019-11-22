import React, {Component} from 'react';
import GoogleApiWrapper from '../Components/WowMapper';
import AddRemove from '../DGrid';
import './Utest.css';


class StaticGrid extends Component {
//gridstart
render() {
  return (
    <div>
          
<div><GoogleApiWrapper /></div>
<div><AddRemove /></div>

 
    </div>




  );
}
}
export { StaticGrid }

