// import logo from './logo.svg';
import React from "react";
import Layout from "./components/layout";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import useGitHub from './hooks/github-hooks';
import NoSearch from './components/noSearch/NoSearch';

const App = ()=>{
  const{ githubState} = useGitHub();
  return(
    <Layout>
    {githubState.hasUser ? (
      <>
        {githubState.loading ? (
          <p>Loading</p>
        ) : (
          <>
            <Profile />
            <Repositories />
          </>
        )}
      </>
    ) : (
    <NoSearch />
    )}
  </Layout>
  );
}

export default App;
