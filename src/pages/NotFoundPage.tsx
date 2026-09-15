import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <section className="container mx-auto px-4 py-24 text-center" aria-labelledby="not-found-title">
    <p className="editorial-kicker mb-4">404</p>
    <h1 id="not-found-title" className="font-heading text-4xl font-semibold text-charcoal-900">
      Page not found
    </h1>
    <p className="mx-auto mt-4 max-w-xl text-lg text-charcoal-600">
      The page you requested does not exist or may have moved.
    </p>
    <Link
      to="/"
      className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 font-semibold text-white transition hover:bg-primary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      Return home
    </Link>
  </section>
);

export default NotFoundPage;
