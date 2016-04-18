import React, {
  Component,
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';
import NewsBoard from '../components/NewsBoard';

const windowSize = Dimensions.get('window');
const styles = StyleSheet.create({
  wrapper: {
    marginTop: 64,
  },
});

export default class News extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <NewsBoard boardTitle={'今日舉行的活動'} />
      </View>
    );
  }
}

News.propTypes = {
};

News.defaultProps = {
};

function _injectPropsFromStore(state) {
  return {
  };
}

const _injectPropsFormActions = {
};
