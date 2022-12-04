import { CloseOutline } from '@styled-icons/evaicons-outline';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { LinkWrapper } from '../../Components/LinkWrapper';
import { PlaceTemplateProps } from '../../types/types';
import * as S from './styles';

export function PlaceTemplate({ place }: PlaceTemplateProps) {
  const router = useRouter();

  if (router.isFallback) return <div>loading...</div>;
  return (
    <>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>
      <S.Wrapper>
        <S.Container>
          <S.Heading> {place.name} </S.Heading>
          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description.html }}
          />
          <S.Gallery>
            {place.galery.map(item => (
              <Image
                key={item.url}
                src={item.url}
                alt={place.name}
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
