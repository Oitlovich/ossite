export const regUser = async (email, name, password) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/local/register`, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: name,
            email: email,
            password: password,
        })
    });
  
    if (!response.ok) {
        return null
    }
  
    return response.json();
};