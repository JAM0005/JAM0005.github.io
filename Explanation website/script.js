explanationText = "balls";
document.getElementById("explanationText").innerText = explanationText;

textToEnter = `Computing SAC 1 Part 1 Project Proposal

What is your chosen infographic topic and why is this a topic you wish to research?
Our chosen infographic topic is the benefits of remote/e learning in comparison to traditional learning. 
This is a relevant topic as the majority of students in Victoria experienced both face-to-face and remote 
learning over the past two years due to the pandemic. This topic would be interesting to research because 
there are both positive and negative effects for both online and face-to-face learning, also with different 
opinions and views. The infographic would give a higher-level understanding of public opinion and help 
educators focus on improving specific areas of both kinds of learning.
 
Purpose of the infographic website – Inform. What does it aim to achieve?
We wish to inform the public about general perception of remote learning, and areas that can be improved, 
should we need to do it again. It allows the viewer to make decisions/views by themselves with the information
given, as well as to remove any biases from personal experience and gain a simpler understanding of the issues.
 
Intended audience – Describe the type of students this infographic is targeted towards and why, eg age group, 
ethnicity, gender, interests, etc
The intended audience is teachers, students and parents with kids in school, because remote learning (and 
changes to it) will have the most effect on these people. Teachers would be interested in whether permanent 
online schooling would be better than on-site learning. Students and parents of students would be interested 
if their child would do better learning online.
The decision makers at schools (eg. principal, directors, education department etc) are also targeted as the 
data collected from the point of view of the students would help them make decisions in the future related to 
onsite versus online learning. 


What information based on primary data are you aiming to collect and present on your infographic?
We are aiming to collect data on whether people prefer remote learning compared to onsite learning and what 
benefits they find in each method. For instance, relative concentration, time use, and enjoyment from each 
method of learning from the point of view of students, and ease of teaching, accuracy, and confidence in the 
method from teachers.
 
What information based on secondary data are you aiming to research and present on your website?
We are planning on accessing possibly new sights or some peoples recounts of the time on online forms such 
as atar notes or other websites primarily used by highschool students. Additionally, primary information on 
primary students may be hard, due to our contacts mostly in high school.


What will you do to ensure the integrity of your primary and secondary data (i.e reliable and free from bias)?
We will create our own form and ask people directly. We will use information from government websites along 
with direct sources from other schools or from students on the news of different age groups and nationalities. 
To make our primary data about schooling reliable and free from bias we will make our survey anonymous to make 
our participants not swayed to make their answers more favourable. 
To ensure our secondary data is free from bias 
 
7. What will you do to ensure the ethical collection, storage and use of primary collected data?
Ethical Collection:
Our surveyees would not be forced to take the form. All our participants will be kept anonymous and no name or 
email will be tied to their results, so that the data can not be linked to anyone, creating anonymity. We will 
ask the user for their consent to use their data for our infographics. 
Ethical Storage:
Our primary collected data will be protected with passwords and access rights to prevent others from accessing 
the data. Once the primary collected data has been used for the infographic, the data will be destroyed to avoid 
the data to be used elsewhere. We will have back-ups of our data in a separate location such as a saved excel page, 
however this will also get destroyed after the infographic has been made.
	Ethical Use of Primary Collected Data:
We will ensure to inform our participants about who has access to their data, how their data is being used and 
how their data will be presented, before they fill out our survey. We will create a consent form that they are 
willing to have their data being accessed by David James, Alan Nie, Ameya Mahesh, Alp Tuna and Jonathan Ch’ng, 
that the data will be used to make an infographic about the benefits and disadvantages of online learning compared 
to face-to-face learning, and that it would be presented on a website.`;

document.body.style.backgroundImage = `url(../meta/background2.jpg)`;
function getEntry(number){
    entry = textToEnter.substr(0,number);
    document.getElementById("explanationText").innerText = entry;
}


getEntry(5);
setTimeout(() => {getEntry(6);},2000);

for (let i = 0;i<4800;i++){
    getEntry(i);
    setTimeout(() => {getEntry(i+1);},3*i);

}
  /*
for (let i = 0;i < 4660;i++){
    entry = textToEnter.substr(1,i+2);
    document.getElementById("explanationText").innerText = entry;
    sleep(100);
}*/