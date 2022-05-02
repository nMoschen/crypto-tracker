import styled from 'styled-components';
import icon from '../../assets/icons/notification.svg';

const StyledNotifications = styled.button`
  background: none;
  border: none;
`;

export const Notifications = () => {
  return (
    <StyledNotifications onClick={() => alert('notifications clicked')}>
      <img src={icon}></img>
    </StyledNotifications>
  )
}
