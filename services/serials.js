export const getSerials = async () => {
    const response = await fetch(`${process.env.DB_HOST}/api/serials?populate=*`, { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
  
    if (!response.ok) throw new Error("Unable to fetch posts.");
  
    return response.json();
};
export const getSerial = async (slug) => {
    const response = await fetch(`${process.env.DB_HOST}/api/serials?filters[slug]=${slug}&populate=*`, { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
  
    if (!response.ok) throw new Error("Unable to fetch posts.");
  
    return response.json();
};