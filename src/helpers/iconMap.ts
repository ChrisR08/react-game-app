import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs';
import {IconType} from 'react-icons';

// key is the parent_platform id
const iconMap: {[key: number]: IconType} = {
  1: FaWindows,
  2: FaPlaystation,
  3: FaXbox,
  4: MdPhoneIphone,
  5: FaApple,
  6: FaLinux,
  7: SiNintendo,
  8: FaAndroid,
  14: BsGlobe,
};

export default iconMap;
