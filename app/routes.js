import React, { Navigator } from 'react-native';
import { connect } from 'react-redux';
import RNRF, {
  Route,
  Schema,
  TabBar,
} from 'react-native-router-flux';
const Router = connect()(RNRF.Router);

// View
import TabIcon from './components/TabIcon';
import PostDetail from './containers/PostDetail';
import Dashboard from './containers/Dashboard';
import Catogory from './containers/Catogory';
import PostList from './containers/PostList';

export default function AppRoutes() {
  return (
    <Router name="root" leftTitle="Back">
      <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight} />
      <Schema name="tab" type="switch" icon={TabIcon} />
      <Route hideNavBar={1} name="tabbar">
        <Router
          footer={TabBar}
          tabBarStyle={{
            borderTopColor: 'rgba(83, 83, 82, 0.25)',
            borderTopWidth: 1,
            backgroundColor: 'white',
          }}
        >
          <Route name="tabDashboard" hideNavBar schema="tab" title="首頁" iconName="home" initial>
            <Router>
              <Route name="dashboard" component={Dashboard} title="Dashboard" />
            </Router>
          </Route>
          <Route name="tabMonth" schema="tab" title="月份導覽" iconName="rocket">
            <Router>
              <Route name="catogory" component={Catogory} title="月份導覽" />
              <Route name="postList" component={PostList} />
              <Route name="postDetail" component={PostDetail} />
            </Router>
          </Route>
          <Route name="tabNews" schema="tab" title="最新資訊" iconName="newspaper-o">
            <Router>
              <Route name="dashboard" component={Dashboard} title="最新資訊" />
            </Router>
          </Route>
          <Route name="tabAbout" schema="tab" title="關於我們" iconName="user">
            <Router>
              <Route name="dashboard" component={Dashboard} title="關於我們" />
            </Router>
          </Route>
        </Router>
      </Route>
    </Router>
  );
}
