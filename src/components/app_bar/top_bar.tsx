import { Box, Button, Container, Stack } from "@mui/material"
import DownloadButton from "components/download_button";
import styles from 'utilities/global_styles.module.css'

const TopBar = () => {
    return (
        <Box maxWidth="lg" justifyContent={{ xs: 'start', sm: 'space-between', }} style={{ height: "72px", position: "relative", zIndex: 999 }} marginTop={{ xs: "60px", sm: "40px" }} sx={{ marginBottom: "20px", alignItems: "center", display: "flex" }}>
            <Stack direction="row" alignItems="start">
                <img src="img/app_logo.svg" />
                <Box display={{ xs: "none", sm: "block" }} className={styles.headerTitle} sx={{ marginLeft: 1 }}>Civitas Europe</Box>
                <Box display={{ xs: "block", sm: "none" }} className={styles.headerTitleMobile} sx={{ marginLeft: 1 }}>Civitas<br />Europe</Box>
            </Stack>
            <Box display={{ xs: "none", md: "block" }}>
                <DownloadButton />
            </Box>
        </Box>
    );
}

export default TopBar