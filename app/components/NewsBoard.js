import React, {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  newsItem: {
    flexDirection: 'row',
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  newsConent: {
    flex: 8,
  },
  newsIcon: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
  },
  icon: {
    fontSize: 40,
    color: '#359ac0',
  },
  boardBar: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    backgroundColor: '#359ac0',
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  newsTitle: {
    fontSize: 19,
    fontWeight: '500',
    lineHeight: 25,
    color: '#333',
    marginTop: 10,
    marginBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  newsInfo: {
    fontSize: 15,
    lineHeight: 20,
    color: '#555',
    marginBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default function NewsBoard(props) {
  return (
    <View>
      <Text style={styles.boardBar}>{props.boardTitle}</Text>
      <View style={styles.newsItem}>
        <View style={styles.newsConent}>
          <Text style={styles.newsTitle}>天天五蔬果營養課程活動</Text>
          <Text style={styles.newsInfo}>宣導健康飲食原則養成天天攝取五蔬果的習慣</Text>
        </View>
        <View style={styles.newsIcon}>
          <Icon name={'angle-right'} style={ styles.icon } />
        </View>
      </View>
      <View style={styles.newsItem}>
        <View style={styles.newsConent}>
          <Text style={styles.newsTitle}>好康大放送！食安守門站運動焦點活動</Text>
          <Text style={styles.newsInfo}>農委會致力打造安全、安心的農產品供應鏈</Text>
        </View>
        <View style={styles.newsIcon}>
          <Icon name={'angle-right'} style={ styles.icon } />
        </View>
      </View>
    </View>
  );
}

NewsBoard.propTypes = {
  boardTitle: React.PropTypes.string,
};

NewsBoard.defaultProps = {
  boardTitle: '',
};
