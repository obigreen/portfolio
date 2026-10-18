import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slices/modalSlice'; // Импортируем редьюсер модального окна

export const store = configureStore({
    reducer: {
        modal: modalReducer, // Подключаем редьюсер
    },
});

// Типы для использования в приложении
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
