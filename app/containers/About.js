import React, {
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';
import CoverCard from '../components/CoverCard';

const windowSize = Dimensions.get('window');
const styles = StyleSheet.create({
});

export default function About() {
  return (
    <View style={styles.wrapper}>
      <CoverCard title={'雲端農場'} height={windowSize.height * 0.4} top={20}
        txtTop={20} uri={'https://unsplash.it/400/400?image=75'}
      />
    </View>
  );
}

About.propTypes = {
};

About.defaultProps = {
};
