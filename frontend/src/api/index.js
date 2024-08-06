export function registerUser(signupbody) {
    const body = JSON.stringify(signupbody);

    return fetch(`${process.env.REACT_APP_API_BASE_URL}/users/register`, {
        method: 'POST', // Ensure this is 'POST'
        headers: {
            'Content-Type': 'application/json',
        },
        body: body,
    });
}

export function loginUser(loginBody) {
    const body = JSON.stringify(loginBody);

    return fetch(`${process.env.REACT_APP_API_BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body,
    });
}