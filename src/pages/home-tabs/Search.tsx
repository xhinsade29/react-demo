
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonSearchbar, IonList, IonLabel, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonRow, IonGrid, IonCol, IonIcon, IonButton } from "@ionic/react";
import { chatbubblesOutline, shareOutline, thumbsUpOutline } from "ionicons/icons";
import { useState, useEffect } from "react";

const Search: React.FC = () => {

     const games = [
                {name: "Mobile Legend", details: "Mobile Legend is a multiplayer online battle arena game."},
                {name: "Free Fire", details: "Free Fire is a multiplayer online battle arena game."},
                {name: "PUBG Mobile", details: "PUBG Mobile is a multiplayer online battle arena game."},
                {name: "Call of Duty", details: "Call of Duty is a multiplayer online battle arena game."},
                {name: "Valorant", details: "Valorant is a multiplayer online battle arena game."},
            ];

            const [searchText, setSearchText] = useState("");
            const [filtered, setFilteredGames] = useState(games);

            useEffect(() => {
               const debounced = setTimeout(() => {
                const filtered = games.filter((games) => 
                  games.name.toLowerCase().includes(searchText.toLowerCase()),
                );

                setFilteredGames(filtered);
              }, 400);

              return () => clearTimeout(debounced);
            // eslint-disable-next-line react-hooks/exhaustive-deps
            }, [searchText]);

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                      <IonButtons slot= "start">
                           <IonMenuButton></IonMenuButton> 
                           <IonTitle>Search</IonTitle>                                   
                      </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className = "ion-padding">
                <IonSearchbar placeholder="Search games..." 
                value={searchText}
                debounce={0}
                onIonInput={(e) => setSearchText(e.detail.value!)}
                />
               
                <IonList>
                    {filtered.map((item, index) => (
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
                                <IonButton fill="clear" expand="full">
                                  <IonIcon icon={thumbsUpOutline} ></IonIcon>
                                  <IonLabel style={{marginLeft: "5px"}}>Like</IonLabel>
                                </IonButton>
                              </IonCol>
                    
                              <IonCol>
                                <IonButton fill="clear" expand="full">
                                  <IonIcon icon={chatbubblesOutline}></IonIcon>
                                  <IonLabel style={{marginLeft: "5px"}}>Comment</IonLabel>
                                </IonButton>
                              </IonCol>
                              
                              <IonCol>
                                <IonButton fill="clear" expand="full">
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

export default Search;