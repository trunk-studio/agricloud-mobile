import React, {
  View,
  Text,
} from 'react-native';
// import ScrollList from '../components/ScrollList';
import CoverCard from '../components/CoverCard';
// import { requestSearchPost } from '../actions/SearchActions';
import { requestToday } from '../actions/DateActions';
import { connect } from 'react-redux';
// import { Actions } from 'react-native-router-flux';

const styles = React.StyleSheet.create({
  wrapper: {
  },
});

function Dashboard(props) {
  const { month, listData } = props;
  props.requestToday();
  // function onListItemPress(detail) {
  //   Actions.postDetail({
  //     title: detail.title,
  //     content: detail.content,
  //     uri: detail.uri,
  //   });
  // }

  return (
    <View style={styles.wrapper}>
      <CoverCard uri={'https://unsplash.it/400/400/?image=429'} title={'蔬果寶'} height={260} />
      {/*<ScrollList listData={props.listData} onItemPress={onListItemPress} />*/}
      <Text style={[{fontSize:20},{textAlign:'center'}]}>今天為{month}月</Text>
    </View>
  );
}

Dashboard.propTypes = {
  requestToday: React.PropTypes.func,
  requestSearchPost: React.PropTypes.func,
  uri: React.PropTypes.string,
  month: React.PropTypes.number,
  date: React.PropTypes.number,
  listData: React.PropTypes.array,
};

Dashboard.defaultProps = {
  requestToday: null,
  requestSearchPost: null,
  uri: 'https://unsplash.it/400/400/?random',
  month: 1,
  date: 1,
  listData: [],
};

function _injectPropsFromStore(state) {
  return {
    month: state.getToday.month,
    date: state.getToday.date,
    listData: state.search.postList,
  };
}

const _injectPropsFormActions = {
  requestToday,
  // requestSearchPost,
};

export default connect(_injectPropsFromStore, _injectPropsFormActions)(Dashboard);
