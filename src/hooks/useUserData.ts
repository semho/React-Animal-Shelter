import { useEffect } from 'react';
import { IUserData, meRequestAsync } from '../shared/store/me/actions';
import { useAppDispatch, useAppSelector } from './hooks';

export function useUserData() {
    // const data = useSelector<RootState, IUserData>(state => state.me.data);
    const data = useAppSelector<IUserData>(state => state.me.data);
    // const loading = useSelector<RootState, boolean>(state => state.me.loading);
    const loading = useAppSelector<boolean>(state => state.me.loading);
    // const token = useSelector<RootState, string | undefined>(state => state.token);
    const token = useAppSelector<string | undefined>(state => state.token);
    const dispatch = useAppDispatch();
    // const dispatch: any = useDispatch();

    useEffect(() => {
      if (!token) return;
      dispatch(meRequestAsync());
    }, [token]);

    return {
      data,
      loading
    };
}
