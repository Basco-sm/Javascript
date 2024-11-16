async function fetchUserData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error('User data contains some error');
    }
    return response.json();
}

async function displayUserData() {
    const userList = document.getElementById('user-list');
    
    try {
        const users = await fetchUserData();
        
        // Create the list items
        const listItems = users.map(user => `<li>${user.name} - ${user.email}</li>`).join('');
        
        // Show the data by using innerHTML
        userList.innerHTML = listItems;
        
        // Make the user list visible after data is fetched
        userList.style.display = 'block';
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}

function hideUserData() {
    const userList = document.getElementById('user-list');
    userList.style.display = 'none'; // to hide the list
}

// Event listeners for the buttons
document.getElementById('show-data').addEventListener('click', displayUserData);
document.getElementById('hide-data').addEventListener('click', hideUserData);