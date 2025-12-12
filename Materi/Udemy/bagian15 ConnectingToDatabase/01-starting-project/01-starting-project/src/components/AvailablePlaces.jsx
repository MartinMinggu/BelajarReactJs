import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import { apiBackend, get } from '../common/commonApi.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  useEffect(() => {
    const api = apiBackend + '/places';
    // fetchApi(api, (data) => { setAvailablePlaces(data.places || []) });
    get(api, data => setAvailablePlaces(data.places || []))
  }, []);
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
