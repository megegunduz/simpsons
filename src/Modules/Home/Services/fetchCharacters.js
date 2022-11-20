import client from '../../../Utils/AxiosInstance';

/** @typedef {import('../../../Types/Character').CharacterResponseData} CharacterResponseData */
/** @typedef {import('../../../Types/Character').CharacterList} CharacterList */

/**
 * @returns {Promise<CharacterList>}
 */
export const fetchCharacters = async () => {
    const response = await client.get();
    return convert(response.data);
};

/**
 * @param {CharacterResponseData} result
 * @return {CharacterList}
 */
const convert = result => {
    return result.map((character, index) => ({
        ...character,
        ranking: index + 1,
    }));
};
