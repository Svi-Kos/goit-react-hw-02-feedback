import s from '../Notification/Notification.module.css';

const Notification = ({ message }) => (
  <div className={s.notification}>{message}</div>
);

export default Notification;
