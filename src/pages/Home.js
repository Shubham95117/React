import React from 'react';
import AuthContext from '../Context/AuthContext';

const Home = () => {
  return (
    <AuthContext.Consumer>
      {({ isLoggedIn }) => {
        if (isLoggedIn) {
          return (
            <div>
              <h2>Welcome Home!!</h2>
              {/* Add any additional content for logged-in users */}
            </div>
          );
        } else {
          // Return null or any other component/message for when the user is not logged in
          return null;
        }
      }}
    </AuthContext.Consumer>
  );
};

export default Home;
