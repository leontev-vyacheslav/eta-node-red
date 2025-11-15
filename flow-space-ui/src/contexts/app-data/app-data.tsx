import { createContext, useContext } from 'react';
import type { AppBaseProviderProps } from '../../models/app-base-provider-props';
import { type AppDataContextHealthCheckEndpointsModel, useAuthData } from './use-health-data';
import { type AppDataContextQuickHelpRefernceEndpointsModel, useQuickHelpRefernceData } from './use-quick-help-reference-data';
import { useFlowData, type AppDataContextFlowEndpointsModel } from './flows/use-flow-data';

export type AppDataContextModel =
    & AppDataContextHealthCheckEndpointsModel
    & AppDataContextQuickHelpRefernceEndpointsModel
    & AppDataContextFlowEndpointsModel;

const AppDataContext = createContext<AppDataContextModel>({} as AppDataContextModel);
const useAppData = () => useContext(AppDataContext);

function AppDataProvider(props: AppBaseProviderProps) {
    const auth = useAuthData();
    const quickHelpRefernce = useQuickHelpRefernceData();
    const flow = useFlowData();

    return (
        <AppDataContext.Provider
            value={{
                ...auth,
                ...quickHelpRefernce,
                ...flow
            }}
            {...props}
        />
    );
}

export { AppDataProvider, useAppData };
