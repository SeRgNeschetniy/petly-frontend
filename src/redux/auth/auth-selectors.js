export const selectIsLogin = ({ auth }) => auth.isLogin;

export const selectUser = ({ auth }) => auth.user;

export const selectError = ({ auth }) => auth.error;

export const isLoading = ({ auth }) => auth.loading;