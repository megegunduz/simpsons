import React, { useState } from 'react';
import { Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Input, NativeBaseProvider, FormControl } from 'native-base';

import formFields from '../Constants/FormFields.json';

import styles from '../styles/AddScreenStyles';
import { HomeSlice } from '../../Home';
import { useDispatch } from 'react-redux';

const AddScreen = props => {
    const [formState, setFormState] = useState({
        name: '',
        job: '',
        description: '',
        avatar: '',
    });

    const [validations, setValidations] = useState({
        name: null,
        job: null,
        description: null,
        avatar: null,
    });

    const dispatch = useDispatch();

    const updateForm = (text, fieldKey) => {
        setFormState({
            ...formState,
            [fieldKey]: text,
        });
    };

    const _onPress_Add = () => {
        let currentValidations = { ...validations };
        for (let key in validations) {
            currentValidations[key] = getValidation(key);
        }
        setValidations(currentValidations);

        const isFormValid = !Object.values(currentValidations).some(
            validaiton => validaiton === true,
        );
        isFormValid &&
            dispatch(HomeSlice.actions.addCharacter({ character: formState }));
    };

    const getValidation = fieldKey => {
        return formState[fieldKey] === '';
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollView}
                contentContainerStyle={styles.formContainer}
            >
                <NativeBaseProvider>
                    {formFields.map((field, index) => {
                        return (
                            <FormControl isInvalid={validations[field.key]} style={styles.inputContainer}>
                                <FormControl.Label _text={{style: styles.inputLabel}}>
                                    {field.label}
                                </FormControl.Label>
                                <Input
                                    isInvalid={validations[field.key]}
                                    placeholder={field.label}
                                    borderColor={styles.formColors.border}
                                    focusOutlineColor={styles.formColors.borderFocused}
                                    invalidOutlineColor={styles.formColors.borderInvalid}
                                    backgroundColor={styles.formColors.backgroundColor}
                                    cursorColor={styles.formColors.cursor}
                                    placeholderTextColor={styles.formColors.placeholder}
                                    color={styles.formColors.text}
                                    onChangeText={text =>
                                        updateForm(text, field.key)
                                    }
                                />
                                <FormControl.ErrorMessage _text={{style: styles.inputValidation}}>
                                    {'This field is required'}
                                </FormControl.ErrorMessage>
                            </FormControl>
                        );
                    })}
                </NativeBaseProvider>
            </ScrollView>
            <TouchableOpacity style={styles.addButton} onPress={_onPress_Add}>
                <Text style={styles.addButtonText}>{'Add Character'}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default AddScreen;
