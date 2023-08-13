import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

const TStyle = styled(Switch)(() => ({
    '& .MuiSwitch-switchBase:not(.Mui-checked)': {
        color: "#721304", // Color for the unchecked switch    
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: "#95af29",
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: "#95af29",
    },
    '& .MuiSwitch-track': {
        backgroundColor: "#AA4A36", // Background color for the unchecked switch track
      },
  }));

export default TStyle