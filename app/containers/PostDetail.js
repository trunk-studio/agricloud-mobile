import React, {
  View,
  Image,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import Dimensions from 'Dimensions';

const windowSize = Dimensions.get('window');
const styles = React.StyleSheet.create({
  wrapper: {
    paddingTop: 65,
  },
  newsTitle: {
    fontSize: 20,
  },
  newsContent: {
    fontSize: 16,
  },
  itemImg: {
    width: windowSize.width,
    height: windowSize.height * 0.4,
  },
});

function PostDetail(props) {
  return (
    <View style={styles.wrapper}>
      <Image source={{ uri: props.uri }} style={ styles.itemImg } />
      <Text style={ styles.newsTitle }>
        {props.postList[props.index]._source.title}
      </Text>
      <Text style={ styles.newsContent }>
        {props.postList[props.index]._source.content}
      </Text>
    </View>
  );
}

PostDetail.propTypes = {
  postList: React.PropTypes.array,
  uri: React.PropTypes.string,
  index: React.PropTypes.number,
};

PostDetail.defaultProps = {
  uri: 'https://images.unsplash.com/photo-1453053507108-9f5456eb481f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=e0d75a1d1e2605e4c9f9302de0679508',
};

function _injectPropsFromStore(state) {
  return {
    postList: state.search.postList,
  };
}

const _injectPropsFormActions = {
};

export default connect(_injectPropsFromStore, _injectPropsFormActions)(PostDetail);
