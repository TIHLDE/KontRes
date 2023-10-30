import Image, { ImageProps } from 'next/image';
import LogoSvg from './Logo.svg';

const Logo = ({ onClick, ...props }: Omit<ImageProps, 'src' | 'alt'>) => {
  return (
    <Image
      width={150}
      onClick={onClick}
      style={{
        filter: 'invert(1)',
        marginBottom: -8,
        cursor: onClick ? 'pointer' : 'unset',
      }}
      {...props}
      src={LogoSvg}
      alt='Tihldes logo'
    />
  );
};

export default Logo;
