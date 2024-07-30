document.addEventListener("DOMContentLoaded", function() {
    // Select buttons and elements
    const buyNowButton = document.querySelector(".bnt_style_buy");
    const closeOfferButton = document.querySelector(".bnt_style_close");
    const contractStateElement = document.querySelector(".active_closed");
    const customerEditButton = document.querySelectorAll(".double_middle .wrapper_img")[0];
    const vehicleEditButton = document.querySelectorAll(".double_middle .wrapper_img")[1];
    const customerInfoElements = document.querySelectorAll(".wrapper_middle .wrapper_info p");
    const vehicleInfoElements = document.querySelectorAll(".wrapper_right .wrapper_info p");

    // Initial states
    let contractState = "Active";
    let contractPaid = false;

    // Buy Now button event listener
    buyNowButton.addEventListener("click", function() {
        contractState = "ActivePaid";
        contractStateElement.textContent = contractState;
        addEvent("Buy Now");
    });

    // Close Offer button event listener
    closeOfferButton.addEventListener("click", function() {
        contractState = "Closed";
        contractStateElement.textContent = contractState;
        addEvent("Close Offer");
    });

    // Edit customer info
    customerEditButton.addEventListener("click", function() {
        editInfo(customerInfoElements);
    });

    // Edit vehicle info
    vehicleEditButton.addEventListener("click", function() {
        editInfo(vehicleInfoElements);
    });

    // Function to add event to the events table
    function addEvent(eventType) {
        const eventsTable = document.querySelector(".event table tbody");
        const newRow = eventsTable.insertRow(0);
        const dateCell = newRow.insertCell(0);
        const typeCell = newRow.insertCell(1);
        const currentDate = new Date().toLocaleString();
        dateCell.textContent = currentDate;
        typeCell.textContent = eventType;
    }

    // Function to edit information
    function editInfo(infoElements) {
        infoElements.forEach(function(element) {
            const newValue = prompt("Edit:", element.textContent);
            if (newValue !== null && newValue !== "") {
                element.textContent = newValue;
            }
        });
    }
});
