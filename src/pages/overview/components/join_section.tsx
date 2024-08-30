import { Box, Button, Container, Grid } from "@mui/material"
import AppDownloadButton, { Platform } from "components/app_download_button"
import ActionsHandler from "utilities/actions_handler"
import styles from 'utilities/global_styles.module.css'

const JoinSection = () => {
    return <Box><Grid container marginTop="155px" position="relative" display={{ xs: "none", md: "flex" }}
        style={{
            background: "#FAB8C5",
            borderRadius: "50px",
            paddingLeft: "78px",
            paddingTop: "30px",
            paddingBottom: "30px",
            paddingRight: "44px"
        }}>

        <Grid item md={6} direction="column" alignContent="center" zIndex="100"
            style={{
                paddingTop: "50px",
                paddingBottom: "50px",
                paddingLeft: "20px",
                paddingRight: "10px"
            }}
        >
            <Box className={styles.secondaryTitle} marginBottom="26px" textAlign={{ xs: "center", md: "start" }}>You are one step away from joining the Civitas community.</Box>
            <Box marginTop="40px">
                <AppDownloadButton platform={Platform.iOS} />
            </Box>
            <Box marginTop="18px">
                <AppDownloadButton platform={Platform.Android} />
            </Box>
        </Grid>

        <Box
            sx={{
                position: "absolute",
                bottom: "-3px",
                right: "0px"
            }}>
            <img src="img/join_illustration.svg"
                style={{
                    maxWidth: "70vw",
                    objectFit: "contain"
                }}
            />
        </Box>


    </Grid>
        <Grid container xs={12} direction="column" marginTop="120px" alignContent="center" display={{ xs: "flex", md: "none" }} textAlign="center"
            style={{
                padding: "30px",
                background: "linear-gradient(to right, #EDEEF6, #FBFBFD)",
                borderRadius: "50px",

            }}
        >
            <Box className={styles.highlightedProminentTitle} marginTop="30px" marginBottom="26px" textAlign={{ xs: "center" }}>You are one step away from joining the Civitas community.</Box>
            <Grid container marginTop="20px" marginBottom="30px">
                <Grid item xs={12} sm={6} textAlign={{ xs: "center", sm: "end" }} paddingRight={{ xs: "0px", sm: "15px" }}>
                    <AppDownloadButton platform={Platform.iOS} />
                </Grid>
                <Grid item xs={12} sm={6} textAlign={{ xs: "center", sm: "start" }} paddingLeft={{ xs: "0px", sm: "15px" }} marginTop={{ xs: "18px", sm: "0px" }}>
                    <AppDownloadButton platform={Platform.Android} />
                </Grid>
            </Grid>
        </Grid>

    </Box>

}

export default JoinSection