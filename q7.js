async function fetchDataFromMultipleEndpoints() {
    try {
 
        const [todoResponse, postResponse] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/todos/1'),
            fetch('https://jsonplaceholder.typicode.com/posts/1')
        ]);
        
        if (!todoResponse.ok || !postResponse.ok) {
            throw new Error('Failed to fetch data from one or more endpoints');
        }
        
        
        const todoData = await todoResponse.json();
        const postData = await postResponse.json();
        
 
        const combinedData = {
            todo: todoData,
            post: postData
        };
        
        console.log('Combined data:', combinedData);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

fetchDataFromMultipleEndpoints();
