import React, {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

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
    width: 120,
    height: 90,
    marginRight: 10,
  },
});

export default function ListItem(props) {
  function onItemPress() {
    props.onItemPress({
      index: props.index,
      type: props.type,
      month: props.month,
      crop: props.crop,
      variety: props.variety,
      county: props.county,
      town: props.town,
      uri: props.uri,
    });
  }
  return (
    <TouchableOpacity underlayColor={"#f3f3f3"} onPress={onItemPress}>
      <View style={styles.commentContent}>
        <Image source={{ uri: props.uri }} style={ styles.avatar } />
        <View style={styles.commentBody}>
          <Text style={styles.titles}>{props.crop}</Text>
          <Text style={styles.titles}>{props.variety}</Text>
          <Text style={styles.titles}>{props.county} {props.town}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

ListItem.propTypes = {
  index: React.PropTypes.number,
  uri: React.PropTypes.string,
  type: React.PropTypes.string,
  month: React.PropTypes.string,
  crop: React.PropTypes.string,
  variety: React.PropTypes.string,
  county: React.PropTypes.string,
  town: React.PropTypes.string,
  onItemPress: React.PropTypes.func,
};

ListItem.defaultProps = {
  uri: 'https://unsplash.it/150/100/?random',
};
