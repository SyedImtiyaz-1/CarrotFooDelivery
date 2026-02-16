import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { CustomButtonCancel, CustomButtonSuccess } from '@/styled-components/CustomButtons.style';

const PaymentFailedModal = ({ open, handleClose, handleSwitchToCOD, handleCancelOrder, cancelOrderLoading, updatePaymentLoading }) => {
    const { t } = useTranslation();

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {t('Payment Cancelled')}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {t('You cancelled the payment. Do you want to switch to Cash on Delivery or Cancel the order?')}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Stack direction="row" spacing={2} justifyContent="center" width="100%" p={1}>
                    <CustomButtonCancel
                        onClick={handleCancelOrder}
                        variant="contained"
                        loading={cancelOrderLoading}
                    >
                        {t('Cancel Order')}
                    </CustomButtonCancel>
                    <CustomButtonSuccess
                        onClick={handleSwitchToCOD}
                        variant="contained"
                        autoFocus
                        loading={updatePaymentLoading}
                    >
                        {t('Switch to COD')}
                    </CustomButtonSuccess>
                </Stack>
            </DialogActions>
        </Dialog>
    );
};

export default PaymentFailedModal;


