import Platform from '@/models/platform';
import useData from './useData';

const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

export default usePlatforms;
