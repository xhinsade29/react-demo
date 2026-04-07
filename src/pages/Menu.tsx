import { IonPage, IonSplitPane, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuToggle, IonItem, IonIcon, IonRouterOutlet } from "@ionic/react";
import { Redirect, Route } from "react-router";
import { homeOutline } from "ionicons/icons";
import Home from "./Home";


const Menu:React.FC = () => {

    const path = [
        {name:'Home', url:'/app/home',icon:homeOutline},
    ]
    return(
        <IonPage>
            <IonSplitPane contentId="main">
               <IonMenu contentId="main">
                  {/* Header */}
                  <IonHeader>
                    <IonToolbar>
                        <IonTitle>Menu</IonTitle>
                    </IonToolbar>
                  </IonHeader>
                  {/* Content */}
                  <IonContent>
                    {path.map((item, index) =>(
                        <IonMenuToggle key={index}>
                            <IonItem routerLink={item.url} routerDirection="forward">
                                <IonIcon icon={item.icon} slot="start"></IonIcon>
                                {item.name}
                            </IonItem>
                        </IonMenuToggle>
                    ))}

                  </IonContent>
               </IonMenu>
               {/* Routing */}
               <IonRouterOutlet id="main">
                    <Route exact path="/app/home" component={Home} />
                    <Route exact path="/app" >
                        <Redirect to="/app/home"/>
                    </Route>
                    
               </IonRouterOutlet>
            </IonSplitPane>
            
        </IonPage>
           
    );
}

export default Menu;