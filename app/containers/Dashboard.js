import React, {
  Component,
  Alert,
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';
import CoverCard from '../components/CoverCard';
import InfoBar from '../components/InfoBar';
import NewsBoard from '../components/NewsBoard';
import { requestToday } from '../actions/DateActions';
import { requestSetLocation } from '../actions/GeoActions';
import { requestWeather } from '../actions/WeatherActions';
import { connect } from 'react-redux';
// import { Actions } from 'react-native-router-flux';

const windowSize = Dimensions.get('window');
const styles = StyleSheet.create({
  icon: {
    lineHeight: 15,
    fontSize: 20,
  },
});

export default class Dashboard extends Component {
  componentDidMount() {
    this.props.requestToday();
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.props.requestSetLocation(position);
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  componentWillReceiveProps(nextProps) {
    const { countryName, locationName } = nextProps;
    if (locationName !== undefined && locationName !== this.props.locationName) {
      this.props.requestWeather({ name: locationName, country: countryName });
    }
  }
  render() {
    const { month, date, weekday, temp, desc, iconId } = this.props;
    return (
      <View style={styles.wrapper}>
        <CoverCard uri={'https://unsplash.it/400/400/?image=429'} title={'蔬果寶'} height={windowSize.height * 0.3} top={20} />
        <InfoBar month={month} date={date} weekday={weekday} temp={temp} desc={desc}
          iconId={iconId} locationName={this.props.locationName}
        />
        <NewsBoard boardTitle={'今日舉行的活動'} />
      </View>
    );
  }
}

Dashboard.propTypes = {
  requestSearchPost: React.PropTypes.func,
  requestToday: React.PropTypes.func,
  requestSetLocation: React.PropTypes.func,
  requestWeather: React.PropTypes.func,
  uri: React.PropTypes.string,
  month: React.PropTypes.number,
  date: React.PropTypes.number,
  weekday: React.PropTypes.string,
  desc: React.PropTypes.string,
  iconId: React.PropTypes.string,
  listData: React.PropTypes.array,
  temp: React.PropTypes.number,
  countryName: React.PropTypes.string,
  locationName: React.PropTypes.string,
};

Dashboard.defaultProps = {
  requestSearchPost: null,
  requestToday: null,
  requestSetLocation: null,
  requestWeather: null,
  uri: 'https://unsplash.it/400/400/?random',
  month: 1,
  date: 1,
};

function _injectPropsFromStore(state) {
  return {
    month: state.getToday.month,
    date: state.getToday.date,
    weekday: state.getToday.weekday,
    desc: state.weather.desc,
    iconId: state.weather.iconId,
    countryName: state.geo.countryName,
    locationName: state.geo.locationName,
    temp: state.weather.temp,
  };
}

const _injectPropsFormActions = {
  requestToday,
  requestSetLocation,
  requestWeather,
};

export default connect(_injectPropsFromStore, _injectPropsFormActions)(Dashboard);
