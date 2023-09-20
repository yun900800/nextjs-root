import React from 'react';
import { ModalWrapper, Reoverlay } from 'reoverlay';
import modalStyles from '../../styles/modal.module.css';

export const ConfirmModal = ({ confirmText, onConfirm }) => {

  const closeModal = () => {
    Reoverlay.hideModal();
  }
  return (
    <ModalWrapper>
      <div className={`${modalStyles['modal-container']}`}>
        <span>{confirmText}</span>
        <button onClick={onConfirm}>Yes</button>
        <button onClick={closeModal}>No</button>
      </div>
    </ModalWrapper>
  )
}