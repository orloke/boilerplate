import Link from 'next/link';

type LinkWrapperProps = {
  href: string;
  children: React.ReactNode;
};

export function LinkWrapper(props: LinkWrapperProps) {
  return (
    <div className="absolute z-1200 text-blueMarker right-8 top-8 hover:brightness-125 cursor-pointer">
      <Link href={props.href}>{props.children}</Link>
    </div>
  );
}
