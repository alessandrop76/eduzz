import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
display: flex;
flex-direction: column;
align-items: flex-start;
align-content: center;
font-size: 16px;
width: 50%;
margin-top: 20px;
`;


export const WrapperTabList = styled(TabList)`
list-style-type: none;
padding: 4px;
display: flex;
margin:0;

`;
// WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
border-radius: 16%;
border: none;
padding: 8px;
user-select: none;
cursor: pointer;
color: white;
margin-left: 5px;
background-color:rgba(55,77,22,1);
&:focus{
    outline: none;
}

&.is-selected {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px solid rgba(55,77,22,0.5);
 
}
`;

export const WrapperTabPanel = styled(TabPanel)`
display: none;
padding: 8px;
margin-top: -5px;
width: 80vw;

&.is-selected{
    display: block;
    margin-top: -10px;
    margin-left: 3px;
    padding: 30px 0px 30px 10px;
    background-color: rgba(55,77,22,0.5);
    
}
`;

export const WrapperList = styled(TabList)`
    color: purple;
`
