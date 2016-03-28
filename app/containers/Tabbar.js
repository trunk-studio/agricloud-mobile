import React, {
  StyleSheet,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import Tabs from 'react-native-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'rgba(83, 83, 82, 0.25)',
  },
  tab: {
    textAlign: 'center',
    color: 'rgba(83, 83, 82, 1)',
    paddingTop: 5,
  },
  tabTitle: {
    fontSize: 9,
    fontWeight: '400',
    letterSpacing: 1,
  },
  icon: {
    lineHeight: 15,
    fontSize: 18,
  },
});

export default function Tabbar(props) {
  function pressHandle() {
    Actions.PostList({
      tab: 'favs',
    });
  }
  return (
      <Tabs selected={ props.tab } style={ styles.tabBar }>
        <Text
          name="favs"
          style={ styles.tab }
          selectedStyle={{ color: 'rgb(63, 142, 247)' }}
          onPress={pressHandle}
        >
          <Icon name="heart" style={ styles.icon } />{"\n"}
          <Text style={ styles.tabTitle }>我的收藏</Text>
        </Text>
        <Text
          name="discover"
          style={ styles.tab }
          selectedStyle={{ color: 'rgb(63, 142, 247)' }}
          onPress={pressHandle}
        >
          <Icon name="rocket" style={ styles.icon } />{"\n"}
          <Text style={ styles.tabTitle }>探索</Text>
        </Text>
        <Text
          name="news"
          style={ styles.tab }
          selectedStyle={{ color: 'rgb(63, 142, 247)' }}
          onPress={pressHandle}
        >
          <Icon name="newspaper-o" style={ styles.icon } />{"\n"}
          <Text style={ styles.tabTitle }>最新資訊</Text>
        </Text>
        <Text
          name="contact"
          style={ styles.tab }
          selectedStyle={{ color: 'rgb(63, 142, 247)' }}
          onPress={pressHandle}
        >
          <Icon name="mobile" style={ styles.icon } />{"\n"}
          <Text style={ styles.tabTitle }>聯絡我們</Text>
        </Text>
      </Tabs>
    );
}

function _injectPropsFromStore() {
  return {
    postList: state.search.postList,
  };
}
}

const _injectPropsFormActions = {
};

Tabbar.propTypes = {
  tab: React.PropTypes.string,
};

Tabbar.defaultProps = {
  tab: 'discover',
};

export default connect(_injectPropsFromStore, _injectPropsFormActions)(Tabbar);
