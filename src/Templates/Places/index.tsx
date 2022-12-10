import { CloseOutline } from '@styled-icons/evaicons-outline';
import Image from 'next/image';
import { ButtonDarkMode } from '../../Components/ButtonDarkMode';
import { LinkWrapper } from '../../Components/LinkWrapper';
import useAppData from '../../data/useAppContext';
import { PlaceTemplateProps } from '../../types/types';

export function PlaceTemplate({ place }: PlaceTemplateProps) {
  const { theme } = useAppData();
  return (
    <div className={`${theme}`}>
      <div className="bg-red-500">
        <LinkWrapper href="/">
          <CloseOutline size={32} aria-label="Go back to map" />
        </LinkWrapper>
        <ButtonDarkMode />
      </div>
      <div className="p-10 dark:bg-darkColor text-darkColor dark:text-white">
        <main className="max-w-80 m-auto">
          <h1 className="text-5rem mb-4"> {place.name} </h1>
          <div
            className="text-2xl text-justify mb-8"
            dangerouslySetInnerHTML={{ __html: place.description.html }}
          />
          <div className="grid gap-8">
            {place.galery.map(item => (
              <Image
                className="galleryImg bg-[length:80rem_14rem] animate-placeholderShimmer"
                key={item.url}
                src={item.url}
                alt={place.name}
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
