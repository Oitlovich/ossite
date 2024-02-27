export const getSerials = async () => {
    const response = await fetch(`${process.env.DB_HOST}/api/films?populate=*`, { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
  
    if (!response.ok) throw new Error("Unable to fetch posts.");
  
    return response.json();
};