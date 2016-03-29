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
    marginTop: 3,
    marginBottom: 3,
    padding: 15,
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
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
  },
  commentBody: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  commentText: {
    flex: 1,
    flexDirection: 'row',
  },
  avatar: {
    borderRadius: 3,
    width: 120,
    height: 90,
    marginRight: 10,
  },
});

export default function PostListItem(props) {
  function pressHandle() {
    Actions.postDetail({
      index: props.index,
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

PostListItem.propTypes = {
  title: React.PropTypes.string,
  uri: React.PropTypes.string,
  index: React.PropTypes.number,
};

PostListItem.defaultProps = {
  title: '新聞標題',
  uri: 'https://unsplash.it/300/400/?random',
};
