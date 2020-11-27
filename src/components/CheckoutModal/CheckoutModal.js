import './CheckoutModal.scss';
import Modal from 'react-modal';
import CheckoutForm from '../CheckoutForm';
import CheckoutSuccess from '../CheckoutSuccess';

const CheckoutModal = ({modalIsOpen, closeModal, onCheckout, 
    isLoading, isError, checkout, onClearSuccess, testing = false}) => {

  const customStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };
  
  if (!testing) Modal.setAppElement('#root');
      
  const onClose = () => {
    closeModal();
    onClearSuccess();
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Checkout Modal"
    >
      <div className="checkout-modal">
        <div onClick={onClose}
          className="checkout-modal__close">
          <span className="checkout-modal__close-line"></span>
          <span className="checkout-modal__close-line"></span>
        </div>
        <div className="checkout-modal__wrapper">
          {!isLoading && !isError && Object.keys(checkout).length ?
            <CheckoutSuccess /> :
            <>
              <h3 className="checkout-modal__title">Information</h3>
              <CheckoutForm onCheckout={onCheckout}/>
            </>
          }
        </div>
      </div>   
    </Modal>
  )
}

export default CheckoutModal;