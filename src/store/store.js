import { create } from 'zustand';

const useModalStore = create((set) => ({
    openModal: false,  // État de la modal (ouverte ou fermée)
    setOpenModal: (value) => set({ openModal: value }),  // Fonction pour changer l'état de la modal
    paymentStatus: false,
    setpaymentStatus: () => set((state) => ({ paymentStatus: !state.paymentStatus })),
}));

export default useModalStore;
