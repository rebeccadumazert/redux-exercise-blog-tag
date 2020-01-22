import React from 'react';
import { connect } from 'react-redux';
import { createPost, addTag } from '../actions';
import uniqID from 'uniq-id';

export class Posts extends React.Component {
  state = {
    titleArticle: '',
    article: '',
    tags: '',
    wordsFilter: [],
  };

  getArticle = ({ target: { value: article } }) => {
    this.setState({
      article,
    });
  };
  getTitleArticle = ({ target: { value: titleArticle } }) => {
    this.setState({
      titleArticle,
    });
  };
  getHashtags = ({ target: { value } }) => {
    const { tags: tagsExisting } = this.props;
    const tags = value.split(' ');
    this.setState({
      tags,
    });
    const regex = new RegExp(value, 'gi');
    const wordsFilter = tagsExisting.filter(tag => {
      const filterTag = regex.test(tag);
      // return value && filterTag;
      return value ? filterTag : false;
    });
    this.setState({
      wordsFilter,
    });
  };

  sendArticle = () => {
    const { createPost, createTags } = this.props;
    const { titleArticle: title, article: description, tags } = this.state;
    const post = {
      id: uniqID(),
      title,
      description,
      tags,
      timestamp: Date.now(),
    };
    createPost(post);
    createTags(tags);
  };
  render() {
    const { posts } = this.props;
    const { wordsFilter } = this.state;
    return (
      <div>
        {posts.map(({ title, id, description, tags }) => (
          <div key={id}>
            <h3>{title}</h3>
            <p>{description}</p>
            {tags.map(tag => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
        ))}
        <div>
          <input
            type="text"
            placeholder="Titre de l'article"
            onChange={this.getTitleArticle}
          />
          <input
            type="text"
            placeholder="Rédige un nouvel article"
            onChange={this.getArticle}
          />
          <input
            type="text"
            placeholder="Hastags Place !"
            onChange={this.getHashtags}
          />
          <button onClick={this.sendArticle}>Envoyer l'article</button>
          {wordsFilter.map((word, i) => (
            <p>{word}</p>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ posts, tags }) => {
  return {
    posts: posts,
    tags: tags,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    createPost: post => dispatch(createPost(post)),
    createTags: tag => dispatch(addTag(tag)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
