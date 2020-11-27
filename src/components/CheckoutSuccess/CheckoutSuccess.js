import './CheckoutSuccess.scss';

const CheckoutSuccess = () => (
  <div className="checkout-success">
    <div className="success-checkmark">
      <div className="check-icon">
        <span className="icon-line line-tip"></span>
        <span className="icon-line line-long"></span>
        <div className="icon-circle"></div>
        <div className="icon-fix"></div>
      </div>
    </div>
    <h4 className="checkout-success__title">Success</h4>
  </div>
)

export default CheckoutSuccess;