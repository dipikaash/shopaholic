import { Button } from "@mui/material";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import { useDispatch } from "react-redux";
import { AddToCart, DeleteFromCart } from "../Store/ProductsSlice";

const defaultTheme = createTheme();
const gridSx = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    "&.MuiGrid-root": {
        margin: 0
    }
}

const Item = (props) => {
    const { img, name, specs, price } = props.data;
    const dispatch = useDispatch();
    const addToCart = () => {
        let cartItem = {
            ...props.data,
            count: 1
        }
        dispatch(AddToCart(cartItem));
    }
    const deleteFromCart = () => {
        dispatch(DeleteFromCart(props.data))
    }

    return (<>
        <ThemeProvider theme={defaultTheme}>
            <Container component='main' maxWidth='xl'>
                <CssBaseline />
                <Box sx={gridSx}>
                    <Grid className="item-card" container spacing={6}>
                        <Grid item xs={3}>
                            <img className="item-logo" src={img} alt="loading..." />
                        </Grid>
                        <Grid item xs={5}>
                            <h3 className="item-elem">{name}</h3>
                            {specs.map((spec) => (
                                <h4 className="item-elem" key={spec} >{spec}</h4>
                            )
                            )}
                        </Grid>
                        <Grid item xs={2}>
                            <h4 className="item-elem">Price: {price} Only</h4>
                        </Grid>
                        {!props.showOrderDetails &&
                            <Grid item xs={2}>
                                {!props.showCounter ?
                                    (<Button id="id" className="item-elem" type='submit' variant='contained'
                                        onClick={() => { addToCart() }}> Add Item</Button>)
                                    : (<Button id="id" className="item-elem" color='error' variant='outlined'
                                        onClick={() => { deleteFromCart() }}> Remove</Button>)
                                }
                            </Grid>}
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    </>
    )
}

export default Item;