import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    <TransitionGroup>
      {alertContext.alerts.length > 0 &&
        alertContext.alerts.map(alert => (
          <CSSTransition key={alert.id} timeout={500} classNames='item'>
            <div
              style={{ borderRadius: '10px' }}
              className={`item-enter item-enter-active .item-exit .item-exit-active alert alert-${alert.type}`}
            >
              <i className='fas fa-info-circle' /> {alert.msg}
            </div>
          </CSSTransition>
        ))}
    </TransitionGroup>
  );
};

export default Alerts;
