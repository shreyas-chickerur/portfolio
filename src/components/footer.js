import * as React from 'react'
import { IonButton, IonIcon } from '@ionic/react'
import { logoTwitter, logoInstagram, logoGithub, logoLinkedin, logoFacebook } from 'ionicons/icons' 
import styled from 'styled-components'

const FooterStyles = styled.footer`
    text-align: center;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    margin-left: 200px;
    margin-right: 200px;
`;



const Footer = () => {
    return (
        <FooterStyles>
            <IonButton href="https://twitter.com/shre_yesss">
                <IonIcon size="large" icon={logoTwitter}></IonIcon>
            </IonButton>
            <IonButton href="https://www.instagram.com/shre_yesss/?hl=en">
                <IonIcon size="large" icon={logoInstagram}></IonIcon>
            </IonButton>
            <IonButton href="https://github.com/shreyas-chickerur">
                <IonIcon size="large" icon={logoGithub}></IonIcon>
            </IonButton>
            <IonButton href="https://www.linkedin.com/in/shreyaschickerur/">
                <IonIcon size="large" icon={logoLinkedin}></IonIcon>
            </IonButton>
            <IonButton href="https://www.facebook.com/shreyas.chickerur">
                <IonIcon size="large" icon={logoFacebook}></IonIcon>
            </IonButton>
        </FooterStyles>
    )
}

export default Footer