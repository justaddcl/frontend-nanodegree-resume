/*
	This is empty on purpose! Your code to build the resume will go here.
*/


var bio = {
	"name" : "Yuji",
	"role" : "Front-End Developer / Designer",
	"contactInfo" : "https://www.linkedin.com/in/yujinelson",
	"pictureURL" : "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/8/005/02b/1cf/22e6f50.jpg",
	"welcome" : "Welcome",
	"skills" : ["HTML", "CSS", "SCSS", "JavaScript", "jQuery", "Bootstrap", "GitHub"]
};

var education = {
	"name" : "UW",
	"years" : "2011 - 2014",
	"city" : "Seattle"
};

var work = {
	"jobs" : [
		{
			"position" : "Front-End Developer / Designer",
			"employer" : "Boeing",
			"years" : "2014-Present",
			"city" : "Bellevue",
			"description" : "Who moved my chesse cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsber"
		},
		{
			"position" : "Graphic Designer",
			"employer" : "UW",
			"years" : "2013-Present",
			"city" : "Seattle",
			"description" : "Who moved my chesse cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsber"
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "Sample Project 1",
			"dates" : "2014",
			"description" : "Who moved my chesse cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsber"
		}
	]
};

if (bio.skills.length > 0) {
	$('#header').append(HTMLskillsStart);
	for(i = 0; i < bio.skills.length; i++) {
		$('#skills').append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

function displayWork() {
	for(job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);
		$('.work-entry:last').append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].position));
		$('.work-entry:last').append(HTMLworkDates.replace("%data%", work.jobs[job].years));
		$('.work-entry:last').append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
	}
}

displayWork();

function inName(name) {
	var splitName = name.trim().split(" ")

	return splitName[0].slice(0, 1).toUpperCase() + splitName[0].slice(1).toLowerCase() + " " + splitName[1].toUpperCase(); 
}

$('#main').append(internationalizeButton);

projects.display = function() {
	for(project in projects.projects) {
		$('#projects').append(HTMLprojectStart);
		$('.project-entry:last').append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
		$('.project-entry:last').append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
		$('.project-entry:last').append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));

		if(projects.projects[project].images.length > 0) {
			for(image in projects.projects[project].images) {
				$('.project-entry:last').append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]))
			}
		}
	}
}

projects.display();

$('#mapDiv').append(googleMap);