import * as request from "./../../../lib/request";

const baseUrl = 'http://localhost:3030/data/orders'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
};


export const getAllForUser = async (_id) => {
    
    const query = new URLSearchParams({
        where: `_ownerId="${_id}"`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};



export const create = async (basketData) => {
    const result = await request.post(baseUrl, { products: basketData });

    return result;
};


