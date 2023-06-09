import { useEffect } from 'react';
import Button from '../Button/Button';

import './Modal.css';

const Modal = ({ id, styleName, onClose, deleteTask, description, favoritesTask, updateTaskDescription, children }: any) => {
  const handleDescriptionChange = (e: any) => {
    updateTaskDescription(id, e.target.value);
  };

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={'modal-body ' + styleName}>
          <div className="modal-task">{children}</div>
          <span className="task-separator"></span>
          <textarea className="modal-description" value={description} placeholder="Описание" onChange={handleDescriptionChange} />
          <span className="task-separator"></span>
          <div className="task-buttons">
            <Button styleName="btn btn-favorite" onClick={() => favoritesTask(id)} icon="favorite" />
            <Button styleName="btn btn-delete" onClick={() => deleteTask(id)} icon="delete" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
