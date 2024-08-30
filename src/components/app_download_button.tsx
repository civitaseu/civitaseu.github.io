import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, ListItem, Typography } from '@mui/material';

export enum Platform {
    iOS = 'iOS',
    Android = 'Android',
}

interface AppDownloadButtonProps {
    platform: Platform;
}

const AppDownloadButton: React.FC<AppDownloadButtonProps> = ({ platform }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getImageSrc = () => {
        return platform === Platform.Android ? 'img/googleplay.svg' : 'img/appstore.svg';
    };

    return (
        <>
            <Button
                sx={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    '&:hover': {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                    },
                }}
                onClick={handleClickOpen}
            >
                <img src={getImageSrc()} alt={`${platform} store button`} />
            </Button>

            <Dialog
                disableScrollLock
                open={open}
                onClose={handleClose}
                sx={{
                    '& .MuiDialog-paper': {
                        borderRadius: "20px",
                        padding: '30px 30px 10px 30px', // Add padding to the dialog
                        textAlign: 'center', // Center-align the title and content
                    },
                }}
            >
                <DialogTitle sx={{ textAlign: 'center', paddingBottom: '10px', fontWeight: 'bold'}}>
                    {"Coming Soon"}
                </DialogTitle>
                <DialogContent>
                    <Typography variant="body1">Stay tuned for updates</Typography>
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'center' }}>
                    <ListItem
                        button
                        sx={{
                            padding: '10px 10px', // Add padding to the list item
                            justifyContent: 'center', // Center-align the list item
                            textAlign: 'center',
                            width: '100%', // Ensure it takes up the full width
                            borderRadius: '8px', // Add some border-radius to make it look like a button
                            backgroundColor: '#f0f0f0', // Optional: Change background color for better visibility
                            '&:hover': {
                                backgroundColor: '#e0e0e0', // Slightly darker on hover
                            },
                        }}
                        onClick={handleClose}
                    >
                        <Typography variant="button" sx={{ fontWeight: 600 }}>OK</Typography>
                    </ListItem>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default AppDownloadButton;