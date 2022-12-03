import * as S from './styles';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { LinkWrapper } from '../../Components/LinkWrapper';

export function AboutTemplate() {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>
      <S.Heading>My Trips</S.Heading>
      <S.Body>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          pariatur magni quod. Nemo natus dolore necessitatibus dolorum commodi
          quod quisquam esse iste unde modi eum, totam non? Nam id maiores cum
          ad facilis tempore porro voluptates minus eum quae. Aliquam
          consectetur dolor voluptatum assumenda saepe labore accusamus,
          suscipit eos corrupti?
        </p>
      </S.Body>
    </S.Content>
  );
}
