import { useEffect } from 'react';

import { noop } from 'utils';

// eslint-disable-next-line react-hooks/exhaustive-deps
const useMount = (onMount = noop) => useEffect(onMount, []);

export default useMount;
