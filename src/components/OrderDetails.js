import { Typography,Grid } from "@mui/material";
import { useSelector } from "react-redux";
import Item from "./Item";

const OrderDetails = () => {
    const { orderedItems, totalBill } = useSelector((state) => state.products);

    return (<>
        <Typography variant="h6" component="div">Order Details</Typography>
        <div className="item-container">
            {orderedItems.map((listItem) => (<Item key={listItem.id} data={listItem} showOrderDetails={true} />))}
            <Grid container justifyContent="flex-end" marginTop={2} padding={3}>Bill Paid: {totalBill}</Grid>
        </div>
    </>)
}

export default OrderDetails;