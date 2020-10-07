export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=4Ljt6RmpeW6g7yR0qjZcDxYJUdksv5g7`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs; //Al ser una funcion asincrona, siempre devuelve una promesa, aunque parezca que devuelve un array.
};
