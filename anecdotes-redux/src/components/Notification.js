import { connect } from "react-redux";

const Notification = (props) => {
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };

  const notification = props.notification;
  return notification ? <div style={style}>{notification}</div> : null;
};

const mapStateToProps = (state) => {
  return {
    notification: state.notification.value,
  };
};

export default connect(mapStateToProps)(Notification);
