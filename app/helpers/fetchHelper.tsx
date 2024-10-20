export const fetchData = async (url: string) => {
    try {
        const response = await fetch(`http://localhost:31234/api/${url}`);
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const postData = async (url: string, data: any) => {
    try {

        const response = await fetch(`http://localhost:31234/api/${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`Error posting data: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};