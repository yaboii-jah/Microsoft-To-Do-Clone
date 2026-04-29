export async function user_login() {
    const data = await fetch(`http://localhost:3000/auth/api/google`, {
        method: 'GET',
        credentials: 'include'
    });
    
    const response = await data.json();

    return response;
}