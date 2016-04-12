import React, {
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
} from 'react-native';
import { requestSearchPost } from '../actions/SearchActions';
import { connect } from 'react-redux';
import Dimensions from 'Dimensions';

const windowSize = Dimensions.get('window');
const styles = StyleSheet.create({
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
  title: {
    fontSize: 20,
    paddingLeft: 27,
    paddingRight: 27,
    paddingTop: 10,
    paddingBottom: 10,
    lineHeight: 30,
  },
  container: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    marginBottom: 100,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 30,
    backgroundColor: 'white',
    shadowOpacity: 1,
    shadowColor: 'rgba(147, 147, 147, 0.6)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  content: {
    fontSize: 16,
    color: 'rgb(40, 40, 40)',
    lineHeight: 30,
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
      <Text style={ styles.title }>{props.title}</Text>
      <View style={ styles.container }>
        <Text style={ styles.content }>類型：{props.itemType}</Text>
        <Text style={ styles.content }>產季：{props.month}</Text>
        <Text style={ styles.content }>品種：{props.variety}</Text>
        <Text style={ styles.content }>產地：{props.county}</Text>
      </View>
    </ScrollView>
  );
}

PostDetail.propTypes = {
  index: React.PropTypes.number,
  uri: React.PropTypes.string,
  itemType: React.PropTypes.string,
  month: React.PropTypes.array,
  title: React.PropTypes.string,
  variety: React.PropTypes.array,
  county: React.PropTypes.array,
};

PostDetail.defaultProps = {
  uri: 'https://images.unsplash.com/photo-1437750769465-301382cdf094?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=81fddd087f6ab2460e326af2413dc9fd',
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
