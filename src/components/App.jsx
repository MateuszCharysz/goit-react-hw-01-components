import Profile from './profile/profile';
import user from './profile/user.json';
import Statistics from './statistics/statistics';
import data from './statistics/data.json';

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
    </>
  );
};
