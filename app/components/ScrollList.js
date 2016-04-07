import React, {
  ScrollView,
  Text,
} from 'react-native';
import ListItem from './ListItem';

export default function ScrollList(props) {
  const { listData } = props;
  const listContainer = [];
  if (listData.length > 0) {
    listData.forEach((post, i) => {
      listContainer.push(
        <ListItem
          key={i}
          index={i}
          type={post.type}
          month={post.month}
          crop={post.crop}
          variety={post.variety}
          county={post.county}
          town={post.town}
          uri={post.uri}
          onItemPress={props.onItemPress}
        />
      );
    });
  } else {
    listContainer.push(
      <Text style={[{ textAlign: 'center' }, { marginTop: 10 }]} key={0}>沒有資料囉！</Text>
    );
  }
  return (
    <ScrollView
      removeClippedSubviews
      keyscrollEventThrottle={200}
      automaticallyAdjustContentInsets={false}
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
