
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonList, IonLabel, IonCardContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCol, IonRow, IonGrid, IonButton, IonIcon    } from "@ionic/react";
import { chatbubblesOutline, shareOutline, thumbsUpOutline } from "ionicons/icons";
import React, { FC } from "react";

const Feed: FC = () => {

            const games = [
                {name: "Mobile Legend", details: "Mobile Legend is a multiplayer online battle arena game."},
                {name: "Free Fire", details: "Free Fire is a multiplayer online battle arena game."},
                {name: "PUBG Mobile", details: "PUBG Mobile is a multiplayer online battle arena game."},
                {name: "Call of Duty", details: "Call of Duty is a multiplayer online battle arena game."},
                {name: "Valorant", details: "Valorant is a multiplayer online battle arena game."},
            ];


    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                      <IonButtons slot= "start">
                           <IonMenuButton></IonMenuButton>                         
                      <IonTitle>Feed</IonTitle>
                      </IonButtons>
                </IonToolbar>
            </IonHeader>
               
               <IonContent className="ion-padding">
            <IonList>
                {games.map((item, index) => (
                    <IonCard key={index}>

      <img alt="Silhouette of mountains" 
      src="https://ionicframework.com/docs/img/demos/card-media.png"
       />

      <IonCardHeader>
        <IonCardTitle>{item.name}</IonCardTitle>
        <IonCardSubtitle></IonCardSubtitle>
      </IonCardHeader>

     <IonCardContent>{item.details}</IonCardContent>

     <IonGrid>
        <IonRow>
          <IonCol>
            <IonButton fill = "clear" expand="full" >
              <IonIcon icon={thumbsUpOutline} ></IonIcon>
              <IonLabel style={{marginLeft: "5px"}}>Like</IonLabel>
            </IonButton>
          </IonCol>

          <IonCol>
            <IonButton fill = "clear" expand="full" >
              <IonIcon icon={chatbubblesOutline}></IonIcon>
              <IonLabel style={{marginLeft: "5px"}}>Comment</IonLabel>
            </IonButton>
          </IonCol>
          
          <IonCol>
            <IonButton fill = "clear" expand="full" >
              <IonIcon icon={shareOutline}></IonIcon>
              <IonLabel style={{marginLeft: "5px"}}>Share</IonLabel>
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>       
     </IonCard>

    ))}
  </IonList>
</IonContent>
</IonPage>  

    );
};

export default Feed;