import { Box, Button, Container, Stack } from "@mui/material"
import styles from 'utilities/global_styles.module.css'

const BottomBar = () => {
    return (
        <Box maxWidth="lg" justifyContent="center"style={{ height: "72px", zIndex: 999 }} marginTop={{xs: "20px", md: "70px"}} sx={{marginBottom: "20px", alignItems: "center", display: "flex" }}>
            <Box className={styles.footerPrimary}>Copywright 2024</Box>
            <Box className={styles.footerSecondary} marginLeft="6px">civitaseu.com</Box>
        </Box>
    );
}

export default BottomBar