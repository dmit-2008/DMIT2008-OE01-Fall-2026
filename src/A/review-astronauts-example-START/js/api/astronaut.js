const BASE_URL = "https://lldev.thespacedevs.com/2.2.0"

// api functions here.
const getAstronautList = function() {
    return fetch(BASE_URL + '/astronaut/')
            .then(response => response.json())
            // TO DO: add error handling here
            .catch(error => console.error("Caught an eror:", error.message));
}

export { getAstronautList }