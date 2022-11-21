import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Input, NativeBaseProvider, FormControl } from 'native-base';

import formFields from '../Constants/FormFields.json';
import { AddSelectors, AddSlice } from '../Redux/AddRedux';
import { useLoadingOverlay } from '../../../Features/Loading';

import styles from '../styles/AddScreenStyles';

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
    const isSuccess = useSelector(AddSelectors.isSuccess);
    const isLoading = useSelector(AddSelectors.isLoading);
    useLoadingOverlay(isLoading);

    useEffect(() => {
        if (isSuccess && !isLoading) {
            dispatch(
                AddSlice.actions.setIsSuccess({
                    isSuccess: false,
                }),
            );
            props.navigation.goBack();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess, isLoading]);

    const updateForm = (text, fieldKey) => {
        setFormState({
            ...formState,
            [fieldKey]: text,
        });
    };

    const _onPress_Add = () => {
        let currentValidations = {
            ...validations,
        };
        for (let key in validations) {
            currentValidations[key] = getValidation(key);
        }
        setValidations(currentValidations);

        const isFormValid = !Object.values(currentValidations).some(validaiton => validaiton === true);
        isFormValid &&
            dispatch(
                AddSlice.actions.addCharacter({
                    character: formState,
                }),
            );
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
                            <FormControl
                                isInvalid={validations[field.key]}
                                style={styles.inputContainer}
                                key={field.key}
                            >
                                <FormControl.Label
                                    _text={{
                                        style: styles.inputLabel,
                                    }}
                                >
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
                                    onChangeText={text => updateForm(text, field.key)}
                                />
                                <FormControl.ErrorMessage
                                    _text={{
                                        style: styles.inputValidation,
                                    }}
                                >
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
