import React, { Navigator } from 'react-native';
import { connect } from 'react-redux';
import RNRF, {
  Route, Schema,
} from 'react-native-router-flux';
const Router = connect()(RNRF.Router);

// View
import PostList from './containers/PostList';
import PostDetail from './containers/PostDetail';

export default function AppRoutes() {
  return (
    <Router name="root">
     <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight} />
     <Route name="PostList" component={PostList} title="Agricloud Mobile" />
     <Route name="PostDetail" component={PostDetail} title="新聞內頁" />
   </Router>
  );
}
