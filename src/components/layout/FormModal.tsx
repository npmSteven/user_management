import React from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';

import { FormModalProps } from '../../models/FormModalProps';

export function FormModal(props: FormModalProps) {
  const { triggerProps, inputs, submitProps, update, modalState, loadingState, title } = props;

  const handleOpen = () => {
    modalState.setOpenModal(true);
  };

  const handleClose = () => {
    modalState.setOpenModal(false);
  };

  return (
    <Modal
      trigger={<Button style={{ marginBottom: 10 }} onClick={handleOpen} {...triggerProps} />}
      closeOnDimmerClick={false}
      closeIcon={false}
      closeOnEscape={false}
      open={modalState.openModal}
    >
      <Modal.Header>{ title }</Modal.Header>
      <Modal.Content>
        <Form>
          {inputs.map((input: any) => {
            if (input.type === 'field') {
              return (
                <Form.Field key={input.id}>
                  <label>{ input.title }</label>
                  <Form.Input { ...input.props } />
                </Form.Field>
              )
            }
            if (input.type === 'textarea') {
              return (
                <Form.Field key={input.id}>
                  <label>{ input.title }</label>
                  <Form.TextArea { ...input.props } />
                </Form.Field>
              )
            }
          })}
          <Button loading={loadingState.isLoading} onClick={update} {...submitProps} positive />
          <Button disabled={loadingState.isLoading} onClick={handleClose} icon='cancel' content='Cancel' negative />
        </Form>
      </Modal.Content>
    </Modal>
  );
}