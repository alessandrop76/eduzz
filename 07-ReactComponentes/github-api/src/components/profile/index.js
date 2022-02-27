import React from 'react';
import * as S from './styled';
import useGitHub from '../../hooks/github-hooks';

const Profile = ()=>{

  const {githubState} = useGitHub()

    return(
        <S.Wrapper>
        <S.Avatar>
        <img src="https://avatars.githubusercontent.com/u/48811968?v=4" alt="Avatar of user"/>
        </S.Avatar>
        <S.WrapperTitle>
               <h1>{githubState.user.name}</h1>
       </S.WrapperTitle>
       <S.WrapperSubTitle>
         <h4>Username:</h4> <S.span>{githubState.user.login}</S.span>
       </S.WrapperSubTitle>
       <S.WrapperIndices>
        <div>
          <h4>Followers</h4>
          <span>{githubState.user.followers}</span>
        </div>
        <div>
          <h4>Following</h4>
          <span>{githubState.user.following}</span>
        </div>
        <div>
          <h4>Gists</h4>
          <span>{githubState.user.public_gists}</span>
        </div>
        <div>
          <h4>Repos</h4>
          <span>{githubState.user.public_repos}</span>
        </div>
        </S.WrapperIndices>
</S.Wrapper>
  )
}

export default Profile;