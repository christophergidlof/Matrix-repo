//array with name and coontroll codes
var nameList = [{un: 'Matrix', cn:'123'}, {un:'Matris', cn:'777'}, {un:'kalle', cn:'888'}];

//type in name and controlname
var username = prompt("Please type in your username", "e.g. Matrix");
var controlname = prompt("Please type in your controlname", "e.g. check");



//for loop that loop the  array of names
for (var i = 0; i < nameList.length; i++) {
    //if username equal to namelist username and controlname equal to namelist control name
    if (username == nameList[i].un && controlname == nameList[i].cn) {
      //type type out welcome text
      console.log('welcome ' + nameList[i].un);
        break;
    }
  //else type incorrect
    else {
        console.log('incorrect');
    }
}
