import { useRef, useCallback } from 'react';

export const useModal = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openModal = useCallback(() => dialogRef.current?.showModal?.(), []);
  const closeModal = useCallback(() => dialogRef.current?.close?.(), []);
  return { closeModal, dialogRef, openModal };
};
