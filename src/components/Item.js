import { Button, Grid, Box } from "@mui/material";
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import { useDispatch } from "react-redux";
import { AddToCart, CartItemDecrement, DeleteFromCart, CartItemIncrement } from "../Store/ProductsSlice";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';

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
    const { img, name, specs, price, count} = props.data;
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
                            <h4 className="item-elem">Quantity: {count}</h4>
                        </Grid>
                        {!props.showOrderDetails &&
                            <Grid item xs={2}>
                                {!props.showCounter ?
                                    (<Button id="id" className="item-elem" type='submit' variant='contained'
                                        onClick={() => { addToCart() }}> Add Item</Button>)
                                    : (
                                    <> <Grid>
                                        <RemoveCircleOutlineOutlinedIcon 
                                        className="minus-icon"
                                        color="secondary"
                                         onClick={()=>{dispatch(CartItemDecrement(props.data))}}></RemoveCircleOutlineOutlinedIcon>
                                        {count}
                                        <AddCircleOutlineIcon
                                        color="secondary"
                                        className="add-icon" 
                                        onClick={()=>{dispatch(CartItemIncrement(props.data))}}></AddCircleOutlineIcon></Grid>
                                    <Button id="id" className="item-elem" color='error' variant='outlined'
                                        onClick={() => { deleteFromCart() }}> Remove</Button>
                                    </>)
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