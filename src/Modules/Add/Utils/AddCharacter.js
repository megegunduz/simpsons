/** @typedef {import('../../../Types/Character').CharacterList} CharacterList */
/** @typedef {import('../../../Types/Character').Character} Character */

/**
 * @param {object} props
 * @param {CharacterList} props.characters
 * @param {Character} props.character
 */
export const addCharacter = ({ characters, character }) => {
    const list = [...characters];

    /** @type {Character} */
    const newCharacter = {
        ...character,
        ranking: list.length > 0 ? list.length + 1 : 1,
    };

    list.push(newCharacter);

    return list;
};
