const Notification = (props) => {
  //  Write your code here.
  const { className, text } = props;
  return <p className={className}>{text}</p>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="blue-notification-container">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification className="message" text="Information Message" />
    </div>
    <div className="green-notification-container">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification className="message" text="Success Message" />
    </div>
    <div className="yellow-notification-container">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification className="message" text="Warning Message" />
    </div>
    <div className="red-notification-container">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
      <Notification className="message" text="Error Message" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
