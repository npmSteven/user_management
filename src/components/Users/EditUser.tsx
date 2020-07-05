import React, { useState, Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { useFormInput } from '../hooks/customHooks';
import { userValidation } from '../../validation/userValidation';
import { updateUser } from '../../actions/users.actions';
import { UsersAction } from '../../models/UsersAction';
import { User } from '../../models/User';
import { State } from '../../models/State';
import { FormModal } from '../layout/FormModal';

interface Props {
  user: User,
}

export function EditUser(props: Props) {
  const { user } = props;

  const userDispatch: Dispatch<UsersAction> = useDispatch();
  const users: Array<User> = useSelector((state: State) => state.users);

  const [ isLoading, setIsLoading ] = useState(false);
  const [ openModal, setOpenModal ] = useState(false);

  const name = useFormInput(user.name);
  const email = useFormInput(user.email);


  const handleUpdateUser = async (): Promise<boolean> => {
    const userInput: User = { id: user.id, name: name.props.value, email: email.props.value };

    // Check if the user input is correct
    const { error } = userValidation.validate(userInput);
    if (error) {
      toast.error(error.message);
      return false;
    }

    // Set the button to loading
    setIsLoading(true);

    try {
      await updateUser(userInput, users, userDispatch);
  
      // Set the button to stop loading
      setIsLoading(false);

      // Close modal
      setOpenModal(false);
      
      return true;
    } catch (error) {
      // Set the button to stop loading
      setIsLoading(false);

      toast.error('Something went wrong when trying to update a user');
      return false;
    }
  }

  return (
    <FormModal
      title='Update user'
      triggerProps = {{ icon: 'edit', content: 'Edit user', color: 'yellow' }}
      inputs = {[
        { id: 0, title: 'Name', props: name.props },
        { id: 1, title: 'Email', props: email.props }
      ]}
      submitProps = {{ icon: 'add user', content: 'Update user' }}
      update = {handleUpdateUser}
      loadingState = {{isLoading, setIsLoading}}
      modalState = {{ openModal, setOpenModal }}
    />
  );

}
