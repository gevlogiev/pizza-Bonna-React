import * as request from "./../../../lib/request";

const baseUrl = 'http://localhost:3030/data/products'

export const getAll = async () => {
    const result = await request.get(baseUrl);
    return Object.values(result);
};

export const getLatest = async () => {
    const query = new URLSearchParams({
        offset: 0,
        pageSize: 3,
    });

    const result = await request.get(`${baseUrl}?${query}`);
    return result;
}



export const create = async (productData) => {
    const result = await request.post(baseUrl, productData);

    return result;
};

export const remove = async (productId) => {
    const result = await request.remove(`${baseUrl}/${productId}` );
    return result;
};
