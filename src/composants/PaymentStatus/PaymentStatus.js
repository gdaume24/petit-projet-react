import './PaymentStatus.css';
import useModalStore from '../../store/store';

function PaymentStatus() {

  const paymentStatus = useModalStore((state) => state.paymentStatus);

  return (
    <div>
    Statut : {paymentStatus ? 'Paiement accepté' : 'En attente de paiement'}
    </div>
  );
}

export default PaymentStatus;
