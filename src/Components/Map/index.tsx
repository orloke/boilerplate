import { useRouter } from 'next/router';
import { TileLayer, Marker, Popup, MapContainer } from 'react-leaflet';
import useAppData from '../../data/useAppContext';

export default function Map() {
  const router = useRouter();
  const { place } = useAppData();
  return (
    <MapContainer className="w-full h-full" center={[0, 0]} zoom={3}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {place?.map(place => (
        <Marker
          key={`place-${place.id}`}
          position={[place.location.latitude, place.location.longitude]}
          eventHandlers={{
            click: () => {
              router.push(`place/${place.slug}`);
            },
          }}
        >
          <Popup>{place.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
