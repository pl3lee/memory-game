import '../styles/Modal.css';
const Modal = () => {
  return (
    <div className="modal closed">
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-title">How to play</div>
          <span
            className="material-symbols-outlined"
            onClick={() => {
              document.querySelector('.modal').classList.add('closed');
            }}
          >
            close
          </span>
        </div>
        <div className="modal-desc">
          This game is really simple, just keep clicking on cards that you have
          never clicked on before. This trains your short term memory.
        </div>
        <div className="close"></div>
      </div>
    </div>
  );
};

export default Modal;
