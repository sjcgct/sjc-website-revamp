import Prismic from "prismic-javascript";

export const apiEndpoint = "https://sjcgctrepo.prismic.io/api/v2";

export const accessToken = "MC5Yemkwb0JJQUFBX05QMUdo.Vu-_ve-_ve-_ve-_ve-_vUoxdTvvv719WEFmF--_ve-_ve-_vT9M77-977-9fu-_ve-_ve-_vQXvv71rfzs";

// creating a prismic client  object

export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};

  return {
    ...reqOption,
    ...accessTokenOption,
  };
};
