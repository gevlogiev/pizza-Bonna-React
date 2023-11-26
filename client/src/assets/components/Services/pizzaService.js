import * as request from "./../../../lib/request";

const baseUrl = 'http://localhost:3030/data/products'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
};



export const create = async (productData) => {
    const result = await request.post(baseUrl, productData);

    return result;
};

export const remove = async (productId) => {
    const result = await request.remove(`${baseUrl}/${productId}` );
console.log('opa')
console.log(result)
    return result;
};
