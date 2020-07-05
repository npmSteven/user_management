import React, { useState, Dispatch } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { useFormInput } from '../hooks/customHooks';
import { userValidation } from '../../validation/userValidation';
import { updateUser } from '../../actions/users.actions';
import { UsersAction } from '../../models/UsersAction';
import { User } from '../../models/User';
import { State } from '../../models/State';

interface Props {
  user: User,
}

export function EditUser(props: Props) {
  const { user } = props;

  const userDispatch: Dispatch<UsersAction> = useDispatch();
  const users: Array<User> = useSelector((state: State) => state.users);

  const [ updattingUser, setUpdattingUser ] = useState(false);
  const [ toggleModel, setToggleModal ] = useState(false);
  const name = useFormInput(user.name);
  const email = useFormInput(user.email);

  const handleOpen = () => {
    setToggleModal(true);
  }

  const handleClose = () => {
    setToggleModal(false);
  }

  const handleUpdateUser = async (): Promise<boolean> => {
    const userInput: User = { id: user.id, name: name.value, email: email.value };

    // Check if the user input is correct
    const { error } = userValidation.validate(userInput);
    if (error) {
      toast.error(error.message);
      return false;
    }

    // Set the button to loading
    setUpdattingUser(true);

    try {
      await updateUser(userInput, users, userDispatch);
  
      // Set the button to stop loading
      setUpdattingUser(false);
  
      // Close the modal
      setToggleModal(false);
      return true;
    } catch (error) {
      // Set the button to stop loading
      setUpdattingUser(false);

      toast.error('Something went wrong when trying to update a user');
      return false;
    }
  }

  return (
    <Modal
      trigger={<Button onClick={handleOpen} icon='edit' content='Edit user' color='yellow' />}
      closeOnDimmerClick={false}
      closeIcon={false}
      closeOnEscape={false}
      open={toggleModel}
    >
      <Modal.Header>Add a user</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Name</label>
            <Form.Input { ...name } />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <Form.Input { ...email } />
          </Form.Field>
          <Button loading={updattingUser} onClick={handleUpdateUser} icon='add user' content='Update user' positive />
          <Button onClick={handleClose} icon='cancel' content='Cancel' negative />
        </Form>
      </Modal.Content>
    </Modal>
  );

}
