import Profile from './Profile/Profile';
import user from './Profile/user';
import data from './Statistics/data';
import Statistics from "./Statistics/Statistics";
import friends from "./FriendList/friends";
import FriendsList from './FriendList/FriendList';
import TransactionHistory from './Transaction/TransactionHistory';
import transactions from './Transaction/transactions';

export const App = () => {
  return (
     <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />;

    </div> 
  );
};
