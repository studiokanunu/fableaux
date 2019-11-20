import React from "react";
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
import  Dicons from "./Dicons.js"; //Drawer Icons file
import "./Dgrid.css";
import './UnitTests/Utest.css';
import './UnitTests/common.css';
import GeoFencing from './UnitTests/GeoFence';
import StorageStats from './UnitTests/Storage';
import FailedAuths from './UnitTests/FailedAuths';
import DeniedDocs from './UnitTests/DeniedDoc';
import Ipfence from './UnitTests/IpFencing';
import EmailStats from './UnitTests/Email';
import MostActiveDocs from './UnitTests/MostActiveDocs';
import SubscriptStats from './UnitTests/Subscriptions';
import DeniedByDocs from './UnitTests/DeniedByDoc';
import AccDeniedUser from './UnitTests/AccDeniedUsr';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

// the drawer holds the Data Views which we will expand
const widget=["GeoFence","Storage","FailedAuth","DeniedDocType","AccessDeniedUser", "IpFencing", "Email", "MostActiveDocs", "Subscriptions", "DeniedByDoc"];

const Widgies = [<GeoFencing/>, <StorageStats/>, <FailedAuths/>, <DeniedDocs/>,<AccDeniedUser/>, <Ipfence/>,<EmailStats/>,<MostActiveDocs/>,<SubscriptStats/>,<DeniedByDocs/>,];

class ToolBoxItem extends React.Component {
  componentDidMount(){
   document.body.style.backgroundImage = "none"; // Set the style
    document.body.className="body-component-a"; // Or set the class
}
  render() {
    return (
      <div
        className="toolbox__items__item "
        onClick={this.props.onTakeItem.bind(undefined, this.props.item)} id={widget[this.props.item.i]} >
<img src={ Dicons[this.props.item.i] } alt=""/> 

</div>
    );
  }
}
class ToolBox extends React.Component {
  render() {
    return (
      <div className="footer">

<div className="toolbox">

<div className="toolbox__items">
  {this.props.items.map(item => (
    <ToolBoxItem
      key={item.i}
      item={item}
      onTakeItem={this.props.onTakeItem}
    />
   
  ))}
 
</div>
</div>
      </div>
    
   
    );
  }
}

class AddRemove extends React.Component {
  static defaultProps = {
    className: "layout",
    rowHeight:55,  
    onLayoutChange: function() {},
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    initialLayout: generateLayout()
  };

  state = {
    currentBreakpoint: "lg",
    compactType: "vertical",
    mounted: false,
    layouts: { lg: [] }, //Initially, everything is in "the Drawer" Sprint 3  DONE 10/23/19 // Need to hijack this for default layout Sprint 4
    toolbox: { lg: this.props.initialLayout }
  };

  componentDidMount() {
    this.setState({ mounted: true });
  }
 /*Somewhere below here goes the target for the DataType Needs a wrapper based on an array that will have a specific layout as the array value */
  generateDOM() {
    return _.map(this.state.layouts[this.state.currentBreakpoint], l => {
      return (
        <div key={l.i} className="basecard" id={widget[l.i]}>
          <div className="hide-button" onClick={this.onPutItem.bind(this, l)}>
            &times;
          </div>
          <div> 
          {Widgies[l.i]}
          
          
          </div>
          <span className="text" title="Resize, Move, Close">
              
            </span>
        </div>
      );
    });
  }
 /*Somewhere above here goes the target for the DataType */
  onBreakpointChange = breakpoint => {
    this.setState(prevState => ({
      currentBreakpoint: breakpoint,
      toolbox: {
        ...prevState.toolbox,
        [breakpoint]:
          prevState.toolbox[breakpoint] ||
          prevState.toolbox[prevState.currentBreakpoint] ||
          []
      }
    }));
  };

  onCompactTypeChange = () => {
    const { compactType: oldCompactType } = this.state;
    const compactType =
      oldCompactType === "horizontal"
        ? "vertical"
        : oldCompactType === "vertical"
        ? null
        : "horizontal";
    this.setState({ compactType });
  };

  onTakeItem = item => {
    this.setState(prevState => ({
      toolbox: {
        ...prevState.toolbox,
        [prevState.currentBreakpoint]: prevState.toolbox[
          prevState.currentBreakpoint
        ].filter(({ i }) => i !== item.i)
      },
      layouts: {
        ...prevState.layouts,
        [prevState.currentBreakpoint]: [
          ...prevState.layouts[prevState.currentBreakpoint],
          item
        ]
      }
    }));
  };

  onPutItem = item => {
    this.setState(prevState => {
      return {
        toolbox: {
          ...prevState.toolbox,
          [prevState.currentBreakpoint]: [
            ...(prevState.toolbox[prevState.currentBreakpoint] || []),
            item
          ]
        },
        layouts: {
          ...prevState.layouts,
          [prevState.currentBreakpoint]: prevState.layouts[
            prevState.currentBreakpoint
          ].filter(({ i }) => i !== item.i)
        }
      };
    });
  };

  onLayoutChange = (layout, layouts) => {
    this.props.onLayoutChange(layout, layouts);
    this.setState({ layouts });
  };

  onNewLayout = () => {
    this.setState({
      layouts: { lg: generateLayout() }
    });
  };

  render() {
    return (
      <div>

        <ToolBox
          items={this.state.toolbox[this.state.currentBreakpoint] || []}
          onTakeItem={this.onTakeItem}
        />

        <ResponsiveReactGridLayout
          {...this.props}
          layouts={this.state.layouts}
          onBreakpointChange={this.onBreakpointChange}
          onLayoutChange={this.onLayoutChange}
          // WidthProvider option
          measureBeforeMount={false}
          // Annimation needs work
          // along with the Dragons.
          useCSSTransforms={this.state.mounted}
          compactType={this.state.compactType}
          preventCollision={!this.state.compactType}>
          {this.generateDOM()}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

export default AddRemove;

function generateLayout() {
  return _.map(_.range(0, 10), function(item, i) {
    var y = Math.ceil(Math.random() * 1) + 1;
    return {
      x: (_.random(0, 5) * 2) % 12,
      y: Math.floor(i) * y,
      w: 1.75,
      h: 3.25,
      i: i.toString(),
      static: Math.random() < 0.05
    };
  });
}
