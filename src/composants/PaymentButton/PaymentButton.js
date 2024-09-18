import { useState } from 'react';
import './PaymentButton.css';
import useModalStore from '../../store/store';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';

function PaymentButton({ width = '200px', height = '40px', fontSize = '14px' }) {

    const openModal = useModalStore(state => state.openModal);
    const setOpenModal = useModalStore(state => state.setOpenModal);
    const setpaymentStatus = useModalStore(state => state.setpaymentStatus);

    const handlePayment = () => {
        setOpenModal(true);
    };

    const handleConfirmClick = () => {
        setOpenModal(false);  // Fermer la modal quand le paiement est confirmé
        setpaymentStatus();  // Mettre à jour le statut du paiement
    };

    return (
        <div>
            <button class="paymentButton" style={{ 
                width: width,
                height: height,
                fontSize: fontSize
            }}
            onClick={handlePayment} 
            >
            Paiement
            </button>
            <Modal 
                open={openModal}>
                    <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                  <h2>Confirmer votre paiement</h2>
                    <p>Voulez-vous vraiment confirmer le paiement ?</p>
                    <button onClick={handleConfirmClick}>Confirmer paiement</button>   
                </Box>
                </Modal>
        </div>
    )
}

export default PaymentButton