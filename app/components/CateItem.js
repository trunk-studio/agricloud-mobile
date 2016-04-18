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
    marginLeft: 30,
    marginRight: 30,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    // shadowOpacity: 1,
    // shadowColor: 'rgba(147, 147, 147, 0.6)',
    // shadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
  },
  titleBar: {
    flexDirection: 'row',
  },
  titles: {
    flex: 4,
    fontWeight: '400',
    fontSize: 18,
    color: '#064c69',
    letterSpacing: 1,
    paddingLeft: 20,
  },
  subTitles: {
    flex: 5,
    fontSize: 16,
    marginLeft: 15,
    color: '#064c69',
  },
  commentBody: {
    flex: 1,
    height: 30 * PIXEL_RATIO,
    justifyContent: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    top: 5,
    marginLeft: 10,
    borderRadius: 10,
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
          <View style={styles.titleBar}>
            <Text style={styles.titles}>{props.title}</Text>
            <Text style={styles.subTitles}>{props.subTitle}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

CateItem.propTypes = {
  title: React.PropTypes.string,
  subTitle: React.PropTypes.string,
  mIndex: React.PropTypes.number,
  uri: React.PropTypes.string,
};

CateItem.defaultProps = {
  uri: 'https://unsplash.it/300/400/?random',
};
