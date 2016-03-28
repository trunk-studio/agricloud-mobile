import React, { StyleSheet } from 'react-native';
import SearchBar from 'react-native-search-bar';
import { connect } from 'react-redux';
import {
  requestSearchPost,
} from '../actions/SearchPostActions';

const styles = StyleSheet.create({
  searchBar: {
    padding: 30,
    marginBottom: 10,
  },
});

export default function SearchPostBar(props) {
  function _onChangeText(e) {
    if (e.length > 0) {
      props.requestSearchPost(e, '20km', null);
    }
  }

  return (
    <SearchBar placeholder={'搜尋'}
      style={styles.searchBar}
      onChangeText={_onChangeText}
      onSearchButtonPress={_onChangeText}
      onCancelButtonPress={_onChangeText}
    />
  );
}

SearchPostBar.propTypes = {
  requestSearchPost: React.PropTypes.func,
};

SearchPostBar.defaultProps = {
  requestSearchPost: null,
};

function _injectPropsFromStore() {
  return {
  };
}

const _injectPropsFormActions = {
  requestSearchPost,
};

export default connect(_injectPropsFromStore, _injectPropsFormActions)(SearchPostBar);
