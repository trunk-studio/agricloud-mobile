import React, {
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import Tabbar from './Tabbar';
import PostListItem from '../components/PostListItem';
import SearchPostBar from '../components/SearchPostBar';
import { connect } from 'react-redux';
import {
  requestSearchPost,
} from '../actions/SearchPostActions';

const windowSize = Dimensions.get('window');
const styles = React.StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgb(240, 240, 240)',
    paddingTop: 65,
    height: windowSize.height,
  },
});

function PostList(props) {
  const { postList } = props;
  const bodyView = [];
  const postListContainer = [];
  if (postList.length > 0) {
    postList.forEach((post, i) => {
      postListContainer.push(
        <PostListItem
          key={i}
          index={i}
          title={post._source.title}
          uri={post._source.uri}
        />
      );
    });
    bodyView.push(
      <ScrollView key={0} keyscrollEventThrottle={200} automaticallyAdjustContentInsets={false}>
        {postListContainer}
      </ScrollView>
    );
  }
  return (
    <View style={styles.wrapper}>
      <SearchPostBar />
      {bodyView}
      <Tabbar />
    </View>
  );
}

PostList.propTypes = {
  postList: React.PropTypes.array,
};

PostList.defaultProps = {
  postList: [],
};

function _injectPropsFromStore(state) {
  return {
    postList: state.search.postList,
  };
}

const _injectPropsFormActions = {
  requestSearchPost,
};

export default connect(_injectPropsFromStore, _injectPropsFormActions)(PostList);
