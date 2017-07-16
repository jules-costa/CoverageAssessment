import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      image_url: "",
      category_id: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    this.setState([field]: )
  }

  handleSubmit(e) {
    e.preventDefault;

  }

  render () {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input type="text" name="title" value={ this.state.title } onChange={ this.update("title") }/>
        <textarea type="text" name="body" value={ this.state.body } onChange={ this.update("body") }></textarea>
      </form>
    )
  }
}

export default PostForm;
