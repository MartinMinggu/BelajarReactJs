import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import { apiBackend, get } from '../common/commonApi.js';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isLoadingPlace, setIsLoadingPlace] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const api = apiBackend + '/places';
    setIsLoadingPlace(true);
    // fetchApi(api, (data) => { setAvailablePlaces(data.places || []) });
    get(api, data => {

      navigator.geolocation.getCurrentPosition((position) => {
        const sortedPlaces = sortPlacesByDistance(data.places, position.coords.latitude, position.coords.longitude)
        setAvailablePlaces(sortedPlaces || []);
      })
      setIsLoadingPlace(false);
    }, () => setError("gagal mengambil data available places")
    )
  }, []);
  if (error) {
    console.log("error : " + error)
    return <Error title="Error" message={error} />
  }
  return (<>
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isLoadingPlace}
      loadingText="sedang mengambil data"
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  </>
  );
}
