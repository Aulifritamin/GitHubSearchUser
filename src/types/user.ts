export type GitHubUser = {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  followers: number;
  followings: number;
  created_at: string;
};

export type GitHubError = {
  message: string;
  documentation_url: string;
};

export type LocalGitHubUser = {
  login: string;
  id: number;
  avatar: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  twitter: string;
  public: number;
  followers: number;
  followings: number;
  created: string;
};
