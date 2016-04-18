import React, {
  Component,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import ScrollList from '../components/ScrollList';
import SearchPostBar from '../components/SearchPostBar';
import { requestSearchPost } from '../actions/SearchActions';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

const windowSize = Dimensions.get('window');
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgb(131, 206, 227)',
    paddingTop: 64,
    height: windowSize.height,
  },
});

export default class PostList extends Component {
  // if (listData.length > 0) {
  //   listData.forEach((post, i) => {
  //     listContainer.push(
  //       <ListItem
  //         key={i}
  //         index={i}
  //         type={post.type}
  //         month={post.month}
  //         crop={post.title}
  //         variety={post.variety}
  //         county={post.county}
  //         onItemPress={props.onItemPress}
  //       />
  //     );
  //   });
  // } else {
  //   listContainer.push(
  //     <Text style={styles.defaultTxt} key={0}>沒有資料囉！</Text>
  //   );
  // }
  componentWillMount() {
    this.props.requestSearchPost(this.props.mIndex);
  }
  render() {
    const { listData, mIndex } = this.props;
    function onChange(e) {
      if (e.length > 0) {
        requestSearchPost(mIndex);
      }
    }
    function onListItemPress(detail) {
      Actions.postDetail({
        itemType: detail.type,
        urlKey: detail.urlKey,
        month: detail.month,
        title: detail.crop,
        variety: detail.variety,
        county: detail.county,
      });
    }
    return (
      <View style={styles.wrapper}>
        <SearchPostBar onChange={onChange} />
        <ScrollList listData={listData} onItemPress={onListItemPress} />
      </View>
    );
  }
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
