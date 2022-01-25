import { City, Country, Servers } from '@/composables/useFilteredSocksProxies/SocksProxies.types';

const sortProxiesByCountryAndCity = (grouped: Servers) =>
  Object.entries(grouped)
    .map(([country, cityMap]) => {
      const cities = Object.entries(cityMap)
        .map(([city, proxyList]) => {
          return { city, proxyList } as City;
        })
        .sort(({ city: a }, { city: b }) => a.localeCompare(b));
      return { country, cities } as Country;
    })
    .sort(({ country: a }, { country: b }) => a.localeCompare(b));

export default sortProxiesByCountryAndCity;
