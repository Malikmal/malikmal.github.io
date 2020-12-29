module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("XCOm");


/***/ }),

/***/ "XCOm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return preview; });
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("qoWs");

async function preview(req, res) {
  const {
    secret,
    id,
    slug
  } = req.query; // Check the secret and next parameters
  // This secret should only be known by this API route

  if (!process.env.WORDPRESS_PREVIEW_SECRET || secret !== process.env.WORDPRESS_PREVIEW_SECRET || !id && !slug) {
    return res.status(401).json({
      message: 'Invalid token'
    });
  } // Fetch WordPress to check if the provided `id` or `slug` exists


  const post = await Object(_lib_api__WEBPACK_IMPORTED_MODULE_0__[/* getPreviewPost */ "d"])(id || slug, id ? 'DATABASE_ID' : 'SLUG'); // If the post doesn't exist prevent preview mode from being enabled

  if (!post) {
    return res.status(401).json({
      message: 'Post not found'
    });
  } // Enable Preview Mode by setting the cookies


  res.setPreviewData({
    post: {
      id: post.databaseId,
      slug: post.slug,
      status: post.status
    }
  }); // Redirect to the path from the fetched post
  // We don't redirect to `req.query.slug` as that might lead to open redirect vulnerabilities

  res.writeHead(307, {
    Location: `/posts/${post.slug || post.databaseId}`
  });
  res.end();
}

/***/ }),

/***/ "qoWs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getPreviewPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAllPostsWithSlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAllPostsForHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPostAndMorePosts; });
const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query, {
  variables
} = {}) {
  const headers = {
    'Content-Type': 'application/json'
  };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables
    })
  });
  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

async function getPreviewPost(id, idType = 'DATABASE_ID') {
  const data = await fetchAPI(`
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`, {
    variables: {
      id,
      idType
    }
  });
  return data.post;
}
async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data === null || data === void 0 ? void 0 : data.posts;
}
async function getAllPostsForHome(preview) {
  const data = await fetchAPI(`
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `, {
    variables: {
      onlyEnabled: !preview,
      preview
    }
  });
  return data === null || data === void 0 ? void 0 : data.posts;
}
async function getPostAndMorePosts(slug, preview, previewData) {
  const postPreview = preview && (previewData === null || previewData === void 0 ? void 0 : previewData.post); // The slug may be the id of an unpublished post

  const isId = Number.isInteger(Number(slug));
  const isSamePost = isId ? Number(slug) === postPreview.id : slug === postPreview.slug;
  const isDraft = isSamePost && (postPreview === null || postPreview === void 0 ? void 0 : postPreview.status) === 'draft';
  const isRevision = isSamePost && (postPreview === null || postPreview === void 0 ? void 0 : postPreview.status) === 'publish';
  const data = await fetchAPI(`
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${// Only some of the fields of a revision are considered as there are some inconsistencies
  isRevision ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        ` : ''}
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `, {
    variables: {
      id: isDraft ? postPreview.id : slug,
      idType: isDraft ? 'DATABASE_ID' : 'SLUG'
    }
  }); // Draft posts may not have an slug

  if (isDraft) data.post.slug = postPreview.id; // Apply a revision (changes in a published post)

  if (isRevision && data.post.revisions) {
    var _data$post$revisions$;

    const revision = (_data$post$revisions$ = data.post.revisions.edges[0]) === null || _data$post$revisions$ === void 0 ? void 0 : _data$post$revisions$.node;
    if (revision) Object.assign(data.post, revision);
    delete data.post.revisions;
  } // Filter out the main post


  data.posts.edges = data.posts.edges.filter(({
    node
  }) => node.slug !== slug); // If there are still 3 posts, remove the last one

  if (data.posts.edges.length > 2) data.posts.edges.pop();
  return data;
}

/***/ })

/******/ });