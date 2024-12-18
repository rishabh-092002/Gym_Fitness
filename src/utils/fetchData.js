export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "05c7aa5bd8mshb3fc5054bd2a251p13c09cjsn521339c8902f",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '05c7aa5bd8mshb3fc5054bd2a251p13c09cjsn521339c8902f',
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
