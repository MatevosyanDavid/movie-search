import { Suspense } from 'react';

import Loader from 'components/loader';

const withSuspense = Component => props => (
  <Suspense fallback={<Loader />}>
    <Component {...props} />
  </Suspense>
);

export default withSuspense;
