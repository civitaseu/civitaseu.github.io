import { Box, Button, Container, Grid } from "@mui/material";
import AppDownloadButton, { Platform } from "components/app_download_button";
import DownloadButton from "components/download_button";
import ActionsHandler from "utilities/actions_handler";
import styles from 'utilities/global_styles.module.css'

const HeaderSection = () => {
    return <Grid container marginTop="55px">
        <Grid item xs={12} marginTop="-160px" display={{ xs: "flex", md: "none" }} justifyContent="flex-end">
            <img src="img/small_header_illustration.svg"
                style={{
                    overflow: "hidden",
                    marginLeft: "-20px",
                    marginRight: "-36px",
                    maxWidth: "80vw",
                    objectFit: "contain"
                }}
            />
        </Grid>

        <Grid item xs={12} md={7}>
            <Box textAlign={{ xs: "center", md: "start" }} className={styles.highlightedProminentTitle}>Open Community for
                every Student in Europe</Box>
        </Grid><Grid xs={0} md={5} />

        <Grid item xs={12} md={6} marginTop="50px" marginBottom={{ xs: "60px", md: "135px" }}>
            <Box className={styles.descriptionText}>Everyone matters! We are here to provide
                value to every user inside Civitas Europe and
                help them achieve and experinece the most
                out of their univeristy journey.</Box>

        </Grid>
        <Grid xs={0} md={6}>
            <Box display={{ xs: "none", md: "flex" }}>
                <img src="img/phone_header_icon.svg" style={{
                    marginLeft: "-20px", marginTop: "-30px", maxWidth: "50vw",
                    objectFit: "contain"
                }} />
            </Box>
        </Grid>

        <Grid container display={{ xs: "none", md: "flex" }} columnGap="10px" direction={{ xs: "column", md: "row" }} alignItems={{ xs: "center", md: "start" }} style={{ marginTop: "-100px" }}>
            <Grid item>
                <AppDownloadButton platform={Platform.iOS} />
            </Grid>
            <Grid item marginTop={{ xs: "10px", md: "0px" }}>
                <AppDownloadButton platform={Platform.Android} />
            </Grid>
        </Grid>

        <Grid item xs={12} display={{ xs: "block", md: "none" }} textAlign="center" marginBottom="60px">
            <DownloadButton />
        </Grid>
    </Grid>
};

export default HeaderSection;