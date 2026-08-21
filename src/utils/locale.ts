/**
 * Marketing-site locale helpers.
 * Ingesteld voor Decernia: Nederlands ('nl') als basistaal, Engels ('en') als secundaire taal.
 */

export type MarketingLocale = 'nl' | 'en';

export function getMarketingLocale(
  pathname: string,
  currentLocale?: string | undefined
): MarketingLocale {
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'en';
  if (currentLocale === 'en') return 'en';
  return 'nl';
}

export function localePath(locale: MarketingLocale, path = ''): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === 'en') {
    if (clean === '/' || clean === '') return '/en';
    return `/en${clean}`;
  }
  return clean === '' ? '/' : clean;
}
