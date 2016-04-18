import React, {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';

const windowSize = Dimensions.get('window');
const styles = StyleSheet.create({
  cover: {
    backgroundColor: 'rgb(240, 240, 240)',
    width: windowSize.width,
    position: 'absolute',
    left: 0,
    opacity: 0.9,
  },
  text: {
    fontSize: 34,
    textAlign: 'center',
    color: '#eee',
    letterSpacing: 1,
    fontWeight: '600',
    textShadowColor: '#444',
    textShadowOffset: { width: 1, height: 1 },
  },
});

export default function CoverCard(props) {
  return (
    <View>
      <Image source={{ uri: props.uri }}
        style={[styles.cover, { height: props.height, top: props.top }]}
      />
      <Text style={[styles.text,
        { height: props.height + 20, paddingTop: props.height / 2 + props.txtTop }]}
      >
        {props.title}
      </Text>
    </View>
  );
}

CoverCard.propTypes = {
  title: React.PropTypes.string,
  index: React.PropTypes.number,
  top: React.PropTypes.number,
  txtTop: React.PropTypes.number,
  height: React.PropTypes.number,
  uri: React.PropTypes.string,
};

CoverCard.defaultProps = {
  title: '',
  top: 0,
  txtTop: 0,
  height: 200,
  uri: 'https://unsplash.it/400/400/?random',
};
