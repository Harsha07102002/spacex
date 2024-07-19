document.addEventListener("DOMContentLoaded", () => {
    fetchLaunchData();

    document.getElementById('toggle-upcoming-launches').addEventListener('click', () => {
        const upcomingContainer = document.getElementById('upcoming-launches-container');
        toggleVisibility(upcomingContainer);
    });

    document.getElementById('toggle-past-launches').addEventListener('click', () => {
        const pastContainer = document.getElementById('past-launches-container');
        toggleVisibility(pastContainer);
    });
});

async function fetchLaunchData() {
    const upcomingLaunchesContainer = document.getElementById('upcoming-launches-container');
    const pastLaunchesContainer = document.getElementById('past-launches-container');

    // Fetch upcoming launches
    const upcomingLaunchesResponse = await fetch('https://api.spacexdata.com/v4/launches/upcoming');
    const upcomingLaunches = await upcomingLaunchesResponse.json();

    // Fetch past launches
    const pastLaunchesResponse = await fetch('https://api.spacexdata.com/v4/launches/past');
    const pastLaunches = await pastLaunchesResponse.json();

    displayLaunches(upcomingLaunches, upcomingLaunchesContainer);
    displayLaunches(pastLaunches, pastLaunchesContainer);
}

function displayLaunches(launches, container) {
    container.innerHTML = '';
    launches.forEach(launch => {
        const launchElement = document.createElement('div');
        launchElement.classList.add('launch');

        const launchTitle = document.createElement('h3');
        launchTitle.textContent = launch.name;

        const launchDate = document.createElement('p');
        launchDate.textContent = `Date: ${new Date(launch.date_utc).toLocaleDateString()} ${new Date(launch.date_utc).toLocaleTimeString()}`;

        const launchDetails = document.createElement('p');
        launchDetails.textContent = launch.details || 'No details available';

        launchElement.appendChild(launchTitle);
        launchElement.appendChild(launchDate);
        launchElement.appendChild(launchDetails);

        container.appendChild(launchElement);
    });
}

function toggleVisibility(element) {
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
