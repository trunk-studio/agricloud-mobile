import React, {
  StyleSheet,
  PixelRatio,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

const PIXEL_RATIO = PixelRatio.get();
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
    fontWeight: '400',
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
  commentBody: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  avatar: {
    borderRadius: 3,
    width: 40 * PIXEL_RATIO,
    height: 30 * PIXEL_RATIO,
    marginRight: 10,
  },
});

export default function ListItem(props) {
  function onItemPress() {
    props.onItemPress({
      index: props.index,
      urlKey: props.urlKey,
      type: props.type,
      month: props.month,
      crop: props.crop,
      variety: props.variety,
      county: props.county,
    });
  }
  function formatUrlKey(num, length) {
    let r = num.toString();
    while (r.length < length) {
      r = `0${r}`;
    }
    return r;
  }
  return (
    <TouchableOpacity underlayColor={"#f3f3f3"} onPress={onItemPress}>
      <View style={styles.commentContent}>
        <Image source={{ uri: `http://data.gov.tw/sites/default/files/visual/fruit/${formatUrlKey(props.urlKey, 3)}.jpg` }} style={ styles.avatar } />
        <View style={styles.commentBody}>
          <Text style={styles.titles}>{props.crop}</Text>
          <Text style={styles.titles}>{props.variety}</Text>
          {/*<Text style={styles.titles}>{props.county}</Text>*/}
        </View>
      </View>
    </TouchableOpacity>
  );
}

ListItem.propTypes = {
  urlKey: React.PropTypes.string,
  index: React.PropTypes.number,
  type: React.PropTypes.string,
  month: React.PropTypes.array,
  crop: React.PropTypes.string,
  variety: React.PropTypes.array,
  county: React.PropTypes.array,
  onItemPress: React.PropTypes.func,
};

ListItem.defaultProps = {
  onItemPress: null,
};
