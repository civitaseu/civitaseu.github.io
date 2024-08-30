import { Box, Grid } from "@mui/material"
import styles from 'utilities/global_styles.module.css'

const IntroSection = () => {
    return <Grid container marginTop={{xs: "100px", sm: "135px"}}>
        <Grid item xs={12} marginBottom={{xs: "50px", md: "0px"}}>
            <Box textAlign={{ xs: "center" }} className={styles.highlightedSecondaryTitle}>How the app works</Box>
        </Grid>

        <Grid item xs={12} md={5} alignContent="center" display={{xs: "none", md: "flex"}}>
            <img src="img/feedback_illustration.svg" 
            style={{
                maxWidth: "40vw",
                objectFit: "contain"
            }}
            />
        </Grid>
        <Grid item xs={12} md={7} direction="column" alignContent="center">
            <Box className={styles.primarySubtitle} marginTop={{xs: "30px", md: "0px"}} textAlign={{xs: "center", md: "start"}}>Feedback for university</Box>
            <Box className={styles.highlightedProminentTitle} marginTop="30px" marginBottom="26px" textAlign={{xs: "center", md: "start"}}>Express your opinion</Box>
            <Box className={styles.descriptionText}>
                Your feedback is essential for us! Our mission is to support students, and the first step is to equip them with the information they need. The best way to do this is by hearing opinions from current students at different universities. By sharing  your thoughts, you are enhancing the experience for the future students.
            </Box>
        </Grid>

        <Grid item xs={12} textAlign="center" display={{xs: "block", md: "none"}}>
            <img src="img/feedback_illustration.svg" 
              style={{
                maxWidth: "70vw",
                objectFit: "contain"
            }}
            />
        </Grid>

    </Grid>
}

export default IntroSection