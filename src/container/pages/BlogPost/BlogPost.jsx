import React, { Component, Fragment } from 'react';
import Post from '../../../Component/Post/Post';
import './BlogPost.css';

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      userId: 1,
      id: 1,
      title: '',
      body: '',
    },
  };

  // GET POST API
  getPostAPI = () => {
    fetch(`http://localhost:3004/posts?_sort=id&_order=desc`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          post: response,
        });
      });
  };

  // DELETE DATA
  handleDelete = (data) => {
    fetch(`http://localhost:3004/posts/${data}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((response) => {
        this.getPostAPI();
      });
  };

  // POST DATA TO API
  postDataToAPI = () => {
    fetch('http://localhost:3004/posts', {
      method: 'POST',
      body: JSON.stringify(this.state.formBlogPost),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        this.getPostAPI();
        this.setState({
          formBlogPost: {
            userId: 1,
            id: 1,
            title: '',
            body: '',
          },
        });
      })
      .catch((err) => {
        console.log('ERROR' + err);
      });
  };

  handleFormChange = (event) => {
    let newFormBlogPost = { ...this.state.formBlogPost };
    let timeStamp = new Date().getTime();
    newFormBlogPost['id'] = timeStamp;
    newFormBlogPost[event.target.name] = event.target.value;
    this.setState({
      formBlogPost: newFormBlogPost,
    });
  };

  // HANDLE SUBMIT
  handleSubmit = () => {
    this.postDataToAPI();
  };

  // RENDER COMPONENT
  componentDidMount() {
    this.getPostAPI();
  }

  render() {
    return (
      <Fragment>
        <div className="form-content">
          <label htmlFor="title">Title</label>
          <input type="text" value={this.state.formBlogPost.title} name="title" placeholder="add title..." onChange={this.handleFormChange} />
          <label htmlFor="body" className="body-title">
            body title
          </label>
          <textarea name="body" value={this.state.formBlogPost.body} id="body" cols="35" rows="20" placeholder="add description..." onChange={this.handleFormChange}></textarea>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
        {this.state.post.map((post) => {
          return <Post key={post.id} data={post} delete={this.handleDelete} />;
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
