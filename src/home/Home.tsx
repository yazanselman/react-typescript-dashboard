import { Box, Container, Grid } from "@mui/material";
import { FC } from "react";
import SaaSCard from "./Card";
import BucketIcon from "./icons/BucketIcon";
import EarningIcon from "./icons/EarningIcon";
import WindowsLogoIcon from "./icons/WindowsLogoIcon";
import PeopleIcon from "./icons/PeopleIcon";
import RecentOrders from "./components/RecentOrders";
import TopSelling from "./components/TopSelling";
import useTitle from "./hooks/useTitle";
import { createTheme } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';


const Home: FC = () => {
  // change navbar title
  useTitle("Saas");


  const theme = createTheme({
    palette: {
      primary: blue,
    },
  });

  const cardList = [
    {
      price: 574,
      Icon: BucketIcon,
      title: "All Spending",
      color: theme.palette.info.light,
    },
    {
      price: 521,
      title: "Earnings",
      Icon: EarningIcon,
      color: theme.palette.secondary.light,
    },
    {
      price: 684,
      Icon: WindowsLogoIcon,
      title: "Weekly revenue",
      color: theme.palette.error.light,
    },
    {
      price: 321,
      Icon: PeopleIcon,
      title: "New Clients",
      color: theme.palette.warning.light,
    },
  ];

  return (
    <Container>
    <Box pt={2} pb={4}>
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        {cardList.map((card, index) => (
          <Grid item lg={3} xs={6} key={index}>
            <SaaSCard card={card} />
          </Grid>
        ))}
      </Grid>
      <br/>
      <br/>
      <br/>
      <Grid container spacing={4} pt={4}>
        <Grid item lg={8} md={7} xs={12}>
          <RecentOrders />
        </Grid>
        <Grid item lg={4} md={5} xs={12}>
          <TopSelling />
        </Grid>
      </Grid>
    </Box>
    </Container>

  );
};

export default Home;
