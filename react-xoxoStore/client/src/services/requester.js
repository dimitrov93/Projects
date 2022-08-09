const request = async (method, url, data) => {
    console.log('as1');
    try {
    console.log('as2');

        const user = localStorage.getItem('auth');
        const auth = JSON.parse(user || '{}');
        console.log('as3');

        let headers = {}
        if (auth.accessToken) {
            headers['X-Authorization'] = auth.accessToken;
        }
        console.log('as4');


        let buildRequest;

        if (method === 'GET') {
            buildRequest = fetch(url, { headers });
        } else {
            buildRequest = fetch(url, {
                method,
                headers: {
                    ...headers,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        }
        console.log(data);
        const response = await buildRequest;

        console.log(response);

        const result = await response.json();

        return result;
    } catch (error) {
        console.log(error);
    }
};

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const patch = request.bind({}, 'PATCH');
export const put = request.bind({}, 'PUT');
export const del = request.bind({}, 'DELETE');