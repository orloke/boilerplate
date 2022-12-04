import L from 'leaflet';
import { useRouter } from 'next/router';
import { TileLayer, Marker, Popup } from 'react-leaflet';
import { MapProps } from '../../types/types';
import * as S from './styles';

export default function Map({ places }: MapProps) {
  const router = useRouter();
  return (
    <S.MapContainerStyled center={[0, 0]} zoom={3}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {places?.map(place => (
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
    </S.MapContainerStyled>
  );
}
