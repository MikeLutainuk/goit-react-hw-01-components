import PropTypes from 'prop-types';
// import FriendListItem from './FriendListItem';
import css from '../FriendList/FriendList.module.css';

// const FriendsList = ({ avatar, name, isOnline }) => {};
const FriendsList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(({ name, avatar, isOnline, id }) => (
        <FriendListItem
          key={id}
          name={name}
          isOnline={isOnline}
          avatar={avatar}
        />
      ))}
    </ul>
  );
};
FriendsList.propTypes = {
  friends: PropTypes.arrayOf( 
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt={name} />
      <p className={css.name}>{name}</p>
    </li>
  );
};
export default FriendsList;
// {
//     PropTypes.shape({
//        name: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//     isOnline: PropTypes.bool.isRequired,
//     id: PropTypes.number.isRequired,
//     })
//   }
