import{
    IonButton,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonRouterOutlet,
    IonTitle,
    IonToolbar,
    useIonRouter
} from '@ionic/react';

const About: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
               <IonRouterOutlet>
                <IonButton slot="start">
                    <IonMenuButton ></IonMenuButton >
                </IonButton>
               </IonRouterOutlet>
            </IonHeader>
            <IonContent fullscreen>
                <h1>About</h1>
            </IonContent>
        </IonPage>
    );
};

export default About;