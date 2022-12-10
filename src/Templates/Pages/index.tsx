import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { ButtonDarkMode } from '../../Components/ButtonDarkMode';

import { LinkWrapper } from '../../Components/LinkWrapper';
import useAppData from '../../data/useAppContext';
import { PageTemplateProps } from '../../types/types';

export function PageTemplate({ heading, body }: PageTemplateProps) {
  const { theme } = useAppData();
  return (
    <div className={`${theme}`}>
      <div className="flex h-screen text-darkColor dark:text-white dark:bg-darkColor">
        <div
          className={`   max-w-80 flex justify-center flex-col items-center mx-auto`}
        >
          <LinkWrapper href="/">
            <CloseOutline size={32} />
          </LinkWrapper>
          <ButtonDarkMode />
          <h1 className="text-5rem ">{heading}</h1>
          <div
            className="text-2xl text-justify hover:brightness-125"
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </div>
      </div>
    </div>
  );
}
