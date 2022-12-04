import dynamic from 'next/dynamic';
import { LinkWrapper } from '../../Components/LinkWrapper';
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';
import { MapProps } from '../../types/types';

const Map = dynamic(() => import('../../Components/Map'), {
  ssr: false,
});

export function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} />
      </LinkWrapper>
      <Map places={places} />
    </>
  );
}
