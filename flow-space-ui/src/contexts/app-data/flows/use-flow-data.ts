import { useCallback } from 'react';
import { HttpConstants } from '../../../constants/app-http-constants';
import routes from '../../../constants/app-api-routes';
import type { Method } from 'axios';
import { useAuthHttpRequest } from '../use-auth-http-request';
import type { FlowModel } from '../../../models/flows/flow-model';
import type { DeviceModel } from '../../../models/flows/device-model';

export type GetFlowListAsyncFunc = () => Promise<FlowModel[] | undefined>;
export type GetDeviceListAsyncFunc = () => Promise<DeviceModel[] | undefined>;

export type AppDataContextFlowEndpointsModel = {
    getFlowListAsync: GetFlowListAsyncFunc;
    getDeviceListAsync: GetDeviceListAsyncFunc;
}

export const useFlowData = () => {
    const authHttpRequest = useAuthHttpRequest();

    const getFlowListAsync = useCallback<GetFlowListAsyncFunc>(async () => {
        const response = await authHttpRequest({
            url: `${routes.host}${routes.flows}`,
            method: HttpConstants.Methods.Get as Method,
        });

        if (response && response.status === HttpConstants.StatusCodes.Ok) {
            return response.data.values as FlowModel[];
        }

    }, [authHttpRequest]);

    const getDeviceListAsync = useCallback<GetDeviceListAsyncFunc>(async () => {
        const response = await authHttpRequest({
            url: `${routes.host}${routes.devices}`,
            method: HttpConstants.Methods.Get as Method,
        });

        if (response && response.status === HttpConstants.StatusCodes.Ok) {
            return response.data.values as DeviceModel[];
        }

    }, [authHttpRequest]);

    return {
        getFlowListAsync,
        getDeviceListAsync
    };
}

