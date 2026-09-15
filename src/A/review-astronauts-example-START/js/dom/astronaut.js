/*
HTML of an astronaut list item.
replace the instances that have "THIS FORMAT HERE" with the astronautData.

<li href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
        <img src="PROFILE THUMBNAIL HERE" class="rounded float-start" alt=""">    
        <h5 class="mb-1">ASTRONAUT NAME (ASTRONAUT STATUS HERE)</h5>
        <small class="float-end">born DATE OF BIRTH HERE</small>
    </div>
    <small>ASTRONAUT NATIONALITY HERE (ASTRONAUT AGENCY NAME)</small>    
    <p class="mb-1">ASTRONAUT BIO HERE </p>
</li>
*/
const renderAstronautListItem = function(astronautData, listElement) {
    // Get the properties via destructuring the object
    const { name, agency, bio, status, date_of_birth, in_space, nationality, profile_image_thumbnail } = astronautData;

    let statusDescription = status.name;
    if(in_space) {
        statusDescription += ' | Currently in Space'
    }
    const listItem = `<li href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
            <img src="${profile_image_thumbnail}" class="rounded float-start" alt="${name} thumbnail">
            <h5 class="mb-1">${name} (${statusDescription})</h5>
            <small class="float-end">born ${date_of_birth}</small>
        </div>
        <small>${nationality} (${agency.name})</small>
        <p class="mb-1">${bio}</p>
    </li>`;
    listElement.innerHTML += listItem;
}

export { renderAstronautListItem }