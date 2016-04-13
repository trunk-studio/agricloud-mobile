import React, {
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';
import ListItem from './ListItem';

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
  },
  defaultTxt: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default function ScrollList(props) {
  const { listData } = props;
  const listContainer = [];
  if (listData.length > 0) {
    listData.forEach((post, i) => {
      listContainer.push(
        <ListItem
          key={i}
          index={i}
          urlKey={post.key}
          type={post.type}
          month={post.month}
          crop={post.title}
          variety={post.variety}
          county={post.county}
          onItemPress={props.onItemPress}
        />
      );
    });
  } else {
    listContainer.push(
      <Text style={styles.defaultTxt} key={0}>沒有資料囉！</Text>
    );
  }
  return (
    <ScrollView
      keyscrollEventThrottle={200}
      style={styles.container}
    >
      {listContainer}
    </ScrollView>
  );
}

ScrollList.propTypes = {
  listData: React.PropTypes.array,
  onItemPress: React.PropTypes.func,
};

ScrollList.defaultProps = {
  listData: [],
};
