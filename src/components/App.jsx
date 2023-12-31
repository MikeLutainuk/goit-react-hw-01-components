import Profile from './Profile/Profile';
import user from './data/user';
import data from './data/data';
import Statistics from "./Statistics/Statistics";
import friends from "./data/friends";
import FriendsList from './FriendList/FriendList';
import TransactionHistory from './Transaction/TransactionHistory';
import transactions from './data/transactions';

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
