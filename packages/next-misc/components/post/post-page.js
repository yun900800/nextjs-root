import React from 'react';
import { Reoverlay } from 'reoverlay';

import { ConfirmModal } from '../modal/confirm-modal';

export const PostPage = () => {
  
  const deletePost = () => {
    Reoverlay.showModal(ConfirmModal, {
      confirmText: "Are you sure you want to delete this post",
      onConfirm: () => {
        axios.delete()
      }
    })
  }

  return (
    <div>
      <p>This is your post page</p>
      <button onClick={deletePost}>Delete this post</button>
    </div>
  )
}