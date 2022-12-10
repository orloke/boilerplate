import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

import { LinkWrapper } from '../../Components/LinkWrapper';
import { PageTemplateProps } from '../../types/types';

export function PageTemplate({ heading, body }: PageTemplateProps) {
  return (
    <div className="h-full max-w-80 flex justify-center flex-col items-center mx-auto">
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>
      <h1 className="text-5rem">{heading}</h1>
      <div
        className="text-2xl text-justify"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
  );
}
