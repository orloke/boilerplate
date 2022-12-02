import { TileLayer, Marker, Popup } from 'react-leaflet';
import * as S from './styles';

type Place = {
  id: string;
  name: string;
  slug: string;
  location: {
    latitude: number;
    longitude: number;
  };
};

export type MapProps = {
  places?: Place[];
};

export default function Map({ places }: MapProps) {
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
        />
      ))}
    </S.MapContainerStyled>
  );
}
