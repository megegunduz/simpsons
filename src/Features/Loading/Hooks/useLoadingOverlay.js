import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { LoadingSlice } from '..';
import { uniqueId } from 'lodash';

export const useLoadingOverlay = isLoading => {
    const dispatch = useDispatch();
    const uniqueID = useRef(uniqueId()).current;

    useEffect(() => {
        if (isLoading) {
            dispatch(LoadingSlice.actions.addToAwaitedJobs(uniqueID));
        } else if (isLoading === false) {
            dispatch(LoadingSlice.actions.removeFromAwaitedJobs(uniqueID));
        }
    }, [dispatch, isLoading, uniqueID]);

    useEffect(() => {
        return () => {
            dispatch(LoadingSlice.actions.removeFromAwaitedJobs(uniqueID));
        };
    }, [dispatch, uniqueID]);

    return uniqueID;
};
