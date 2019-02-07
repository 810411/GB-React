class ApiService {
  _apiBase = 'https://jsonplaceholder.typicode.com';

  _getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  getAllPosts = async () => {
    const res = await this._getResource(`/posts`);
    return res.map(this._correctedPost);
  };

  getAllComments = async () => {
    const res = await this._getResource(`/comments`);
    return res.map(this._correctedComment);
  };

  getAllUsers = async () => {
    const res = await this._getResource(`/users`);
    return res.map(this._correctedUser);
  };

  getPost = async (id) => {
    const post = await this._getResource(`/posts/${id}`);
    return [this._correctedPost(post)];
  };

  getComment = async (id) => {
    const comment = await this._getResource(`/comments/${id}`);
    return [this._correctedComment(comment)];
  };

  getUser = async (id) => {
    const user = await this._getResource(`/users/${id}`);
    return [this._correctedUser(user)];
  };

  _correctedPost = post => {
    return {
      userId: post.userId,
      id: post.id,
      title: post.title,
      message: post.body
    }
  };

  _correctedComment = comment => {
    return {
      userId: comment.userId,
      id: comment.id,
      name: comment.name,
      comment: comment.body,
      email: comment.email
    }
  };

  _correctedUser = user => {
    return {
      id: user.id,
      name: user.name,
      nickname: user.username,
      email: user.email,
      phone: user.phone,
      website: user.website
    }
  };
}

export default ApiService
