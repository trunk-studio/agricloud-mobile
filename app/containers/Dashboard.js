import React, {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import CoverCard from '../components/CoverCard';
import { requestToday } from '../actions/DateActions';
import { connect } from 'react-redux';
// import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  defaultTxt: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});

function Dashboard(props) {
  const { month } = props;
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
      <Text style={styles.defaultTxt}>今天為{month}月</Text>
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
};

function _injectPropsFromStore(state) {
  return {
    month: state.getToday.month,
    date: state.getToday.date,
  };
}

const _injectPropsFormActions = {
  requestToday,
};

export default connect(_injectPropsFromStore, _injectPropsFormActions)(Dashboard);
