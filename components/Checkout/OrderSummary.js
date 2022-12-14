import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useRouter } from "next/router";
import { Box1, ButtonMaster, Heading3 } from "../Styles/reusable";

export default function OrderSummary({data}) {
  const router = useRouter();
  const price = data?.reduce((prev,cur)=> prev+ cur.price, 0);
  const shipping = (price/100)*10;
  const total = price+shipping;

  const handleTotalAmount =()=>{
    if(total){
      router.push('/checkout')
    }
  }
  return (
    <Box1>
      <Heading3 border variant="h3">
        Order summary
      </Heading3>

      <Stack direction="row" justifyContent="space-between">
        <Typography variant="body2">Subtotal</Typography>
        <Typography variant="body1">${parseFloat(price).toFixed(2)}</Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="body2">Shipping 10%</Typography>
        <Heading3>${parseFloat(shipping).toFixed(2)}</Heading3>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="body2">Total</Typography>
        <Typography variant="body1"><Heading3>${parseFloat(total).toFixed(2)}</Heading3></Typography>
      </Stack>
      <ButtonMaster fullWidth onClick={handleTotalAmount}>
        Complete checkout
      </ButtonMaster>
    </Box1>
  );
}
