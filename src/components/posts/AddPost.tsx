import React, { useState, Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { useFormInput } from '../hooks/customHooks';
import { State } from '../../models/State';
import { FormModal } from '../layout/FormModal';
import { PostsAction } from '../../models/PostsAction';
import { Post } from '../../models/Post';
import { postValidation } from '../../validation/postValidation';
import { addPost } from '../../actions/posts.actions';

interface Props {
  userId: number;
}

export function AddPost(props: Props) {

  const postDispatch: Dispatch<PostsAction> = useDispatch();
  const posts: Array<Post> = useSelector((state: State) => state.posts);

  const [ isLoading, setIsLoading ] = useState(false);
  const [ openModal, setOpenModal ] = useState(false);

  const title = useFormInput('');
  const body = useFormInput('');

  const handleAddPost = async (): Promise<boolean> => {
    const postInput: Post = { title: title.props.value, body: body.props.value, userId: props.userId };

    // Check if the post input is correct
    const { error } = postValidation.validate(postInput);
    if (error) {
      toast.error(error.message);
      return false;
    }

    // Set the button to loading 
    setIsLoading(true);

    try {
      await addPost(postInput, posts, postDispatch);
  
      // Set the button to stop loading
      setIsLoading(false);
  
      // Close the modal
      setOpenModal(false);

      // Reset inputs
      title.reset();
      body.reset();

      return true;
    } catch (error) {
      // Set the button to stop loading
      setIsLoading(false);

      toast.error('Something went wrong when trying to add a post');
      return false;
    }
  }

  return (
    <FormModal
      title='Add post'
      triggerProps = {{ icon: 'add', content: 'Add post', color: 'green' }}
      inputs = {[
        { id: 0, title: 'Title', props: title.props },
        { id: 1, title: 'Body', props: body.props }
      ]}
      submitProps = {{ icon: 'add', content: 'Add post' }}
      update = { handleAddPost }
      loadingState = {{ isLoading, setIsLoading }}
      modalState = {{ openModal, setOpenModal }}
    />
  );

}
