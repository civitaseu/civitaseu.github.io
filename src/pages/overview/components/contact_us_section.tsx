import { Box, Button, Container, FormControlLabel, Grid, TextField } from "@mui/material"
import { FormEventHandler, useEffect, useState } from "react";
import styles from 'utilities/global_styles.module.css'
import { useSnackbar, VariantType } from 'notistack';
import emailjs from "emailjs-com";

interface ContactFormValues {
    name: string;
    email: string;
    message: string;
}

interface SubmitFormInterface {
    handleSubmit: FormEventHandler;
    handleChange: FormEventHandler;
    values: ContactFormValues;
    errors: ContactFormValues;
}

const textFieldStyles = () => {
    return {
        backgroundColor: "white",
        "& .MuiOutlinedInput-root": {
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#D4D4D4",
                borderWidth: "1px",
            },
            "&.Mui-focused": {
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#6950F1",
                    borderWidth: "2px",
                },
            },
            "&:hover:not(.Mui-focused)": {
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#A3A3A3",
                },
            },
        },
        "& .MuiInputLabel-outlined": {
            color: "#9D9D9D",
            "&.Mui-focused": {
                color: "#6950F1",
                fontWeight: 600,
            },
        },
    };
}

const SubmitForm: React.FC<SubmitFormInterface> = (props) => {
    return <Grid item xs={12} md={6} direction="column" zIndex="100">
        <Box
            component="form"
            onSubmit={props.handleSubmit}
            sx={{
                maxWidth: '100%',
                display: 'block',
                padding: '20px',
            }}
        >
            <TextField sx={{ marginBottom: "16px", ...textFieldStyles() }}
                label="Name"
                name="name"
                value={props.values.name}
                onChange={props.handleChange}
                error={!!props.errors.name}
                helperText={props.errors.name}
                fullWidth
                required
            />
            <TextField sx={{
                marginBottom: "16px", ...textFieldStyles()
            }}
                label="Email"
                name="email"
                type="email"
                value={props.values.email}
                onChange={props.handleChange}
                error={!!props.errors.email}
                helperText={props.errors.email}
                fullWidth
                required
            />
            <TextField sx={{
                marginBottom: "20px", ...textFieldStyles()
            }}
                label="Message"
                name="message"
                value={props.values.message}
                onChange={props.handleChange}
                error={!!props.errors.message}
                helperText={props.errors.message}
                fullWidth
                required
                multiline
                rows={5}
            />
            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center', // 
            }}>
                <Button className={styles.secondaryButtonPrimary} fullWidth type="submit" variant="contained" color="primary">
                    Send the message
                </Button>
            </Box>
        </Box>
    </Grid>
}

const ContactUsSection = () => {
    useEffect(() => {
        function hideError(e: { message: string; }) {
            if (e.message === 'ResizeObserver loop completed with undelivered notifications.') {
                const resizeObserverErrDiv = document.getElementById(
                    'webpack-dev-server-client-overlay-div'
                );
                const resizeObserverErr = document.getElementById(
                    'webpack-dev-server-client-overlay'
                );
                if (resizeObserverErr) {
                    resizeObserverErr.setAttribute('style', 'display: none');
                }
                if (resizeObserverErrDiv) {
                    resizeObserverErrDiv.setAttribute('style', 'display: none');
                }
            }
        }

        window.addEventListener('error', hideError)
        return () => {
            window.addEventListener('error', hideError)
        }
    }, [])

    const { enqueueSnackbar } = useSnackbar();

    const showSnackbar = (message: string, variant: VariantType = "default") => {
        enqueueSnackbar(message,
            {
                variant: variant,
                preventDuplicate: true,
            });
    };

    const initialFormValues: ContactFormValues = {
        name: '',
        email: '',
        message: '',
    };

    const [values, setValues] = useState<ContactFormValues>(initialFormValues);

    const [errors, setErrors] = useState<ContactFormValues>({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const validate = (): boolean => {
        let tempErrors = { ...errors };
        tempErrors.name = values.name ? '' : 'Name is required';
        tempErrors.email = /\S+@\S+\.\S+/.test(values.email) ? '' : 'Email is not valid';
        tempErrors.message = values.message ? '' : 'Message is required';
        setErrors(tempErrors);
        return Object.values(tempErrors).every((x) => x === '');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form is valid, submitting...', values);

            emailjs.send(
                'service_1c0r1zp',       // Service ID
                'template_4f2oclr',      // Template ID
                {
                    user_name: values.name,
                    user_email: values.email,
                    message: values.message,
                },
                '-ZaQtGwuuC28t9gMi'           // Public key (User ID)
            )
            .then((result) => {
                console.log(result.text);
                showSnackbar(`Inquiry successfully sent`, "success")
            }, (error) => {
                console.log(error.text);
                showSnackbar(`Somethinf went wrong, please try again later`, "error")
            });

            setValues(initialFormValues);
        } else {
            console.log('Form has errors');
        }
    };

    return <Box display={"flex"} flexDirection={"column"} flexGrow={"1"} marginTop="30px"

        paddingRight={{ xs: "20px", md: "78px" }}
        paddingLeft={{ xs: "20px", md: "0px" }}
        sx={{
            // background: "linear-gradient(to right, #DEDBF3, #FAF9FD)",
            paddingTop: "50px",
            borderRadius: "50px",
            paddingBottom: "50px",
        }}>
        <Grid paddingLeft={{ xs: "0px", md: "98px" }} textAlign={{ xs: "center", md: "start" }}>
            <Box className={styles.primarySubtitle}>Contact us</Box>
            <Box className={styles.highlightedProminentTitle}>Get in Touch</Box>
        </Grid>


        <Grid container marginTop="40px" position="relative" display={{ xs: "none", md: "flex" }} alignItems="center"
            style={{
                paddingLeft: "98px",
            }}>

            <Grid item md={6} textAlign="end">
                <img src="img/contact_us_illustration.svg"
                    style={{
                        maxWidth: "100%",
                        objectFit: "contain"
                    }}
                />
            </Grid>
            <SubmitForm handleChange={handleChange} handleSubmit={handleSubmit} values={values} errors={errors} />
        </Grid>

        <Grid container marginTop="20px" alignContent="center" display={{ xs: "block", md: "none" }}>
            <SubmitForm handleChange={handleChange} handleSubmit={handleSubmit} values={values} errors={errors} />
        </Grid>

    </Box>

}

export default ContactUsSection