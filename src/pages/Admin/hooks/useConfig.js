import { use } from 'react';
import { ConfigContext } from '../context/ConfigContext';

// ==============================|| CONFIG - HOOKS ||============================== //

export default function useConfig() {
    const context = use(ConfigContext);

    if (!context) throw new Error('useConfig must be used inside ConfigProvider');

    return context;
}
