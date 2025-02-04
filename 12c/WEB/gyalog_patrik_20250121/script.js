async function GetAllPosts() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts&#39')
    const response = data.json();

      return response;
  }
  
  async function GetPostById(id) {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const response = data.json()


      return response;
  }
  
  async function CreatePost() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts&#39', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    const response = data.json()


    return response;
  }
  
  async function UpdatePost(id) {  
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    const response = data.json()


      return response;
  }
  
  async function PatchPost(id) {  
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title: 'foo',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    const response = data.json()

      return response;
  }
  
  async function DeletePost(id) {  
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
        })
     const response = data.json()

      return response;
  }
