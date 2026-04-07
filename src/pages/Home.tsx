import { IonContent, IonHeader, IonMenuButton, IonPage, IonTitle,IonButton, IonToolbar } from '@ionic/react';
import './Home.css';
import ExploreContainer from '../components/ExploreContainer';

import ProgressBar from '../components/ProgressBar';
import DateTimeButton from '../components/DateTimeBttn';

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

          <ExploreContainer />
        
        <ProgressBar />
        <DateTimeButton />
        </IonContent>
  
    </IonPage>
  );
};

export default Home;
