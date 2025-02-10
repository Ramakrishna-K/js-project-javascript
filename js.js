async function searchStation() {
    let stationName = document.getElementById("stationName").value;

    if (stationName === "") {
        alert("Enter a station name!");
        return;
    }

    try {
        const response = await fetch(
            'https://irctc-indian-railway-pnr-status.p.rapidapi.com/getPNRStatus/8524877966',
            {
                method: 'GET',
                headers: {
                           'x-rapidapi-key': 'c947f7d5e1msh4a0a40706640d4ap14544bjsnf910ee358119',
		                   'x-rapidapi-host': 'irctc-indian-railway-pnr-status.p.rapidapi.com'

                }
            }
        );
        let data = await response.json();
        console.log(data);



        
        let resultsContainer = document.getElementById("resultsContainer");
        resultsContainer.innerHTML =""; 

        let trainName = document.createElement("h6");
        let trainNumber = document.createElement("p");

        trainName.innerText = `Train Name: ${data.data.trainName}`;
        trainNumber.innerText = `Train Number: ${data.data.trainNumber}`;

        resultsContainer.appendChild(trainName);
        resultsContainer.appendChild(trainNumber);

    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to fetch train details. Please try again.");
    }
}

document.getElementById("searchButton").addEventListener("click", searchStation);




async function searchTrainNumber() {
    let trainNumber = document.getElementById("trainNumber").value;

    if (trainNumber === "") {
        alert("Enter a train number!");
        return;
    }

    try {
        const response = await fetch(
            'https://irctc-indian-railway-pnr-status.p.rapidapi.com/getPNRStatus/8524877966',
            {
                method: 'GET',
                headers: {
                           'x-rapidapi-key': 'c947f7d5e1msh4a0a40706640d4ap14544bjsnf910ee358119',
		                   'x-rapidapi-host': 'irctc-indian-railway-pnr-status.p.rapidapi.com'

                }
            }
        );
        let data = await response.json();
        console.log(data);


        
        
        let resultsContainer = document.getElementById("resultsContainer");
        resultsContainer.innerHTML =""; 

        let pnrNumber = document.createElement("h5");
        let dateOfJourney = document.createElement("h5");

        pnrNumber.innerText = `PNR Number: ${data.data.pnrNumber}`;
        dateOfJourney.innerText = `dateOfJourney: ${data.data.dateOfJourney}`;

        resultsContainer.appendChild(pnrNumber);
        resultsContainer.appendChild(dateOfJourney);

    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to fetch train details. Please try again.");
    }
}

document.getElementById("searchButton").addEventListener("click", searchStation);






async function searchTrainsBetweenStations() {
    let fromStation = document.getElementById("fromStation").value;

    if (fromStation === "") {
        alert("Enter a station between trains!");
        return;
    }

    try {
        const response = await fetch(
            'https://irctc-indian-railway-pnr-status.p.rapidapi.com/getPNRStatus/8524877966',
            {
                method: 'GET',
                headers: {
                           'x-rapidapi-key': 'c947f7d5e1msh4a0a40706640d4ap14544bjsnf910ee358119',
		                   'x-rapidapi-host': 'irctc-indian-railway-pnr-status.p.rapidapi.com'

                }
            }
        );
        let data = await response.json();
        console.log(data);


        
        
        let resultsContainer = document.getElementById("resultsContainer");
        resultsContainer.innerHTML =""; 

        let fromStation = document.createElement("h5");
        let toStation = document.createElement("h5");

        fromStation.innerText = `From Station : ${data.data.sourceStation}`;
        toStation.innerText = `To Station: ${data.data.destinationStation}`;

        resultsContainer.appendChild(fromStation);
        resultsContainer.appendChild(toStation);

    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to fetch train details. Please try again.");
    }
}

document.getElementById("searchButton").addEventListener("click", searchStation);








async function checkPNRStatus() {
    let pnrNumber = document.getElementById("pnrNumber").value;

    if (pnrNumber === "") {
        alert("Enter a PNR Number!");
        return;
    }

    try {
        const response = await fetch(
            'https://irctc-indian-railway-pnr-status.p.rapidapi.com/getPNRStatus/8524877966',
            {
                method: 'GET',
                headers: {
                           'x-rapidapi-key': 'c947f7d5e1msh4a0a40706640d4ap14544bjsnf910ee358119',
		                   'x-rapidapi-host': 'irctc-indian-railway-pnr-status.p.rapidapi.com'

                }
            }
        );
        let data = await response.json();
        console.log(data);


        
        
        let resultsContainer = document.getElementById("resultsContainer");
        resultsContainer.innerHTML =""; 

        let trainName = document.createElement("h5");
        let distance = document.createElement("h5");

        trainName.innerText = `Train name : ${data.data.trainName}`;
        distance.innerText = `distance: ${data.data.distance}`;

        resultsContainer.appendChild(trainName);
        resultsContainer.appendChild(distance);

    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to fetch train details. Please try again.");
    }
}

document.getElementById("searchButton").addEventListener("click", searchStation);
