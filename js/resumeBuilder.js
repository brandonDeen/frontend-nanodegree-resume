	var data = "%data%";
	var bio = {
		name: "Brandon Deen",
		role: "Software Engineer",
		picURL: "images/fry.jpg",
		contacts: { email: "brandon.deen47@gmail.com", github: "brandonDeen", mobile: "555-867-5306", location: "Mansfield, TX" },
		message: "How you doin?",
		skills: ["Data Science", "Web Development", "General Nerdiness", "Star Wars Trivia"],
		displayHeader: function(){
			var skills = '';
			for(var i=0; i<bio.skills.length; i++){ 
				skills += HTMLskills.replace(data, bio.skills[i]); 
			}

			$("#header").append(HTMLbioPic.replace(data, bio.picURL));
			$("#header").prepend(HTMLheaderRole.replace(data, bio.role));
			$("#header").prepend(HTMLheaderName.replace(data, bio.name));
			$("#header").append(HTMLwelcomeMsg.replace(data, bio.message));

			if( bio.skills.length > 0 ){
				$("#header").append(HTMLskillsStart);
				$("#skills").append(skills);
			}
			var formattedContacts = HTMLemail.replace(data, bio.contacts.email) +
				HTMLmobile.replace(data, bio.contacts.mobile) + 
				HTMLgithub.replace(data, bio.contacts.github) +
				HTMLlocation.replace(data, bio.contacts.location);
			$("#topContacts").prepend(formattedContacts);
		},
		displayFooter: function(){ 
			var formattedContacts = HTMLemail.replace(data, bio.contacts.email) +
				HTMLmobile.replace(data, bio.contacts.mobile) + 
				HTMLgithub.replace(data, bio.contacts.github) +
				HTMLlocation.replace(data, bio.contacts.location);
			$("#footerContacts").prepend(formattedContacts); 
		}
	};
	var work = {
		jobs: 
		[
			{
				role: "Associate Software Engineer",
				employer: "Fidelity Investments",
				start: "November 2015",
				end: "Present",
				location: "Westlake, TX",
				description: "Call Routing: developed software for migration to Fidelity\'s Next Generation Call Center using the Genesys Platform (Javascript), developed test automation using Ruby and Cucumber, as well as updating network plans (At&T Route It)"
			},
			{
				role: "Associate Software Engineer",
				employer: "Fidelity Investments",
				start: "June 2015",
				end: "November 2015",
				location: "Raleight, NC",
				description: "Leap Associate: Training Phase - developed skills in SQL, Java, Spring, Web Services, HTML, CSS, Javascript, C#, .NET, WPF. <br>Project Phase - developed software for the Quote Audit Meter Report, in a Full Stack environment (Java, Spring, Javascript, HTML/Bootstrap)."
			},
			{
				role: "Company Executive Officer",
				employer: "U.S. Army",
				start: "June 2008",
				end: "August 2012",
				location: "Fort Leonard Wood, MO",
				description: "B Company/554th Engineer Battalion/1st Engineer Brigade: responsible for ..."
			}
		],
		display: function(){
			for(job in work.jobs){
				$("#workExperience").append(HTMLworkStart);
				$(".work-entry:last").append(HTMLworkEmployer.replace(data, work.jobs[job].employer) + HTMLworkTitle.replace(data, work.jobs[job].role));
				$(".work-entry:last").append(HTMLworkDates.replace(data, work.jobs[job].start +'-'+ work.jobs[job].end));
				$(".work-entry:last").append(HTMLworkLocation.replace(data, work.jobs[job].location));
				$(".work-entry:last").append(HTMLworkDescription.replace(data, work.jobs[job].description));
			}
		}	
	};

	var education = {
		schools: [
			{
				name: "University of Texas at Arlington",
				degree: "Bachelors of Science",
				major: "Software Engineering",
				gpa: 3.0,
				dates: "January 2013-May 2015",
				location: "Arlington, TX"
			},
			{
				name: "Stephen F. Austin State Universiyt",
				degree: "Bachelors of Science",
				major: "Phsyics",
				gpa: 3.0,
				dates: "September 2006-December 2010",
				location: "Nacogdoches, TX"

			}
		],
		online_courses: [
			{
				name: "HTML & CSS",
				school: "Udacity",
				url: "https://www.udacity.com/course/intro-to-html-and-css--ud304",
				dates: "June 2016"
			},
			{
				name: "Beginner Javascript",
				school: "Udacity",
				url: "https://www.udacity.com/course/javascript-basics--ud804",
				dates: "June 2016"
			},
		],
		display: function(){
			$("#education").append(HTMLschoolStart);
			for(school in education.schools){
				$(".education-entry").append(HTMLschoolName.replace(data, education.schools[school].name)
						+ HTMLschoolDegree.replace(data, education.schools[school].degree)
						+ HTMLschoolDates.replace(data, education.schools[school].dates)
						+ HTMLschoolMajor.replace(data, education.schools[school].major)
						+ HTMLschoolLocation.replace(data, education.schools[school].location)
					);
			}
			$(".education-entry").append(HTMLonlineClasses);
			for(course in education.online_courses){
				$(".education-entry").append(
					HTMLonlineTitle.replace(data, education.online_courses[course].name)
					+ HTMLonlineSchool.replace(data, education.online_courses[course].school)
					+ HTMLonlineDates.replace(data, education.online_courses[course].dates)
					+ HTMLonlineURL.replace(data, education.online_courses[course].url)
				);
			}
		}
	};
	var projects = {
		projects:[
			{
				name: "Portfolio Page", 
				description: "Portfolio page following the Udacity HTML & CSS course",
				github: "",
				image: ""
			},
			{
				name: "Resume Page", 
				description: "Resume page following the Udacity Javascript Beginner course",
				github: "",
				image: ""
			}
		],
		
		display: function(){ 
			$("#projects").append(HTMLprojectStart);
			for(project in projects.projects){
				var formattedProject = 
					HTMLprojectTitle.replace(data, projects.projects[project].name).replace('#', projects.projects[project].github) +	
					HTMLprojectDescription.replace(data, projects.projects[project].description) +
					HTMLprojectImage.replace(data, projects.projects[project].image);
				$(".project-entry:last").append(formattedProject); 
			}
		}
	};

/**** add elements with jQuery ******/
function displayMap(){
	$("#mapDiv").append(googleMap);
}

function inName(name){
	name = name.trim().split(' ');
	name[0] = name[0].charAt(0).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();

	return name.join(' ');
}

bio.displayHeader();
work.display();
education.display();
projects.display();
displayMap();
bio.displayFooter();

$("#main").append(internationalizeButton);










