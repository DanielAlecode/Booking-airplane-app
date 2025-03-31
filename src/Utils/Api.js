export const fetchCountries = () => {
  return fetch('https://restcountries.com/v3.1/region/americas')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Fallo al obtener países');
      }
      return response.json();
    });
};
