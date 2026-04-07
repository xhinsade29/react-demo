import { IonContent, IonHeader, IonMenuButton, IonPage, IonTitle,IonButton, IonToolbar } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        < IonButton slot = "start" >
                <IonMenuButton> </IonMenuButton>
                </IonButton>
                <IonTitle>Home</IonTitle>
          </IonToolbar>        
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Home</IonTitle>            
            </IonToolbar>
          </IonHeader>
        </IonContent>
  
    </IonPage>
  );
};

export default Home;
