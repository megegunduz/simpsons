/** @typedef {import('../../../Types/Character').CharacterList} CharacterList */
/** @typedef {import('../../../Types/Character').Character} Character */

/**
 * @param {object} props
 * @param {CharacterList} props.characters
 * @param {Character} props.character
 */
export const addCharacter = ({ characters, character }) => {
    /** @type {Character} */
    const newCharacter = {
        ...character,
        ranking: characters.length > 0 ? characters.length + 1 : 1,
    };

    characters.push(newCharacter);

    return characters;
};
