import React, {
  View,
  Text,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';

const windowSize = Dimensions.get('window');
const styles = React.StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgb(240, 240, 240)',
    paddingTop: 65,
    height: windowSize.height,
  },
  text: {
    fontSize: 25,
    lineHeight: 30,
    textAlign: 'center',
    marginTop: 40,
    paddingLeft: 20,
    color: '#444',
  },
});

function Dashboard(props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>
        {'歡迎！\n\n準備開始探索最新消息?'}
      </Text>
    </View>
  );
}

Dashboard.propTypes = {
};

Dashboard.defaultProps = {
};

function _injectPropsFromStore(state) {
  return {
    postList: state.search.postList,
  };
}

const _injectPropsFormActions = {
};

export default connect(_injectPropsFromStore, _injectPropsFormActions)(Dashboard);
