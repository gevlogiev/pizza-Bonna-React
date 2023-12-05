import * as request from "./../../../lib/request";

const baseUrl = 'http://localhost:3030/data/orders'

export const getAll = async () => {
    const result = await request.get(baseUrl);
    return Object.values(result);
};

// export const getDetails =  async (_id) => {
//     const result = await request.get(`${baseUrl}/${_id}`, );

//     return result;
// }

// export const getLatest = async () => {
//     const query = new URLSearchParams({
//         offset: 0,
//         pageSize: 3,
//     });
//     const result = await request.get(`${baseUrl}?sortBy=_createdOn%20desc&${query}`);

//     return result;
// }



export const create = async (basketData) => {
    const result = await request.post(baseUrl, basketData);

    return result;
};

export const edit = async (_id,productData) => {
    const result = await request.put(`${baseUrl}/${_id}`, productData);
console.log(result);
    return result;

};


export const remove = async (productId) => {
    const result = await request.remove(`${baseUrl}/${productId}` );
    return result;
};
