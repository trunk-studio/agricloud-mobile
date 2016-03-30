import React, {
  ScrollView,
  Dimensions,
} from 'react-native';
import CateItem from '../components/CateItem';
import { connect } from 'react-redux';

const windowSize = Dimensions.get('window');
const styles = React.StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgb(240, 240, 240)',
    paddingTop: 65,
    height: windowSize.height,
  },
});

function Catogory() {
  return (
    <ScrollView style={styles.wrapper}>
      <CateItem key={0} title={'熱門焦點'} uri={'https://unsplash.it/200/120?image=58'} />
      <CateItem key={1} title={'觀光人氣'} uri={'https://unsplash.it/200/120?image=90'} />
      <CateItem key={2} title={'農業研究'} uri={'https://unsplash.it/200/120?image=93'} />
      <CateItem key={3} title={'特色產品'} uri={'https://unsplash.it/200/120?image=30'} />
    </ScrollView>
  );
}

function _injectPropsFromStore() {
  return {
  };
}

const _injectPropsFormActions = {
};

export default connect(_injectPropsFromStore, _injectPropsFormActions)(Catogory);
