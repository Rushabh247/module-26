// Fetch data from the API endpoint
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
       
        return response.json();
    })
    .then(data => {
      
        console.log('Retrieved data:', data);
    })
    .catch(error => {
      
        console.error('Error fetching data:', error.message);
    });
