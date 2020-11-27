import './CheckoutForm.scss';
import useInput from '../../utils/useInput.js';
import { useState } from 'react';

const CheckoutForm = ({onCheckout}) => 
{
  const firstName = useInput('');
  const secondName = useInput('');
  const email = useInput('');
  const address1 = useInput('');
  const address2 = useInput('');
  const [error, setError] = useState('');

  const checkInputs = () => {
    if (firstName.value.trim() === '') {
      setError('first name is required');
      return -1;
    }
    else if (secondName.value.trim() === '') {
      setError('second name is required');
      return -1;
    }
    else if (email.value.trim() === '') {
      setError('email is required');
      return -1;
    }
    else if (address1.value.trim() === '') {
      setError('address line 1 is required');
      return -1;
    }

    return 1;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkInputs() !== -1) 
      onCheckout({
        firstName: firstName.value.trim(),
        secondName: secondName.value.trim(),
        email: email.value.trim(),
        address1: address1.value.trim(),
        address2: address2.value.trim()
      });
  }
  
  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      {error !== '' &&
        <div className="checkout-form__error">Error: {error}</div>
      }
      <fieldset className="checkout-form__wrapper">
        <p className="checkout-form__info">
          <label htmlFor="firstName"
            className="checkout-form__label">
            First name:
          </label>
          <input type="text" name="firstName" id="firstName"
            className="checkout-form__field"
            {...firstName} required/>
        </p>
        <p className="checkout-form__info">
          <label htmlFor="secondName"
            className="checkout-form__label">
            Second name:
          </label>
          <input type="text" name="secondName" id="secondName"
            className="checkout-form__field"
            {...secondName} required/>
        </p>
        <p className="checkout-form__info">
          <label htmlFor="email"
            className="checkout-form__label">
            Email:
          </label>
          <input type="email" name="email" id="email"
            className="checkout-form__field"
            {...email} required/>
        </p>
        <p className="checkout-form__info">
          <label htmlFor="address1"
            className="checkout-form__label">
            Address Line 1:
          </label>
          <input type="text" name="address1" id="address1"
            className="checkout-form__field"
            {...address1} required/>
        </p>
        
        <p className="checkout-form__info">
          <label htmlFor="address2"
            className="checkout-form__label">
            Address Line 2:
          </label>
          <input type="text" name="address2" id="address2"
            className="checkout-form__field"
            {...address2} required/>
        </p>
        <p className="checkout-form__submit-wrapper">
          <button type="submit"
            className="checkout-form__submit">
            Checkout
          </button>
        </p>
      </fieldset>
    </form>
  )
}

export default CheckoutForm;