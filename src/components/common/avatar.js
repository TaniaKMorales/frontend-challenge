import styled from "styled-components"

const AvatarStyled = styled.figure`
    border-radius: 50%;
    background-color: var(--secondary);
    overflow: hidden;
    padding: 2px;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    border: 1px solid var(--primary);
    /* height: auto; */
  img {
    object-fit: cover;
    border-radius: inherit;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
  }
`

function Avatar({size, url}) {
  return (
    <AvatarStyled size={size}>
      <img src={url} alt="avatar" />
    </AvatarStyled>
  )
}

Avatar.defaultProps = {
  size: '65px',
  url: 'https://socialtools.me/wp-content/uploads/2016/04/foto-de-perfil.jpg'
}

export default Avatar
