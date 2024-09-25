/*
 * Main Javascript file
 */

// function get_portfolio_body() {
let get_portfolio_body = function() {
    // Obtain the 'portfolio_body' div widget/component ID's object
    let portfolio_body = document.getElementById("portfolio-body");

    // Perform simple console log
    console.log(`Object portfolio_body : ${portfolio_body}`);
};

function myFunction() {
	/*
	 * Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon
	 */
	var x = document.getElementById("myTopnav");

	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

function set_project_entry_name() {
    // Get the object ID of the element
    let lbl_entry_Name = document.getElementById("portfolio-project-entry-1-name");

    // Set the project name
    lbl_entry_Name.innerText = "New Project";
}

function sticky_detect_Scrolling(header, init_offset, init_opacity, new_opacity_value=0.5) {
    /*
     * Detect scrolling and sticky is activated
     */
    // Check if the Y-axis offset is more than the sticky
    if (window.scrollY > init_offset) {
        // Y axis > initial position == Translucent
        // Remove the solid attribute to make the navbar translucent
        header.style.opacity = new_opacity_value;
    }
    else {
        // Y axis <= initial position == Opaque
        // Make the navbar solid if the Y axis is away from the initial offset
        header.style.opacity = init_opacity;
    }
}

/*
 * Navigation Bar style functions
 */
function navbar_scroll() {
    /*
     * Navbar scrolling functionalities
     */

    // Get the header of the navbar
    let header = document.getElementById("portfolio-Navbar");

    // Obtain the initial offset position of the navbar
    let init_navbar_offset = header.offsetTop;

    // Obtain the initial opacity of the navbar
    let init_navbar_opacity = header.style.opacity;

    /*
     * Data Validation: Set a null value
     */
    if (init_navbar_opacity == "") {
        init_navbar_opacity = "1.0";
    }

    // Detect when the user scrolls to update the header styles
    window.onscroll = function() {
        // Obtain the new offset position of the navbar
        let curr_navbar_offset = header.offsetTop;

        // Trigger the Callback Event Handler function
        sticky_detect_Scrolling(header, init_navbar_offset, init_navbar_opacity);
    }
}

/*
 * Main Function Calls
 */
get_portfolio_body();
//set_project_entry_name();
navbar_scroll();

