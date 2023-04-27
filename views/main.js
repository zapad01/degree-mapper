


let jsonData = [
   {
   "id": 1,
   "CourseNum": 132,
   "Description": "Principals of Computing and Information Systems",
   "AlphaCode": "CIS"
 },{
   "id": 2,
   "CourseNum": 150,
   "Description": "Programming Fundamentals I",
   "AlphaCode": "CSC"
 },{
   "id": 3,
   "CourseNum": 165,
   "Description": "Intro to Web Development",
   "AlphaCode": "CSC"
 },{
   "id": 4,
   "CourseNum": 171,
   "Description": "Networking I",
   "AlphaCode": "CIS"
 },{
   "id": 5,
   "CourseNum": 352,
   "Description": "Into to Enterprise Computing",
   "AlphaCode": "CIS"
 },{
   "id": 6,
   "CourseNum": 360,
   "Description": "CIS: Analysis/Design",
   "AlphaCode": "CIS"
 },{
   "id": 7,
   "CourseNum": 366,
   "Description": "Intro to Data Base",
   "AlphaCode": "CIS"
 },{
   "id": 8,
   "CourseNum": 372,
   "Description": "Computer Harware and Operating Systems",
   "AlphaCode": "CIS"
 },{
   "id": 9,
   "CourseNum": 380,
   "Description": "Operating Systems",
   "AlphaCode": "CSC"
 },{
   "id": 10,
   "CourseNum": 480,
   "Description": "Seminar",
   "AlphaCode": "CIS"
 }
];
 
window.onload = buildTable(jsonData);

$('#search-input').on('keyup', function(){
   var value = $(this).val()
   console.log('Value:', value)
   var data = searchTable(value, myArray)
   buildTable(jsonData)
})

 function searchTable(value, data){
  var filteredData = [];

  for(var i = o; i < data.length; i++){
   value = value.tolowercase();
   var name = data[i].name.tolowercase();

   if(name.includes(value)){
      filteredData.push(data[i])
   }
  }

  return filteredData;
}

function buildTable(data){

   var table = document.getElementById('myTable');

   table.innerHTML = '';

   for (var i = 0; i < data.length; i++){

      var row =`<tr>
                  <td>${data[i].AlphaCode}</td>
                  <td>${data[i].CourseNum}</td>
                  <td>${data[i].Description}</td>
               </tr>`
      table.innerHTML += row;
   }
}