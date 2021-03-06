/**
 * Asynchronously loads the component for HomePage
 */
import loadable from 'loadable-components';
import LoadingIndicator from 'components/LoadingIndicator';

export default loadable(() => import('./ProductsPage'), {
  LoadingComponent: LoadingIndicator,
});
