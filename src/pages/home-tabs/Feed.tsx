
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonList, IonItem, IonLabel    } from "@ionic/react";
import React, { FC } from "react";

const Feed: FC = () => {

            const games = [
                {name: "Mobile Legend"},
                {name: "Free Fire"},
                {name: "PUBG Mobile"},
                {name: "Call of Duty"},
                {name: "Valorant"},
            ];

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
               
               <IonContent className="ion-padding">
            <IonList>
                {games.map((item, index) => (
                    <IonItem key={index}>
                        <IonLabel>{item.name}</IonLabel>
                    </IonItem>
                ))}
            </IonList>
        </IonContent>

            </IonContent>
        </IonPage>
           
    );
};

export default Feed;