export function registerUser(signupbody) {
    const body = JSON.stringify(signupbody);

    return fetch(`${process.env.REACT_APP_API_BASE_URL}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body,
    });
}
