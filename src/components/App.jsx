import Profile from './profile/profile';
import user from '../data/user.json';
import Statistics from './statistics/statistics';
import data from '../data/data.json';
import FriendList from './friend-list/friend-list';
import friends from '../data/friends.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="God it works!" data={data} />
      <Statistics data={data} />
      <FriendList arr={friends}/>

    </>
  );
};
