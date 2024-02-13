"use strict";
console.log('fetch');
const arr = [1, 2, 2];
const arr1 = [1, 2, 2];
const allPostsUrl = 'https://jsonplaceholder.typicode.com/posts';
const urlPosts = 'https://jsonplaceholder.typicode.com/posts/1';
async function needAwait() {
    const gotObj = await getPost(urlPosts);
    gotObj.title;
    const allPostsObj = await getPost(allPostsUrl);
    allPostsObj.forEach((pObj) => {
        console.log('pObj.title ===', pObj.title);
    });
}
needAwait();
function getPost(url) {
    return (fetch(url)
        .then((resp) => resp.json())
        .catch((error) => {
        console.warn('ivyko klaida:', error);
    }));
}
//# sourceMappingURL=fetch.js.map