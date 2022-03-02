conclusionText = "balls";
document.getElementById("conclusionText").innerText = conclusionText;

textToEnter = `https://lecturetalks.com/online-learning-pros-and-cons-vs-onsite-learning/
https://news.yale.edu/2020/01/30/national-survey-students-feelings-about-high-school-are-mostly-negative
https://pinnacleeducation.ae/online-learning-vs-onsite-learning/ 
https://atarnotes.com/forum/index.php?topic=190922.0 
https://highfocuscenters.pyramidhealthcarepa.com/the-effects-of-online-learning-on-a-teens-mental-health/ 
`;

document.body.style.backgroundImage = `url(../meta/background2.jpg)`;
function getEntry(number){
    entry = textToEnter.substr(0,number);
    document.getElementById("conclusionText").innerText = entry;
}




for (let i = 0;i<450;i++){
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