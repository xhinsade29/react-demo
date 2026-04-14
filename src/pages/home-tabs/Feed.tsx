
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from "@ionic/react";
import React, { FC } from "react";

const Feed: FC = () => {
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                      <IonButtons slot= "start">
                           <IonMenuButton></IonMenuButton>                          
                      </IonButtons>
                      <IonTitle>Feed</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <h1>Feed</h1>
            </IonContent>
        </IonPage>
           
    );
};

export default Feed;