import styled from '@emotion/styled';

export const Li = styled.li`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  gap: 10px;
`;

export const ButtonDel = styled.button`
  margin-left: 15px;
  border-radius: 5px;
  border: none;
  background-color: lightgrey;
  :hover {
    background-color: dodgerblue;
    border: none;
  }
`;