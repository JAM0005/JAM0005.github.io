conclusionText = "balls";
document.getElementById("conclusionText").innerText = conclusionText;

textToEnter = `How online learning affects students compared to onsite learning. 
We aim to find out how students in secondary school (between Year 7 and Year 12) 
feel about online learning compared to onsite learning. By asking various questions 
related to how their experiences have been with both learning methods in a survey, 
we aim to collect data that can help highlight the pros and cons of each learning 
method. 
During the covid-19 pandemic in 2020 and 2021, many secondary schools were pushed 
into online learning for extended periods of time. This change in setting for 
students, which has not been faced before in secondary schools, has exposed students 
to a different way of learning. Throughout this time of over 200 days of online 
learning, students have built their own opinions on this topic. Both methods of 
learning have various benefits and drawbacks, for which each student has their own 
opinions. 
In the future, there is a very high possibility that schools may include online 
learning sections when students cannot come physically to school, perhaps during 
pandemics, natural disasters, etc. The data we will collect will greatly help 
schools, teachers, and authorities to make informed decisions that take into 
consideration the opinions of students. 
Overall, we aim to collect data on how students feel about online learning compared 
to onsite learning as this question of onsite versus online learning is becoming 
especially prevalent in today's world.
`;

document.body.style.backgroundImage = `url(../meta/background2.jpg)`;
function getEntry(number){
    entry = textToEnter.substr(0,number);
    document.getElementById("conclusionText").innerText = entry;
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