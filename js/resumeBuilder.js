/*
	This is empty on purpose! Your code to build the resume will go here.
*/
var name = "Yuji Nelson";
var role = "Front-End Developer / Designer";
// $('#main').append("Yuji Nelson");
var thoughts = "I am Yuji Nelson and God is AWESOME!";
var bio = {
	"name" : "Yuji",
	"role" : "Front-End Developer / Designer",
	"contactInfo" : "https://www.linkedin.com/in/yujinelson",
	"pictureURL" : "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/8/005/02b/1cf/22e6f50.jpg",
	"welcome" : "Welcome",
	"skills" : ["HTML", "CSS" ,"JavaScript"]
};

// var moreThoughts = thoughts.replace("AWESOME", "GREAT!");
// $('#main').append(moreThoughts);

var formattedName = HTMLheaderName.replace("%data%", bio.name);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$('#header').prepend(bio.skills);
$('#header').prepend(bio.welcome);
$('#header').prepend(bio.pictureURL);
$('#header').prepend(bio.contactInfo);
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);