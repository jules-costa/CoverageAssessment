import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      image_url: "",
      category_id: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field] : e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then((post) => this.props.history.push(`/posts/${post.id}`))
  }

  toggleButton() {
    return (this.props.formType === "write" ? "Create Post" : "Update Post")
  }


  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            * {error} *
          </li>
        ))}
      </ul>
    )
  }

  render () {
    return (
      <form className="new-post-form">
        <input
          className="post-input"
          placeholder="Title"
          type="text"
          name="title"
          value={ this.state.title }
          onChange={ this.update("title") }/>
        <textarea
          className="post-input post-body"
          placeholder="Let it flow..."
          type="text"
          name="body"
          value={ this.state.body }
          onChange={ this.update("body") }></textarea>
          {this.renderErrors()}
        <button className="auth-button new-post-button" type="submit" onClick={this.handleSubmit}>{this.toggleButton()}</button>
      </form>
    )
  }
}

export default PostForm;
