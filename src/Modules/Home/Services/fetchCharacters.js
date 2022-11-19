import client from '../../../Utils/AxiosInstance';

export const fetchCharacters = async () => {
    const response = await client.get();
    return response.data;
};
