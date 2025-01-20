import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalContent {
    desktopSrc: string;
    mobileSrc: string;
    src: string;
    technologies: string;
    title: string;
    text: string;
}

interface ModalState {
    isOpen: boolean;
    content: ModalContent | null;
}

const initialState: ModalState = {
    isOpen: false,
    content: null,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<ModalContent>) => {
            state.isOpen = true;
            state.content = action.payload;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.content = null;
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;

