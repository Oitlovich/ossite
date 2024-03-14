export const getActors = async () => {
    const response = await fetch(`${process.env.DB_HOST}/api/actors?populate=*`, { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
  
    if (!response.ok) throw new Error("Unable to fetch posts.");
  
    return response.json();
};