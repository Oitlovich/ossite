export const getFilms = async () => {
    const response = await fetch(`${process.env.DB_HOST}/api/films?populate=*`, { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
  
    if (!response.ok) throw new Error("Unable to fetch posts.");
  
    return response.json();
};
export const getFilm = async (slug) => {
    const response = await fetch(`${process.env.DB_HOST}/api/films?filters[slug]=${slug}&populate=*`, { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
  
    if (!response.ok) throw new Error("Unable to fetch posts.");
  
    return response.json();
};
// export const getFilmPageContent = async () => {
//     const response = await fetch(`${process.env.DB_HOST}/api/film-page?populate=*`, { 
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });
  
//     if (!response.ok) throw new Error("Unable to fetch posts.");
  
//     return response.json();
// };