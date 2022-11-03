const gigabaseUrl = 'https://escola.beta.gigabase.dev';

export const environment = {
  production: false,

  GIGABASE: {
    ODATA_URL: `${gigabaseUrl}/odata`,
    PROOF_URL: `${gigabaseUrl}/proof`,
    CHECK_OFFLINE_URL: `${gigabaseUrl}/version`
  },

  bodyPost: {
    email: 'admin@admin',
    password: "MjEyMzJmMjk3YTU3YTVhNzQzODk0YTBlNGE4MDFmYzM=",
    application: "odata-server"
  }
};
