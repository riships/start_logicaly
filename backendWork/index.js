async function fetchData() {
    try {
        const response = await fetch('https://zylalabs.com/api/918/fake+users+generator+api/735/get+user');
        const data = await response.json();

        // Process the data
        processApiData(data);
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function processApiData(apiData) {
    // Initialize an empty array to store the filtered data
    const filteredData = [];

    // Loop through the API data
    for (const person of apiData) {
        // Check the condition (age 30 or older)
        if (person.age >= 30) {
            // Store the name in the filteredData array
            filteredData.push(person.name);
        }
    }

    // Display the result
    console.log(filteredData);
}

// Call the fetchData function to start the process
fetchData();
