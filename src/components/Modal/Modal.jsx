import { useEffect } from 'react';
import { StyledButton, StyledOverlay } from './Modal.styled';
import { AdvertInfo } from 'components/AdvertInfo/AdvertInfo';

export const Modal = ({ advert, close }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        close();
      }
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [close]);

  const onBackDropClick = e => {
    if (e.currentTarget === e.target) {
      close();
    }
  };

  return (
    <StyledOverlay onClick={onBackDropClick}>
      <div>
        <StyledButton onClick={close} />
        <AdvertInfo advert={advert} />
      </div>
    </StyledOverlay>
  );
};
