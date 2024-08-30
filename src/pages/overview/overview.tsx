import { Box, Container, Grid } from "@mui/material"
import TopBar from "components/app_bar/top_bar";
import { SnackbarProvider } from 'notistack'
import HeaderSection from "./components/header_section";
import IntroSection from "./components/intro_section";
import ResearchSection from "./components/research_section";
import RewardsSection from "./components/rewards_section";
import JoinSection from "./components/join_section";
import FollowUsSection from "./components/follow_us_section";
import ContactUsSection from "./components/contact_us_section";
import BottomBar from "components/app_bar/bottom_bar";
import { useEffect, useState } from "react";


const Overview = () => {
  const [topPosition, setTopPosition] = useState<string>('0px');

  useEffect(() => {
    const handleResize = () => {
        const width = window.innerWidth;

        // Define breakpoints and top positions
        if (width <= 1500) {
            setTopPosition('-100px'); // For very small screens
        } else {
            setTopPosition('0px'); // Default position for larger screens
        }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check on initial load

    return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
    <Container
      maxWidth="lg">
      <Box
        display={{ xs: "none", md: "block" }}
        sx={{
          position: "absolute",
          top: 0,
          aspectRatio: 1,
          right: 0
        }}>
        <img src="img/top_right_anchor.svg" style={{
          maxWidth: "50vw",
          objectFit: "contain"
        }} />
      </Box>
      <Box
            display={{ xs: "none", lg: "block" }} // Adjust as needed
            sx={{
                position: "absolute",
                top: topPosition, // Use dynamic value based on screen width
                left: 0,
                transition: "top 0.3s ease-in-out", // Smooth transition
                maxWidth: '80vh', // Ensure it spans full width
                zIndex: 10, // Adjust if needed
            }}
        >
            <img
                src="img/top_left_anchor.svg"
                style={{
                    maxWidth: "100vw",
                    objectFit: "contain",
                    width: "100%", // Ensure image fits within the box
                }}
                alt="Anchor" // Always include alt text for accessibility
            />
        </Box>
      <TopBar />
      <Grid container position="relative" zIndex={10}
        padding={{ xs: "10px", md: "0px" }}>

        <HeaderSection />
        <IntroSection />
        <ResearchSection />
        <RewardsSection />
        <JoinSection />
        <FollowUsSection />
        <ContactUsSection />
 
      </Grid>
      <BottomBar/>
    </Container>
  )
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider style={{
      overflow: "none"
    }} maxSnack={3}>
      <Overview />
    </SnackbarProvider>
  );
}
