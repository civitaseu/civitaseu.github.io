import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import ActionsHandler from 'utilities/actions_handler';

export type FollowUsContainerProps = {
    children: any
}

const FollowUsContainer: React.FC<FollowUsContainerProps> = (props) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const facbookShare = () => {
        ActionsHandler.openFacebookPage();
        handleClose();
    };

    const instagramShare = () => {
        ActionsHandler.openInstagramPage();
        handleClose();
    };

    const tikTokShare = () => {
        ActionsHandler.openTikTokPage();
        handleClose();
    };

    return (
        <div>
            <Box onClick={handleClickOpen}>{props.children}</Box>
            <Dialog
                disableScrollLock
                open={open}
                onClose={handleClose}
                PaperProps={{
                    sx: {
                        backgroundColor: '#854AD7',
                        borderRadius: "20px",
                        color: 'white',
                        padding: '20px',
                        maxWidth: '300px',
                        width: '100%',
                        boxSizing: 'border-box',
                        textAlign: 'center', // Align text to center
                    }
                }}
            >
                <DialogTitle sx={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'bold' }}>Follow us on</DialogTitle>
                <DialogActions sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                    <List sx={{ width: '100%' }}>
                        <ListItem button onClick={facbookShare} sx={{ justifyContent: 'center' }}>
                            <ListItemIcon sx={{ width: "30px", height: "30px", justifyContent: 'center' }}><img src='img/facebook_icon.svg' /></ListItemIcon>
                            <ListItemText primary="Facebook" sx={{ color: 'white', textAlign: 'center' }} />
                        </ListItem>
                        <ListItem button onClick={instagramShare} sx={{ justifyContent: 'center' }}>
                            <ListItemIcon sx={{ width: "30px", height: "30px", justifyContent: 'center' }}><img src='img/instagram_icon.svg' /></ListItemIcon>
                            <ListItemText primary="Instagram" sx={{ color: 'white', textAlign: 'center' }} />
                        </ListItem>
                        <ListItem button onClick={tikTokShare} sx={{ justifyContent: 'center' }}>
                            <ListItemIcon sx={{ width: "30px", height: "30px", justifyContent: 'center' }}><img src='img/tiktok_icon.svg' /></ListItemIcon>
                            <ListItemText primary="TikTok" sx={{ color: 'white', textAlign: 'center' }} />
                        </ListItem>
                    </List>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default FollowUsContainer;