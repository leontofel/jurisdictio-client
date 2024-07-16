import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../stores/store';

const useAppDispatch: () => AppDispatch = useDispatch;
export default useAppDispatch;
