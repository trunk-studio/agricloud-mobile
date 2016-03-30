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
import Dashboard from './containers/Dashboard';
import PostList from './containers/PostList';
import PostDetail from './containers/PostDetail';

export default function AppRoutes() {
  return (
    <Router name="root">
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
          <Route name="tabFavs" schema="tab" title="收藏" iconName="heart">
            <Router>
              <Route name="postList" component={PostList} title="Agricloud Mobile" />
              <Route name="postDetail" component={PostDetail} title="新聞內頁" />
            </Router>
          </Route>
          <Route name="tabDiscover" schema="tab" title="探索" iconName="rocket">
            <Router>
              <Route name="dashboard" component={Dashboard} title="Dashboard" />
            </Router>
          </Route>
          <Route name="tabInfo" schema="tab" title="最新資訊" iconName="newspaper-o">
            <Router>
              <Route name="postList" component={PostList} title="Agricloud Mobile" />
              <Route name="postDetail" component={PostDetail} title="新聞內頁" />
            </Router>
          </Route>
          <Route name="tabContact" schema="tab" title="聯絡我們" iconName="mobile">
            <Router>
              <Route name="postList" component={PostList} title="Agricloud Mobile" />
              <Route name="postDetail" component={PostDetail} title="新聞內頁" />
            </Router>
          </Route>
        </Router>
      </Route>
    </Router>
  );
}
