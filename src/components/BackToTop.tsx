import {PADDING} from '@/styles/constants';
import {Button, Icon} from '@chakra-ui/react';
import {useState, useEffect} from 'react';
import {FiArrowUp} from 'react-icons/fi';

const BackToTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBtn(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showBtn) return null;

  return (
    <Button
      className='btt-btn'
      position='fixed'
      bottom={4}
      right={PADDING}
      padding={2}
      borderRadius='50%'
      aspectRatio='1'
      onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
    >
      <Icon width={16} height={16} as={FiArrowUp} />
    </Button>
  );
};

export default BackToTop;
