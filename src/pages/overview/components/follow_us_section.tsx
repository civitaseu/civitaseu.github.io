import { Box, Button, Container, Grid } from "@mui/material"
import FollowUsContainer from "components/follow_us_container"
import styles from 'utilities/global_styles.module.css'

const FollowUsSection = () => {
    return <Box><Grid container marginTop="90px" position="relative" display={{ xs: "none", md: "flex" }}
        style={{
            paddingLeft: "98px",
        }}>

        <Grid item md={5} direction="column" alignContent="center" zIndex="100">
            <Box className={styles.highlightedTitle}>
                Follow our social media profiles and stay updated for news and exciting updates.
            </Box>
        </Grid>
        <Grid item md={7} textAlign="end" zIndex="999">
            <FollowUsContainer
                children={
                    <Button
                        sx={{
                            backgroundColor: 'white', // Default background color
                            border: 'none',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: 'white', // No change on hover
                                boxShadow: 'none', // Remove shadow
                            },
                        }}
                    >
                        <img src="img/follow_us_illustration.svg"
                            style={{
                                maxWidth: "100%",
                                objectFit: "contain"
                            }}
                        />
                    </Button>
                } />
        </Grid>

    </Grid>
        <Grid container xs={12} direction="column" marginTop="155px" alignContent="center" display={{ xs: "flex", md: "none" }} textAlign="center">
            <Box className={styles.highlightedTitle}>Follow our social media profiles and stay updated for news and exciting updates.</Box>
            <Box textAlign="center">
                <FollowUsContainer
                    children={
                        <Button
                            sx={{
                                backgroundColor: 'white', // Default background color
                                border: 'none',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'white', // No change on hover
                                    boxShadow: 'none', // Remove shadow
                                },
                            }}
                        >
                            <img src="img/follow_us_illustration.svg"
                                style={{
                                    maxWidth: "60vw",
                                    objectFit: "contain"
                                }} />
                        </Button>
                    } />
            </Box>
        </Grid>

    </Box>

}

export default FollowUsSection