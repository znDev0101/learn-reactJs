import React, { Component, Fragment } from 'react';

import Update from '../../../Component/Update/Update';
class UpdatePost extends Component {
  state = {
    updateFormBlogPost: {
      title: '',
      body: '',
    },
  };

  componentDidMount() {
    fetch(`http://localhost:3004/posts`)
      .then((response) => response.json())
      .then((response) => {
        this.setState(
          {
            updateFormBlogPost: {
              title: response,
              body: response,
            },
          },
          () => {
            console.log(this.state.updateFormBlogPost);
          }
        );
      });
  }

  render() {
    return (
      <Fragment>
        {this.state.updateFormBlogPost.map((data) => {
          return (
            <>
              <h1>{data}</h1>
            </>
          );
        })}
        <Update />
      </Fragment>
    );
  }
}

export default UpdatePost;
