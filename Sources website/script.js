conclusionText = "balls";
document.getElementById("conclusionText").innerText = conclusionText;
/*
textToEnter = `https://lecturetalks.com/online-learning-pros-and-cons-vs-onsite-learning/
https://news.yale.edu/2020/01/30/national-survey-students-feelings-about-high-school-are-mostly-negative
https://pinnacleeducation.ae/online-learning-vs-onsite-learning/ 
https://atarnotes.com/forum/index.php?topic=190922.0 
https://highfocuscenters.pyramidhealthcarepa.com/the-effects-of-online-learning-on-a-teens-mental-health/ 
`;
*/
textToEnter = `
Gray, N. Simkiss, N. Snowden, R. Walters, T. (2021). Secondary school students’ perception of the online 
teaching experience during COVID-19: The impact on mental wellbeing and specific learning difficulties. 
https://bpspsychub.onlinelibrary.wiley.com/doi/10.1111/bjep.12475

Belli, B. (2020). National survey: Students’ feelings about high school are mostly negative. 
https://news.yale.edu/2020/01/30/national-survey-students-feelings-about-high-school-are-mostly-negative 

Fleming, S. (2021). Kids learn better in class than when studying from home, finds teacher survey. 
https://www.weforum.org/agenda/2021/03/classroom-teaching-better-than-remote-learning-education/

Lecture Talks. (2021, June 21) Online Learning Pros and Cons Vs.Onsite Learning. 
https://lecturetalks.com/online-learning-pros-and-cons-vs-onsite-learning/

High Focus Centers. (2020, November 20). The Effects of Online Learning on a Teen’s Mental Health. 
https://highfocuscenters.pyramidhealthcarepa.com/the-effects-of-online-learning-on-a-teens-mental-health/

ATAR Notes. (2020, April 25). TOPIC: IS REMOTE LEARNING SOMEHOW AN ADVANTAGE FOR YEAR 12'S?. 
https://atarnotes.com/forum/index.php?topic=190922.0

`
document.body.style.backgroundImage = `url(../meta/background2.jpg)`;
function getEntry(number){
    entry = textToEnter.substr(0,number);
    document.getElementById("conclusionText").innerText = entry;
}




for (let i = 0;i<1200;i++){
    getEntry(i);
    setTimeout(() => {getEntry(i+1);},3*i);

}
getEntry(500);
  /*
for (let i = 0;i < 4660;i++){
    entry = textToEnter.substr(1,i+2);
    document.getElementById("explanationText").innerText = entry;
    sleep(100);
}*/