import * as S from './styles';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { LinkWrapper } from '../../Components/LinkWrapper';
import { PageTemplateProps } from '../../types/types';

export function PageTemplate({ heading, body }: PageTemplateProps) {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>
      <S.Heading>{heading} oi</S.Heading>
      <S.Body>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </S.Body>
    </S.Content>
  );
}
