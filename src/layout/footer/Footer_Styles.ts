import styled from "styled-components";


// Footer
const Footer = styled.footer`

  padding: 32px 0;


`

const FooterSocials = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
justify-content: end;


`

const FooterSocialsLink = styled.a`
display: flex;
    align-content: center;
    justify-content: center;
    
`
const FooterSocialsIcons = styled.img`
display: flex;
    align-content: center; 
    justify-content: center;
`



export const S = {
    Footer, FooterSocials, FooterSocialsLink, FooterSocialsIcons
}
