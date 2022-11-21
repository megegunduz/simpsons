import React, { useEffect, useState } from 'react';
import {
    Text,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Input, NativeBaseProvider, FormControl } from 'native-base';
import Modal from 'react-native-modal';

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
        // To close success modal on unmount, set success state to false
        return () => {
            dispatch(
                AddSlice.actions.setIsSuccess({
                    isSuccess: false,
                }),
            );
        };
    }, []);

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

        const isFormValid = !Object.values(currentValidations).some(
            validaiton => validaiton === true,
        );
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
                                    focusOutlineColor={
                                        styles.formColors.borderFocused
                                    }
                                    invalidOutlineColor={
                                        styles.formColors.borderInvalid
                                    }
                                    backgroundColor={
                                        styles.formColors.backgroundColor
                                    }
                                    cursorColor={styles.formColors.cursor}
                                    placeholderTextColor={
                                        styles.formColors.placeholder
                                    }
                                    color={styles.formColors.text}
                                    onChangeText={text =>
                                        updateForm(text, field.key)
                                    }
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
            <Modal
                isVisible={isSuccess}
                style={styles.successModal}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
                onBackdropPress={props.navigation.goBack}
            >
                <View style={styles.modalContentContainer}>
                    <View style={styles.modalTitleContainer}>
                        <Text style={styles.modalTitle}>
                            {'Character added successfully!'}
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={props.navigation.goBack}
                        style={styles.modalButton}
                    >
                        <Text style={styles.modalButtonText}>{'Go Back'}</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

export default AddScreen;
