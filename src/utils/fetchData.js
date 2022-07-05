


  export const exerciseOptions = {

      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'e3327e0e5bmshe691114368bf7e1p10d086jsn4c88ecb7ef11',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };
    export const youtubeOptions = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'e3327e0e5bmshe691114368bf7e1p10d086jsn4c88ecb7ef11',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
      }
    };

    export const fetchData = async (url, options) => {
      const res = await fetch(url, options);
      const data = await res.json();
    
      return data;
    };
    