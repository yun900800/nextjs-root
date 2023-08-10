import styled from 'styled-components';

const Title = styled.h1`
    font-size:50px;
    color: ${({theme})=> theme.colors.primary}
`;
function CSSInJS() {
    return (<>
        <h2 style={{color:'red'}}>CSSInJS Pages</h2>
        <Title>Styled Component</Title>
    </>)
}

export default CSSInJS;