import * as prismic from "@prismicio/client";

export const apiEndpoint = "https://sjcgctrepo.prismic.io/api/v2"; //

export const accessToken =
  "MC5Yemkwb0JJQUFBX05QMUdo.Vu-_ve-_ve-_ve-_ve-_vUoxdTvvv719WEFmF--_ve-_ve-_vT9M77-977-9fu-_ve-_ve-_vQXvv71rfzs";

const repoName = "sjcgctrepo";
const endpoint = prismic.getEndpoint(repoName);

export const linkResolver = (doc) => {
  if (doc) {
    // URL for a category type
    if (doc.type === "category") {
      return `/category/${doc.uid}`;
    }

    // URL for a blog type
    if (doc.type === "blog") {
      return `/story/${doc.uid}`;
    }

    // URL for HoG
    if (doc.type === "hog") {
      return `/hog/${doc.uid}`;
    }

    if (doc.type === "alumspace") {
      return `/alumspace/${doc.alumspace}`;
    }

    if (doc.type === "internview") {
      return `/internview/${doc.internview}`;
    }
  }

  // Backup for all other types
  return "/";
};

// creating a prismic client  object

export const client = prismic.createClient(endpoint, { accessToken });

// import Prismic from 'prismic-javascript'

// // Prismic API endpoint
// export const apiEndpoint = process.env.PRISMIC_API_URL

// // Access Token if the repository is not public
// // Generate a token in your dashboard and configure it here if your repository is private
// export const accessToken = process.env.PRISMIC_TOKEN

// // Client method to query documents from the Prismic repo
// export const client = Prismic.client(apiEndpoint, {accessToken})

// export const linkResolver = (doc) => {
//   if (doc) {
//     // URL for a category type
//     if (doc.type === 'category') {
//       return `/category/${doc.uid}`
//     }

//     // URL for a tag type
//     if (doc.type === 'tag') {
//       return `/tag/${doc.uid}`
//     }

//     // URL for a article type
//     if (doc.type === 'article') {
//       return `/article/${doc.uid}`
//     }
//   }

//   // Backup for all other types
//   return '/'
// }

// export const hrefResolver = (doc) => {
//   // URL for a category type
//   if (doc.type === 'category') {
//     return '/category/[uid]'
//   }

//   // URL for a tag type
//   if (doc.type === 'tag') {
//     return '/tag/[uid]'
//   }

//   // URL for a article type
//   if (doc.type === 'article') {
//     return '/article/[uid]'
//   }

//   // Backup for all other types
//   return '/'
// }
