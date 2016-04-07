import React, {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

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
    lineHeight: 50,
    letterSpacing: 1,
    textAlign: 'center',
  },
  commentBody: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  avatar: {
    borderRadius: 3,
    width: 200,
    height: 80,
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
