import { Typography,Grid } from "@mui/material";
import { useSelector } from "react-redux";
import Item from "./Item";
import CheckIcon from '@mui/icons-material/Check';

const OrderDetails = () => {
    const { orderedItems, totalBill } = useSelector((state) => state.products);

    return (<>
        <Typography variant="h6" component="div">Order Details</Typography>
        <div className="item-container">
            {orderedItems.map((listItem) => (<Item key={listItem.id} data={listItem} showOrderDetails={true} />))}
            <Grid container justifyContent="flex-end" marginTop={2} padding={3}>
                <h4>Total Bill : {totalBill}</h4></Grid>
                <Grid container justifyContent="flex-end" >
                    <h4 margin={0} className="status-space">Payment Status: Paid
                    <CheckIcon color="success"></CheckIcon>
                    </h4></Grid>
        </div>
    </>)
}

export default OrderDetails;