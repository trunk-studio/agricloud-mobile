import React, {
  ScrollView,
  Image,
  Text,
} from 'react-native';
import { requestSearchPost } from '../actions/SearchActions';
import { connect } from 'react-redux';
import Dimensions from 'Dimensions';

const windowSize = Dimensions.get('window');
const styles = React.StyleSheet.create({
  wrapper: {
    paddingTop: 65,
    backgroundColor: 'rgb(240, 240, 240)',
  },
  hr: {
    borderColor: 'rgba(185, 190, 183, 0.53)',
    borderWidth: 1,
    borderStyle: 'solid',
    marginLeft: 15,
    marginRight: 15,
  },
  newsTitle: {
    fontSize: 20,
    paddingLeft: 27,
    paddingRight: 27,
    paddingTop: 10,
    paddingBottom: 10,
    lineHeight: 30,
  },
  newsContent: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    marginBottom: 100,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 30,
    fontSize: 16,
    color: 'rgb(40, 40, 40)',
    backgroundColor: 'white',
    lineHeight: 30,
    shadowOpacity: 1,
    shadowColor: 'rgba(147, 147, 147, 0.6)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  itemImg: {
    width: windowSize.width,
    height: windowSize.height * 0.4,
  },
});

function PostDetail(props) {
  return (
    <ScrollView
      style={styles.wrapper}
      keyscrollEventThrottle={200}
      automaticallyAdjustContentInsets={false}
    >
      <Image source={{ uri: props.uri }} style={ styles.itemImg } />
      <Text style={ styles.newsTitle }>{props.crop}</Text>
      <Text style={ styles.newsContent }>{props.variety}</Text>
    </ScrollView>
  );
}

PostDetail.propTypes = {
  index: React.PropTypes.number,
  uri: React.PropTypes.string,
  itemType: React.PropTypes.string,
  month: React.PropTypes.string,
  crop: React.PropTypes.string,
  variety: React.PropTypes.string,
  county: React.PropTypes.string,
  town: React.PropTypes.string,
};

PostDetail.defaultProps = {
  uri: 'https://images.unsplash.com/photo-1453053507108-9f5456eb481f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=e0d75a1d1e2605e4c9f9302de0679508',
};

function _injectPropsFromStore(state) {
  return {
    listData: state.search.postList,
  };
}

const _injectPropsFormActions = {
  requestSearchPost,
};

export default connect(_injectPropsFromStore, _injectPropsFormActions)(PostDetail);
