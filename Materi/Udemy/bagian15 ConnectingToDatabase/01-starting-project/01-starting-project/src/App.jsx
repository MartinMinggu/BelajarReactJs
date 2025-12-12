import { useRef, useState, useCallback, useEffect } from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import { fetchApi, apiBackend, get, put } from './common/commonApi.js';

function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [availablePlaces, setAvailablePlaces] = useState([]);
  useEffect(() => {
    const api = apiBackend + '/user-places';
    get(api, (data) => { setUserPlaces(data.places || []) });



  }, []);
  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      const result = [selectedPlace, ...prevPickedPlaces];
      put(apiBackend + '/user-places', { "places": result }, () => console.log('Berhasil simpan data user-places'));
      return result;
    });
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {

    setUserPlaces((prevPickedPlaces) => {
      const currentPlaces = prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id);
      put(apiBackend + '/user-places', { "places": currentPlaces }, () => console.log('Berhasil hapus data user-places'));
      return currentPlaces;
    }
    );

    setModalIsOpen(false);
  }, []);

  return (
    <>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
        />

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
