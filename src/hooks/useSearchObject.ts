import { useLocation } from 'react-router';

const useSearchObject = <T>() => {
  const location = useLocation();
  return Object.fromEntries(new URLSearchParams(location.search) as any) as T;
};

export default useSearchObject;
