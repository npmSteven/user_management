import React, { useState, Dispatch } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { useFormInput } from '../hooks/customHooks';
import { userValidation } from '../../validation/userValidation';
import { addUser } from '../../actions/users.actions';
import { UsersAction } from '../../models/UsersAction';
import { User } from '../../models/User';
import { State } from '../../models/State';

export function AddUser() {

  const userDispatch: Dispatch<UsersAction> = useDispatch();
  const users: Array<User> = useSelector((state: State) => state.users);

  const [ addingUser, setAddingUser ] = useState(false);
  const [ toggleModel, setToggleModal ] = useState(false);
  const name = useFormInput('');
  const email = useFormInput('');

  const handleOpen = () => {
    setToggleModal(true);
  }

  const handleClose = () => {
    setToggleModal(false);
  }

  const handleAddUser = async (): Promise<boolean> => {
    const userInput: User = { name: name.value, email: email.value };

    // Check if the user input is correct
    const { error } = userValidation.validate(userInput);
    if (error) {
      toast.error(error.message);
      return false;
    }

    // Set the button to loading
    setAddingUser(true);

    try {
      await addUser(userInput, users, userDispatch);
  
      // Set the button to stop loading
      setAddingUser(false);
  
      // Close the modal
      setToggleModal(false);
      return true;
    } catch (error) {
      // Set the button to stop loading
      setAddingUser(false);

      toast.error('Something went wrong when trying to add a user');
      return false;
    }
  }

  return (
    <Modal
      trigger={<Button onClick={handleOpen} icon='add user' content='Add user' color='green' style={{ marginBottom: 10 }} />}
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
          <Button loading={addingUser} onClick={handleAddUser} icon='add user' content='Add user' positive />
          <Button onClick={handleClose} icon='cancel' content='Cancel' negative />
        </Form>
      </Modal.Content>
    </Modal>
  );

}
