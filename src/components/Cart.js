import { Button, Typography, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import { CartBill, ConfirmOrder } from '../Store/ProductsSlice';
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cart, totalBill } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleCheckout = () => {
        dispatch(CartBill());
        if (window.confirm("Sure to pay total bill" + totalBill + "?")) {
            dispatch(ConfirmOrder());
            navigate("/orderDetails");
        };
    }
    
    return (
        <div>
            <Typography variant="h6" component="div">Cart Details</Typography>
            {cart.length < 1 ? (<Typography variant="h6" component="div">Oops! Cart is empty</Typography>) :
                (
                    <div className="item-container">
                        {cart.map((cartItem) => (<Item key={cartItem.id} data={cartItem} showCounter={true} />))}
                        <Grid container justifyContent="flex-end" marginTop={2} padding={3}>
                            <Button color="success" variant="contained" onClick={() => { handleCheckout() }}>Checkout</Button>
                        </Grid>
                    </div>
                )}
        </div>
    )
}

export default Cart;