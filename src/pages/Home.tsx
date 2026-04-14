import {  IonTitle, IonToolbar, IonTabButton, IonIcon, IonRouterOutlet, IonTabBar, IonTabs, IonLabel } from '@ionic/react';
import './Home.css';
import Search from './home-tabs/Search';
import Favorites from './home-tabs/Favorites';
import Feed from './home-tabs/Feed';

import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router';
import { bookOutline, star, search } from 'ionicons/icons';

const Home: React.FC = () => {
  const tabs = [
    {name : "Feed", tabs: "feed" , url : "/app/home/feed" , icon: bookOutline},
    {name : "Favorites", tabs: "favorites" , url : "/app/home/favorites" , icon: star},
    {name : "Search", tabs: "search" , url : "/app/home/search" , icon: search},
  ];
  return (
    <IonReactRouter>
      <IonTabs>
        <IonTabBar slot="bottom">
          <IonToolbar>
            <IonTitle>
              Tabs
            </IonTitle>
          </IonToolbar>
          {tabs.map((item, index) => (
            <IonTabButton key={index} tab={item.tabs} href={item.url}>
              <IonIcon icon={item.icon} ></IonIcon> 
              <IonLabel>{item.name}</IonLabel>
            </IonTabButton>
          ))}
        </IonTabBar>

        <IonRouterOutlet>
          <Route exact path="/app/home/feed" component={Feed} />
          <Route exact path="/app/home">
            <Redirect to="/app/home/feed" />
          </Route>
          <Route exact path="/app/home/favorites" component={Favorites} />
          <Route exact path="/app/home/search" component={Search} />
        </IonRouterOutlet>
      </IonTabs>
    </IonReactRouter>
  );
};

export default Home;
