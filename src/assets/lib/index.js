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

/*
 * Main Function Calls
 */
get_portfolio_body();
set_project_entry_name();

