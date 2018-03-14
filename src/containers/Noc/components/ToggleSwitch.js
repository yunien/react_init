import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Toggle from 'material-ui/Toggle';


const ToggleSwitch = (props) => {
  const {expend, onDataChange} = props;
  return (
    <MuiThemeProvider>
      <div className="ToggleDiv">
        <Toggle
          label="Camera state"
          toggled={expend}
          onToggle={()=>onDataChange()}
        />
      </div>
    </MuiThemeProvider>
  );
};

export default ToggleSwitch;