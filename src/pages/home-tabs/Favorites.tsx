
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from "@ionic/react";
import React, { FC } from "react";

const Favorites: FC = () => {
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                      <IonButtons slot= "start">
                           <IonMenuButton></IonMenuButton>                          
                      </IonButtons>
                      <IonTitle>Favorates</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <h1>Favorites</h1>
            </IonContent>
        </IonPage>
           
    );
};

export default Favorites;