console.log('fetch');

const arr: number[] = [1, 2, 2];
const arr1: Array<number> = [1, 2, 2];

const allPostsUrl = 'https://jsonplaceholder.typicode.com/posts';
const urlPosts = 'https://jsonplaceholder.typicode.com/posts/1';

async function needAwait() {
  const gotObj = await getPost<PostObjIf>(urlPosts);
  gotObj.title;
  // if (!Array.isArray(gotObj)) {
  //   console.log('gotObj ===', gotObj);
  // }

  const allPostsObj = await getPost<PostObjIf[]>(allPostsUrl);
  allPostsObj.forEach((pObj) => {
    console.log('pObj.title ===', pObj.title);
  });
  // gotObj.title;
}
needAwait();
// console.log('gotObj ===', gotObj);

// gauti gotObj be await
// const gotObj = getPost(urlPosts);
// tik kitokia sintakse
// getPost(urlPosts).then((dataBack) => {
//   console.log('dataBack', dataBack);
// });

function getPost<DataBackType>(url: string): Promise<DataBackType> {
  return (
    fetch(url)
      .then((resp) => resp.json())
      // .then((data) => {
      //   console.log('data ===', data.body);
      //   return data;
      // })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      })
  );
}

interface PostObjIf {
  userId: number;
  id: number;
  title: string;
  body: string;
}

/* 
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
*/
