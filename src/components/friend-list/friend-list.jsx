import React from 'react';
import PropTypes from 'prop-types';
import css from './Friend-list.module.css';
import FriendListItem from 'components/friend-list-item/friend-list-item';

const FriendList = ({ arr }) => {
  return (
    <ul className={css.friendList}>
      {arr.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </ul>
  );
};
FriendList.propTypes = {
  arr: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};
export default FriendList;
