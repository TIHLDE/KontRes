import Image from "next/image";
import LogoSvg from "./Logo.svg";

export default function Logo() {
  return (
    <Image
      src={LogoSvg}
      width={150}
      alt='Tihldes logo'
      style={{ filter: "invert(1)", marginBottom: -8 }}
    />
  );
}
