import { connect } from 'react-redux';
import { addPostAC, updateTextareaPostAC } from '../../../../redux/profile-reducer';
import { Posts } from './Posts';
import { StateType } from '../../../../redux/redux-store';

const mapStateToProps = (state: StateType) => {
  return { state: state.profilePage.posts.allPosts,
    text: state.profilePage.posts.valueTextarea
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return (
    { addPost: () => {
        dispatch(addPostAC());
      },
      onChangeText: (text: string) => {
        dispatch(updateTextareaPostAC(text));
      }
    }
  )
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;