import { Box, Container, Grid } from "@mui/material"
import styles from 'utilities/global_styles.module.css'

const ResearchSection = () => {
    return <Box><Grid container marginTop="135px" position="relative" display={{ xs: "none", md: "flex" }}
        style={{
            background: "linear-gradient(to right, #EDEEF6, #FBFBFD)",
            borderRadius: "50px",
            paddingLeft: "78px",
            paddingTop: "30px",
            paddingBottom: "30px",
            paddingRight: "44px"
        }}>

        <Grid item md={7} direction="column" alignContent="center" zIndex="100">
            <Box className={styles.highlightedProminentTitle} marginBottom="26px" textAlign={{ xs: "center", md: "start" }}>Make your Research
                and Connect</Box>
            <Box className={styles.descriptionText}>
                Your feedback is essential for us! Our mission is to support students, and the first step is to equip them with the information they need. The best way to do this is by hearing opinions from current students at different universities. By sharing  your thoughts, you are enhancing the experience for the future students.
            </Box>
        </Grid>

        <Grid item md={5} textAlign="end" zIndex="999">
            <img src="img/research_illustration.svg"
                style={{
                    maxWidth: "40vw",
                    objectFit: "contain"
                }}
            />
        </Grid>


        <Box
            sx={{
                position: "absolute",
                bottom: "-50px",
                left: "30vh"
            }}>
            <img src="img/mid_size_orange_ball.svg"
                style={{
                    maxWidth: "40vw",
                    objectFit: "contain"
                }}
            />
        </Box>
        <Box
            sx={{
                position: "absolute",
                top: "50px",
                right: "35vh"
            }}>
            <img src="img/small_size_orange_ball.svg"
                style={{
                    maxWidth: "40vw",
                    objectFit: "contain"
                }}
            />
        </Box>
        <Box
            sx={{
                position: "absolute",
                top: "-150px",
                right: "10vh"
            }}>
            <img src="img/mid_size_yellow_ball.svg"
                style={{
                    maxWidth: "40vw",
                    objectFit: "contain"
                }}
            />
        </Box>
    </Grid>
        <Grid container xs={12} direction="column" marginTop="50px" alignContent="center" display={{ xs: "flex", md: "none" }} >
            <Box className={styles.highlightedProminentTitle} marginTop="30px" marginBottom="26px" textAlign={{ xs: "center" }}>Make your Research
                and Connect</Box>
            <Box className={styles.descriptionText}>
                Inform yourself about your future university destination by exploring the opinions of current students, which are studying there. Connect with these students swiftly and at no cost to gain insights and first-hand experiences about your desired destination. Make informed decisions and prepare yourself better for your academy journey by learning from those, who are already living it.
            </Box>
            <Box marginTop="60px" textAlign="center">
                <img src="img/research_illustration.svg"
                    style={{
                        maxWidth: "60vw",
                        objectFit: "contain"
                    }} />
            </Box>
        </Grid>

    </Box>

}

export default ResearchSection