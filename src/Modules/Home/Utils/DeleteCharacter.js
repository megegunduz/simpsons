/**
 * @param {object} props
 * @param {import('../../../Types/Character').CharacterList} props.characters
 * @param {import('../../../Types/Character').Character} props.deletedCharacter
 * @returns {import('../../../Types/Character').CharacterList}
 */
export const deleteCharacter = ({ characters, deletedCharacter }) => {
    const newList = characters.filter(
        character =>
            JSON.stringify(character) !== JSON.stringify(deletedCharacter),
    );

    return newList.map((character, index) => ({
        ...character,
        ranking: index + 1,
    }));
};
