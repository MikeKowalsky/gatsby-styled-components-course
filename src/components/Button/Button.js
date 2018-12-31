import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 250px;
  height: 40px;
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1em;
  font-weight: ${({ theme }) => theme.font.bold};
  transition: box-shadow 0.3s ease;

  ${({ theme }) => theme.media.desktop} {
    background: ${({ theme }) => theme.colors.white};
  }

  :hover {
    box-shadow: 0 10px 20px -15px red;
  }
`

export default Button
