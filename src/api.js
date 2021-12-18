const API_KEY = 'da53fde37465a3704f99326877a0885f';

export const movieApi = {
  popular: () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        return data.results;
      });
  },

  topRated: () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        return data.results;
      });
  },

  upcoming: () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        return data.results;
      });
  },
};

export const tvApi = {
  popular: () => {
    return fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        return data.results;
      });
  },

  topRated: () => {
    return fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        return data.results;
      });
  },

  airingToday: () => {
    return fetch(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        return data.results;
      });
  },
};