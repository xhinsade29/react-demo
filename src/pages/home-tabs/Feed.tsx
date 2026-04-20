
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonList, IonItem, IonLabel    } from "@ionic/react";
import React, { FC } from "react";

const Feed: FC = () => {
    
            const games = [
                {id: 1, name: "Mobile Legend"},
                {id: 2, name: "Free Fire"},
                {id: 3, name: "PUBG Mobile"},
                {id: 4, name: "Call of Duty"},
                {id: 5, name: "Valorant"},
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
               
            <IonList>
                {games.map((game) => (
                    <IonItem key={game.id}>
                        <IonLabel>{game.name}</IonLabel>
                    </IonItem>
                ))}
            </IonList>


            </IonContent>
        </IonPage>
           
    );
};

export default Feed;