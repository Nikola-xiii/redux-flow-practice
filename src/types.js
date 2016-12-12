/**
 * @flow
 */

type Friend = {
  name: string
};

type FriendState = {
  list: Array<Friend>,
  loading: boolean,
}

type AppState = {
  isMenuOpen: boolean,
}
