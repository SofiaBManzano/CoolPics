// Fichero src/services/api.js
const callToApi = () => {
  const randomNum = Math.floor(Math.random() * 100);
  return fetch(`https://picsum.photos/v2/list?page=${randomNum}&limit=9
  `)
    .then((response) => response.json())
    .then((data) =>
      data.map((response) => ({
        id: response.id,
        url: response.url,
        author: response.author,
        download_url:
          response.download_url.split("/").slice(0, -2).join("/") + "/800/1200",
      }))
    );
};

export default callToApi;
