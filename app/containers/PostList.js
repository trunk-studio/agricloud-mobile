import React, {
  View,
  Dimensions,
} from 'react-native';
import ScrollList from '../components/ScrollList';
import SearchPostBar from '../components/SearchPostBar';
import { requestSearchPost } from '../actions/SearchActions';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

const windowSize = Dimensions.get('window');
const styles = React.StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgb(240, 240, 240)',
    paddingTop: 65,
    height: windowSize.height,
  },
});

function PostList(props) {
  const { listData, mIndex } = props;
  props.requestSearchPost(mIndex);
  function onChange(e) {
    // if (e.length > 0) {
    //   props.requestSearchPost(mIndex);
    // }
  }
  function onListItemPress(detail) {
    Actions.postDetail({
      itemType: detail.type,
      month: detail.month,
      crop: detail.crop,
      variety: detail.variety,
      county: detail.county,
      town: detail.town,
      uri: detail.uri,
    });
  }
  return (
    <View style={styles.wrapper} onLayout={props.requestSearchPost}>
      <SearchPostBar onChange={onChange} />
      <ScrollList listData={listData} onItemPress={onListItemPress} />
    </View>
  );
}

PostList.propTypes = {
  listData: React.PropTypes.array,
  mIndex: React.PropTypes.number,
  onChange: React.PropTypes.func,
  requestSearchPost: React.PropTypes.func,
};

PostList.defaultProps = {
  listData: [],
  mIndex: 1,
  onChange: null,
  requestSearchPost: null,
};

function _injectPropsFromStore(state) {
  return {
    listData: state.search.postList,
  };
}

const _injectPropsFormActions = {
  requestSearchPost,
};

export default connect(_injectPropsFromStore, _injectPropsFormActions)(PostList);
