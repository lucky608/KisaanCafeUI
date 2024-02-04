import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import { SharedButton } from "../sharedcomponents/SharedButton";

const CustomerDetails = ({ isCheckOut, setIsCheckOut, totalAmountToPay }) => {
    const [open, setOpen] = useState(isCheckOut);
    const [fullName, setFullName] = useState('');
    const [fullAddress, setFullAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [amountPaid, setAmountPaid] = useState(totalAmountToPay);
    const [amountLeft, setAmountLeft] = useState(totalAmountToPay - amountPaid);
    const [paymentMode, setPaymentMode] = useState('');
    console.log(isCheckOut);

    const onPaymentModeChange = (event) => {
        setPaymentMode(event.target.value);
    };
    const onNameChange = (e) => {
        setFullName(e.target.value);
    }
    const onAddressChange = (e) => {
        setFullAddress(e.target.value);
    }
    const onPhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    }
    const onAmountPaidChange = (e) => {
        if (e.target.value <= totalAmountToPay) {
            setAmountPaid(e.target.value);
            setAmountLeft(totalAmountToPay - e.target.value)
        }
    }

    const handleClose = () => {
        setOpen(false);
        setIsCheckOut(false)
    }
    const onSaveClick = () => {
        
    }

    return (
        <React.Fragment>
            <Dialog open={open} handleClose={handleClose}>
                <DialogTitle>Customer Details</DialogTitle>
                <DialogContent sx={{ width: "90%" }}>
                    <DialogContentText>
                        <Grid container>
                            <Grid>
                                <TextField
                                    value={fullName}
                                    sx={{ width: '29ch', m: 0.5 }}
                                    id="standard-basic"
                                    label="Full Name"
                                    variant="standard"
                                    onChange={onNameChange}
                                />
                                <TextField
                                    value={phoneNumber}
                                    sx={{ width: '29ch', m: 0.5 }}
                                    id="standard-basic"
                                    label="Phone Number"
                                    variant="standard"
                                    onChange={onPhoneNumberChange}
                                />

                            </Grid>
                            <Grid xs={12}>
                                <FormControl fullWidth sx={{ m: 0.5 }} variant="standard">
                                    <InputLabel htmlFor="standard-adornment-amount">Full Address</InputLabel>
                                    <Input
                                        id="standard-adornment-amount"
                                        value={fullAddress}
                                        label="Full Address"
                                        onChange={onAddressChange}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid xs={12}>
                                <TextField
                                    value={amountPaid}
                                    sx={{ m: 0.5, width: '29ch' }}
                                    id="standard-basic"
                                    label="Total Paid Amount"
                                    variant="standard"
                                    onChange={onAmountPaidChange}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                                    }}
                                />
                                <TextField
                                    value={amountLeft}
                                    sx={{ m: 0.5, width: '29ch' }}
                                    id="standard-basic"
                                    label="Amount Left"
                                    variant="standard"
                                    disabled
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                                    }}
                                />

                            </Grid>
                            <Grid>
                                <FormControl variant="standard" sx={{ m: 0.5, width: "29ch" }}>
                                    <InputLabel id="demo-simple-select-standard-label">Payment Mode</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={paymentMode}
                                        onChange={onPaymentModeChange}
                                        label="Age"
                                    >
                                        <MenuItem value="UPI">UPI</MenuItem>
                                        <MenuItem value="CASH">CASH</MenuItem>
                                        <MenuItem value="CHECK">CHECK</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Back</Button>
                    <Button sx={{ backgroundColor:"#4EE337"}} onClick={onSaveClick}>Complete</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};

export default CustomerDetails;