import styled from 'styled-components';

export const WrapperHeader = styled.div`
    width: 100%;
    heigth: 200px;
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;

    input{
        width: 80%;
        height: 30px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    button{
        width: 8%;
        border: 2px solid #223322;
        border-radius: 5px;
        background-color: rgba(55,77,22,0.5);
        font-size: 1rem;
        font-weight: bold;
        color: #ccccff;
        font-family: 'Helvetica';

        &:hover{
            color: #ffffff;
            background-color: rgba(55,77,22,1);
            box-shadow: 3px 2px 12px rgba(110,150,60,1)
        }
    }
`;