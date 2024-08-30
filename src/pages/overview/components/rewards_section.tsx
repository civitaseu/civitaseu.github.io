import { Box, Grid } from "@mui/material"
import styles from 'utilities/global_styles.module.css'

const RewardsSection = () => {
    return <Box>
        <Grid container marginTop="165px" display={{ xs: "none", md: "flex" }}>
            <Grid item md={5} alignContent="center">
                <img src="img/rewards_illustration.svg"
                    style={{
                        maxWidth: "85%",
                        objectFit: "contain"
                    }}
                />
            </Grid>
            <Grid item md={7} alignContent="center" marginLeft="-30px">
                <Box className={styles.primarySubtitle}>Civitas is Fun</Box>
                <Box className={styles.highlightedProminentTitle} marginTop="30px" marginBottom="26px">Get a chance to
                    earn rewards!</Box>
                <Box className={styles.descriptionText}>
                    While providing these opportunities, Civitas Europe offers even more. By collecting our special coins, you can earn rewards, special discounts, and additional perks. Our mission started with the goal of supporting the students, and we are committed to provide tangible benefits to enhance your experience. Your journey is our priority and we are here to support you every step of the way.
                </Box>
            </Grid>
        </Grid>

        <Grid container xs={12} direction="column" marginTop="120px" alignContent="center" display={{ xs: "flex", md: "none" }} >
            <Box className={styles.primarySubtitle} marginTop="30px" textAlign="center">Civitas is Fun</Box>
            <Box className={styles.highlightedProminentTitle} marginTop="30px" marginBottom="26px" textAlign={{ xs: "center" }}>Get a chance to
                earn rewards!</Box>
            <Box className={styles.descriptionText}>
                While providing these opportunities, Civitas Europe offers even more. By collecting our special coins, you can earn rewards, special discounts, and additional perks. Our mission started with the goal of supporting the students, and we are committed to provide tangible benefits to enhance your experience. Your journey is our priority and we are here to support you every step of the way.            </Box>
            <Box marginTop="30px" textAlign="center">
                <img src="img/rewards_illustration.svg"
                    style={{
                        maxWidth: "60vw",
                        objectFit: "contain"
                    }} />
            </Box>
        </Grid>
    </Box>
}

export default RewardsSection