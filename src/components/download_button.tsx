import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogTitle, Box } from '@mui/material';
import styles from 'utilities/global_styles.module.css';
import AppDownloadButton, { Platform } from './app_download_button';

const DownloadButton = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                variant="contained"
                className={styles.actionButtonPrimary}
                onClick={handleClickOpen}
            >
                Download App
            </Button>
            <Dialog
                disableScrollLock
                open={open}
                onClose={handleClose}
                PaperProps={{
                    sx: {
                        backgroundColor: 'white', // White background
                        borderRadius: "20px", // Rounds all corners
                        color: 'black', // Dark text
                        padding: '20px',
                        maxWidth: '400px',
                        width: '100%',
                        boxSizing: 'border-box',
                        display: 'flex', // Use flexbox for alignment
                        justifyContent: 'center', // Center items vertically
                        alignItems: 'center', // Center items horizontally
                        overflow: 'hidden', // Removes the bottom scroll indicator
                    }
                }}
            >
                <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold' }}>Select a platform</DialogTitle>
                <DialogActions sx={{ flexDirection: 'column', gap: '10px', width: '100%' }}>
                    <AppDownloadButton platform={Platform.iOS} />
                    <AppDownloadButton platform={Platform.Android} />
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DownloadButton;