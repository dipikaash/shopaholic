import { Link } from 'react-router-dom'
import { Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';


const defaultTheme = createTheme();

const Header = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="sticky" sx={{ background: 'primary' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/"><img alt="Happiest Minds" className="classLogo"
              src="https://www.bing.com/th?id=OIP.Cxwp2AvIVAXsGCHrmLX_VwHaC5&w=350&h=137&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            /></Link>
            Shopaholic By HM
          </Typography>
          <Link to="/"><Button sx={{ color: 'white' }}>Home</Button></Link>
          <Link to="cart"><Button sx={{ color: 'white' }}>Cart</Button></Link>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header;