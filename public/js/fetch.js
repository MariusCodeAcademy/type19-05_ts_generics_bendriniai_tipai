"use strict";
console.log('fetch');
const arr = [1, 2, 2];
const arr1 = [1, 2, 2];
const urlPosts = 'https://jsonplaceholder.typicode.com/posts/1';
getPost(urlPosts);
function getPost(url) {
    return fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
        console.log('data ===', data.body);
        return data;
    })
        .catch((error) => {
        console.warn('ivyko klaida:', error);
    });
}
//# sourceMappingURL=fetch.js.map