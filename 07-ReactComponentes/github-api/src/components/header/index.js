import React, {useState} from 'react';
import * as S from './styled';
import useGitHub from '../../hooks/github-hooks';


const Header = () => {
const {getUser} = useGitHub();
const [usernameForSearch, setUserNameForSearch] = useState();
  
const submitGetUser = ()=>{
  if(!usernameForSearch) return;
  return  getUser(usernameForSearch)
}
  return (

        <S.WrapperHeader>
        <input 
        type='text'
        onChange={(event)=> setUserNameForSearch(event.target.value)}
         />
        <button
          type='submit' 
          onClick={submitGetUser}>buscar</button>
        </S.WrapperHeader> 
       
  )
}


export default Header;