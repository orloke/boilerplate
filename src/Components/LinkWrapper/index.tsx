import Link from 'next/link';
import * as S from './styles';

type LinkWrapperProps = {
  href: string;
  children: React.ReactNode;
};

export function LinkWrapper(props: LinkWrapperProps) {
  return (
    <S.Wrapper>
      <Link href={props.href}>{props.children}</Link>
    </S.Wrapper>
  );
}
