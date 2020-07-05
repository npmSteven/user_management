import React, { useState, Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { useFormInput } from '../hooks/customHooks';
import { userValidation } from '../../validation/userValidation';
import { addUser } from '../../actions/users.actions';
import { UsersAction } from '../../models/UsersAction';
import { User } from '../../models/User';
import { State } from '../../models/State';
import { FormModal } from '../layout/FormModal';

export function AddUser() {

  const userDispatch: Dispatch<UsersAction> = useDispatch();
  const users: Array<User> = useSelector((state: State) => state.users);

  const [ isLoading, setIsLoading ] = useState(false);
  const [ openModal, setOpenModal ] = useState(false);

  const name = useFormInput('');
  const email = useFormInput('');
  console.log('djakshd');

  const handleAddUser = async (): Promise<boolean> => {
    const userInput: User = { name: name.props.value, email: email.props.value };

    // Check if the user input is correct
    const { error } = userValidation.validate(userInput);
    if (error) {
      toast.error(error.message);
      return false;
    }

    // Set the button to loading
    setIsLoading(true);

    try {
      await addUser(userInput, users, userDispatch);
  
      // Set the button to stop loading
      setIsLoading(false);
  
      // Close the modal
      setOpenModal(false);

      // Reset inputs
      name.reset();
      email.reset();

      return true;
    } catch (error) {
      // Set the button to stop loading
      setIsLoading(false);

      toast.error('Something went wrong when trying to add a user');
      return false;
    }
  }

  return (
    <FormModal
      title='Add user'
      triggerProps = {{ icon: 'add user', content: 'Add user', color: 'green' }}
      inputs = {[
        { id: 0, title: 'Name', props: name.props },
        { id: 1, title: 'Email', props: email.props }
      ]}
      submitProps = {{ icon: 'add user', content: 'Add user' }}
      update = { handleAddUser }
      loadingState = {{ isLoading, setIsLoading }}
      modalState = {{ openModal, setOpenModal }}
    />
  );

}
