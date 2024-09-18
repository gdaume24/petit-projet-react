import { useEffect } from "react";
import useModalStore from "../../store/store";
import './Modal.css';

function Modal({open: openModal}) {
    const { modal, setModal } = useModalStore();

    // useEffect pour écouter les changements de l'état modal
    useEffect(() => {
        if (modal) {
            console.log('La modal est ouverte');
        }
    }, [modal]);

    if (!modal) return null;

    return (
        <>
            {/* Overlay */}
            <div class="modal"> 
                {/* Contenu de la modal */}
                <div class="modalContent">
                        <h2>Confirmer votre paiement</h2>
                        <button onClick={() => setModal(false)}>
                            Confirmer paiement
                        </button>
                </div>
            </div>
        </>
    )
}

export default Modal