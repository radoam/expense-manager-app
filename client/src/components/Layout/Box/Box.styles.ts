import styled from '@emotion/styled';

export const BoxStyled = styled('div')`
  padding: 16px;
  border-radius: 4px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.primary};
`;
