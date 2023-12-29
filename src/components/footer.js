import * as React from 'react'
import {
    navBar,
    navBarItemHome,
    navBarItemOther,
    navBarText
} from '../styles/layout.module.css'
import { Link } from 'gatsby'
import { IonButton, IonIcon, IonContent } from '@ionic/react'
import { logoTwitter, logoInstagram, logoGithub, logoLinkedin } from 'ionicons/icons' 
import spreadList from './footer.module.css'
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
            <IonButton href="https://www.youtube.com">
                <IonIcon size="large" icon={logoTwitter}></IonIcon>
            </IonButton>
            <IonButton href="https://www.instagram.com/shre_yesss/?hl=en">
                <IonIcon color="white" size="large" icon={logoInstagram}></IonIcon>
            </IonButton>
            <IonButton href="https://github.com/shreyas-chickerur">
                <IonIcon color="red" size="large" icon={logoGithub}></IonIcon>
            </IonButton>
            <IonButton href="https://www.linkedin.com/in/shreyaschickerur/">
                <IonIcon size="large" icon={logoLinkedin}></IonIcon>
            </IonButton>
        </FooterStyles>
    )
}

export default Footer