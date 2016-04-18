import React, {
  ScrollView,
  Dimensions,
} from 'react-native';
import CateItem from '../components/CateItem';

const windowSize = Dimensions.get('window');
const styles = React.StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgb(96, 179, 203)',
    paddingTop: 80,
    marginBottom: 50,
    height: windowSize.height,
  },
});

export default function Category() {
  return (
    <ScrollView style={styles.wrapper}>
      <CateItem key={0} mIndex={1} title={'一月'} subTitle={'January'} uri={'https://unsplash.it/200/120?image=58'} />
      <CateItem key={1} mIndex={2} title={'二月'} subTitle={'February'} uri={'https://unsplash.it/200/120?image=90'} />
      <CateItem key={2} mIndex={3} title={'三月'} subTitle={'March'} uri={'https://unsplash.it/200/120?image=93'} />
      <CateItem key={3} mIndex={4} title={'四月'} subTitle={'April'} uri={'https://unsplash.it/200/120?image=30'} />
      <CateItem key={4} mIndex={5} title={'五月'} subTitle={'Ｍay'} uri={'https://unsplash.it/200/120?image=56'} />
      <CateItem key={5} mIndex={6} title={'六月'} subTitle={'June'} uri={'https://unsplash.it/200/120?image=91'} />
      <CateItem key={6} mIndex={7} title={'七月'} subTitle={'July'} uri={'https://unsplash.it/200/120?image=94'} />
      <CateItem key={7} mIndex={8} title={'八月'} subTitle={'August'} uri={'https://unsplash.it/200/120?image=36'} />
      <CateItem key={8} mIndex={9} title={'九月'} subTitle={'September'} uri={'https://unsplash.it/200/120?image=50'} />
      <CateItem key={9} mIndex={10} title={'十月'} subTitle={'October'} uri={'https://unsplash.it/200/120?image=99'} />
      <CateItem key={10} mIndex={11} title={'十一月'} subTitle={'November'} uri={'https://unsplash.it/200/120?image=10'} />
      <CateItem key={11} mIndex={12} title={'十二月'} subTitle={'December'} uri={'https://unsplash.it/200/120?image=15'} />
    </ScrollView>
  );
}
