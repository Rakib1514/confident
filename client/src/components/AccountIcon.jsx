import  { useRef, useEffect } from 'react';
import lottie from 'lottie-web';
import animationData from '../assets/icons/account-icon.json';

const AccountIcon = ({ width = 40, height = 40 }) => {
  const container = useRef(null);
  const anim = useRef(null);

  useEffect(() => {
    anim.current = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData,
    });
    return () => anim.current.destroy();
  }, []);

  const handleMouseEnter = () => {
    anim.current.goToAndPlay(0, true);
  };

  return (
    <div
      ref={container}
      onMouseEnter={handleMouseEnter}
      style={{ width, height, cursor: 'pointer' }}
    />
  );
};

export default AccountIcon;
