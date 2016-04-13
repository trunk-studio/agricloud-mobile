import React, {
  StyleSheet,
  PixelRatio,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const PIXEL_RATIO = PixelRatio.get();
const styles = StyleSheet.create({
  commentContent: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    shadowOpacity: 1,
    shadowColor: 'rgba(147, 147, 147, 0.6)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  titles: {
    fontWeight: '400',
    fontSize: 20,
    color: '#333',
    // letterSpacing: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  commentBody: {
    flex: 10,
    flexDirection: 'column',
    height: 30 * PIXEL_RATIO,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    borderRadius: 3,
    // width: windowSize.width * 0.4,
    flex: 9,
    flexDirection: 'column',
    height: 30 * PIXEL_RATIO,
    marginRight: 10,
  },
});

export default function CateItem(props) {
  function pressHandle() {
    Actions.postList({
      mIndex: props.mIndex,
      title: props.title,
    });
  }
  return (
    <TouchableOpacity underlayColor={"#f3f3f3"} onPress={pressHandle}>
      <View style={styles.commentContent}>
        <Image source={{ uri: props.uri }} style={ styles.avatar } />
        <View style={styles.commentBody}>
          <Text style={styles.titles}>
            {props.title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

CateItem.propTypes = {
  title: React.PropTypes.string,
  mIndex: React.PropTypes.number,
  uri: React.PropTypes.string,
};

CateItem.defaultProps = {
  title: '標題',
  uri: 'https://unsplash.it/300/400/?random',
};
