/*
Enter JS here

HTML for list topic list item
<li class="list-group-item">
    NEW TOPIC HERE
</li>
*/


// STEP 1: select the topic list & new topic form
let topicList = document.querySelector(".topics-list");
let newTopicForm = document.querySelector(".new-topic-form");

// STEP 5: create a function with a parameter for the topic name
const addTopicToPage = (topicName) => {
    // STEP 6: add the topics inside the page
    topicList.innerHTML += `<li class="list-group-item">${topicName}</li>`
}


// STEP 2: listening to the event and stop the form from propagating
newTopicForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    event.stopPropagation()

    // STEP 3: get the input elements
    let topicElement = event.target.elements["new-topic"]
    console.log(topicElement.value)

    // STEP 4: add input validation
    if (topicElement.value === "") {
        topicElement.classList.add("is-invalid")
        return
    }

    topicElement.classList.remove("is-invalid")

    // STEP 7: call the function to add the topic to the page
    addTopicToPage(topicElement.value)
    
})
