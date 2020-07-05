import React, { useState, Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { useFormInput } from '../hooks/customHooks';
import { State } from '../../models/State';
import { FormModal } from '../layout/FormModal';
import { PostsAction } from '../../models/PostsAction';
import { Post } from '../../models/Post';
import { postValidation } from '../../validation/postValidation';
import { updatePost } from '../../actions/posts.actions';

interface Props {
  post: Post;
}

export function EditPost(props: Props) {

  const postDispatch: Dispatch<PostsAction> = useDispatch();
  const posts: Array<Post> = useSelector((state: State) => state.posts);

  const [ isLoading, setIsLoading ] = useState(false);
  const [ openModal, setOpenModal ] = useState(false);


  const title = useFormInput(props.post.title);
  const body = useFormInput(props.post.body);

  const handleEditPost = async (): Promise<boolean> => {
    const postInput: Post = { id: props.post.id, title: title.props.value, body: body.props.value, userId: props.post.userId };

    // Check if the post input is correct
    const { error } = postValidation.validate(postInput);
    if (error) {
      toast.error(error.message);
      return false;
    }

    // Set the button to loading 
    setIsLoading(true);

    try {
      await updatePost(postInput, posts, postDispatch);
  
      // Set the button to stop loading
      setIsLoading(false);
  
      // Close the modal
      setOpenModal(false);

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
      title='Edit post'
      triggerProps = {{ icon: 'edit', content: 'Edit post', color: 'yellow' }}
      inputs = {[
        { id: 0, type: 'field', title: 'Title', props: title.props },
        { id: 1, type: 'textarea', title: 'Body', props: body.props }
      ]}
      submitProps = {{ icon: 'edit', content: 'Edit post' }}
      update = { handleEditPost }
      loadingState = {{ isLoading, setIsLoading }}
      modalState = {{ openModal, setOpenModal }}
    />
  );

}
