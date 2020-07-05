import { Dispatch } from 'react';
import { toast } from 'react-toastify';

import { SET_POSTS } from './types';
import { get, deleteApi, postApi, update } from '../utils/api';
import { Post } from '../models/Post';
import { PostsAction } from '../models/PostsAction';

export const setPosts = (posts: Array<Post>) => {
  return { type: SET_POSTS, posts };
}

/**
 * Get posts from endpoint
 * @param dispatch Set the posts to state
 */
export const getPosts = async (dispatch: Dispatch<PostsAction>): Promise<void> => {
  try {
    const posts: Array<Post> = await get(`/posts`);
    dispatch({ type: SET_POSTS, posts });
  } catch (error) {
    toast.error('Something went wrong when trying to get posts');
  }
}

/**
 * Delete a post
 * @param id the id of the post
 * @param posts all of the posts from state
 * @param dispatch set new state with new posts
 */
export const deletePost = async (id: number | undefined, posts: Array<Post>, dispatch: Dispatch<PostsAction>): Promise<void> => {
  try {
    await deleteApi(id, 'posts');
    const newPosts: Array<Post> = posts.filter((post: Post) => post.id !== id);
    dispatch({ type: SET_POSTS, posts: newPosts });
  } catch (error) {
    toast.error('Something went wrong when trying to delete the post');
  }
};

/**
 * Add a new post
 * @param post The post we want to add to the DB and state
 * @param posts Posts from state
 * @param dispatch Set new post to state
 */
export const addPost = async (post: Post, posts: Array<Post>, dispatch: Dispatch<PostsAction>): Promise<void> => {
  try {
    const newPost: Post = await postApi('/posts', post);
    posts.unshift(newPost);
    const newPosts: Array<Post> = posts;
    dispatch({ type: SET_POSTS, posts: [...newPosts] });
  } catch (error) {
    toast.error('Something went wrong when trying to add a post');
  }
};

/**
 * Update post
 * @param post Updated post
 * @param posts Posts from state
 * @param dispatch Update post in state
 */
export const updatePost = async (post: Post, posts: Array<Post>, dispatch: Dispatch<PostsAction>): Promise<void> => {
  try {
    const updatedPost: Post = await update(`/posts/${post.id}`, post);
    const foundPost = posts.find((p: Post) => p.id === post.id);
    Object.assign(foundPost, updatedPost);
    dispatch({ type: SET_POSTS, posts: [...posts] });
  } catch (error) {
    toast.error('Something went wrong when trying to update a post');
  }
};
