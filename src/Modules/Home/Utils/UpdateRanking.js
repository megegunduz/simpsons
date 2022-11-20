/** @typedef {import('../../../Types/Character').Character} Character */
/** @typedef {import('../../../Types/Character').CharacterList} CharacterList */

/**
 * @param {object} props
 * @param {CharacterList} props.characters
 * @param {Character} props.updatedCharacter
 * @param {'increase' | 'decrease'} props.updateType
 * @returns {CharacterList}
 */
export const updateRanking = ({ characters, updatedCharacter, updateType }) => {
    let indexOfCharacter = getIndex(characters, updatedCharacter);

    const canUpdate =
        updateType === 'increase'
            ? indexOfCharacter > 0
            : indexOfCharacter < characters.length - 1;

    if (!canUpdate) return characters;
    if ((updateType === 'increase') & canUpdate) {
        characters[indexOfCharacter].ranking -= 1;
        characters[indexOfCharacter - 1].ranking += 1;
    }

    if (updateType === 'decrease' && canUpdate) {
        characters[indexOfCharacter].ranking += 1;
        characters[indexOfCharacter + 1].ranking -= 1;
    }

    return characters.sort((a, b) => a.ranking - b.ranking);
};

/**
 * @param {CharacterList} list
 * @param {Character} item
 * @returns {number | null}
 */
const getIndex = (list, item) => {
    let i = null;
    list.map((character, index) => {
        if (character.ranking === item.ranking) {
            i = index;
        }
    });

    return i;
};
