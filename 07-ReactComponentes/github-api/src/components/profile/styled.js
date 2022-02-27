import styled from 'styled-components';

export const Wrapper = styled.div`
    display : flex;
    flex-direction :column;
    width: 400px;
    height: 300px auto;
    background-color: rgba(245, 245, 230,0.3);
    border: 4px solid rgb(230, 230, 225);
    border-radius: 2%;
    padding: 10px;
`;

export const Avatar = styled.div`
    display: flex;
    justify-content: center;
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
`;


export const WrapperTitle = styled.div`
display: flex;
justify-content: center;
color: rgba(130,130,150);
font-size: 0.5rem;
font-family: 'Helvetica';

`;

export const WrapperSubTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -25px;
    font-size: 0.7rem;
    font-family: 'Helvetica';
    font-weight: thin;
`;

export const span = styled.span`
    font-size: 1rem;
    margin-left: 10px;
    font-size: 0.7rem;
    font-family: Arial;
    font-weight: bold;
    font-style: italic;
`;

export const WrapperIndices = styled.div`
    display: flex;
    width: 400px;
    // background-color: rgba(130,230,222);
    justify-content: space-around;
    text-align: center;
    font-family: 'Helvetica';
    font-size: 0.7rem
`;
