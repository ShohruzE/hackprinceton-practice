const BASE_URL = 'http://localhost:3001/api';

const getResponse = async (value) => {
    try {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: value
            }),
        }
        const response = await fetch(BASE_URL, options);
        const data = await response.json();
        console.log(data);
        console.log(data.choices[0].message.content);
        return data.choices[0].message.content;
    }
    catch (error) {
        throw error;
    }
};

export default {
    getResponse
}