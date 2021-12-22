import Geolocation from '@react-native-community/geolocation';

export default function GetLocation() {
  Geolocation.setRNConfiguration({
    authorizationLevel: 'whenInUse',
    skipPermissionRequests: false,
  });
  return Geolocation.getCurrentPosition(
    position => {
      return position;
    },
    error => {
      console.log('error', error);
    },
    {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000},
  );
}
