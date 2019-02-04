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
    return res.map(this._correctedComments);
  };

  getAllUsers = async () => {
    const res = await this._getResource(`/users`);
    return res.map(this._correctedUsers);
  };

  _correctedPost = post => {
    return {
      userId: post.userId,
      id: post.id,
      title: post.title,
      message: post.body
    }
  };

  _correctedComments = comment => {
    return {
      userId: comment.userId,
      id: comment.id,
      name: comment.name,
      comment: comment.body,
      email: comment.email
    }
  };

  _correctedUsers = user => {
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

export {
  ApiService
}