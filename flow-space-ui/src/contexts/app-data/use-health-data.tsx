import { useCallback } from 'react';
import { HttpConstants } from '../../constants/app-http-constants';
import type { Method } from 'axios';
import { useAuthHttpRequest } from './use-auth-http-request';
import routes from '../../constants/app-api-routes';
import type { MessageModel } from '../../models/message-model';

export type GetHealthCheckDataAsyncFunc = () => Promise<MessageModel | null>;

export type AppDataContextHealthCheckEndpointsModel = {
    getHealthCheckDataAsync: GetHealthCheckDataAsyncFunc;
}

export const useAuthData = () => {
    const authHttpRequest = useAuthHttpRequest();

    const getHealthCheckDataAsync = useCallback<GetHealthCheckDataAsyncFunc>(async (): Promise<MessageModel | null> => {
        const response = await authHttpRequest({
            url: `${routes.host}${routes.healthCheck}`,
            method: HttpConstants.Methods.Get as Method,
        }, true);

        if (response && response.status === HttpConstants.StatusCodes.Ok) {

            return response.data as MessageModel;
        }

        return null;
    }, [authHttpRequest]);

    return {
        getHealthCheckDataAsync
    };
}