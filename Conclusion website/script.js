conclusionText = "balls";
document.getElementById("conclusionText").innerText = conclusionText;

textToEnter = `Conclusion:
The Year 11s surveyed had a strong predilection for onsite learning, believing it to be 
more effective for learning as well as easier to remain motivated. However, they did spot 
some pretty large issues. For one, it was much easier to prepare for the day during online 
learning (not having to bring books to school and getting up later), as well as to centre 
one’s studies around what was most important for one’s learning. Online learning also gave 
students time to organise themselves better.
Solutions to these problems include having students keep their books either at school or at 
home the entire time - digital text- and workbooks would make this easy. Also, starting 
school at a later time, say 9:30-10:00, would benefit students. A more centralised way of 
setting homework and SAC times would also be beneficial. However, onsite learning was 
preferable for the majority of students, so other aspects should remain the same.
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