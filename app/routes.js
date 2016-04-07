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
          <Route name="tabMonth" schema="tab" title="月份導覽" iconName="rocket">
            <Router>
              <Route name="catogory" component={Catogory} title="月份導覽" />
              <Route name="postList" component={PostList} />
              <Route name="postDetail" component={PostDetail} title="新聞內頁" />
            </Router>
          </Route>
          <Route name="tabDashboard" hideNavBar schema="tab" title="首頁" iconName="home" initial>
            <Router>
              <Route name="dashboard" component={Dashboard} title="Dashboard" />
            </Router>
          </Route>
          <Route name="tabList" schema="tab" title="蔬果列表" iconName="newspaper-o">
            <Router>
              <Route name="dashboard" component={Dashboard} title="蔬果列表" />
            </Router>
          </Route>
        </Router>
      </Route>
    </Router>
  );
}
