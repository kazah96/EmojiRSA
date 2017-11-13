var proc = ["read", "write", "pd", "pp"];
var mas = [];



function fill_table(logins, files, table)
{

	var tble = document.getElementById(table);
	tble.innerHTML = "";

	var loginStr = document.getElementById(logins).value;
	var logins = loginStr.split(",");

	var fileStr = document.getElementById(files).value;
	console.log("fsd" + fileStr);
	var files = fileStr.split(",");

	
	generate_matrix(logins, files);
	console.log(TableOutput(logins, files));
	tble.innerHTML += TableOutput(logins, files);

}

function generate_matrix(user, object)
{

  for (var i = 0; i < object.length; i++){
    mas[i] = [];
    for (var j = 0; j < user.length; j++){
        mas[i][j] = randomInteger(0, 3);
 }}
}

function randomInteger(min, max) {
    var rand = Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }


 


function TableOutput(user, object)
{
	var str = "";
	for(var i=0; i<object.length; i++)
	{
		if(i==0) {
				var s = "<tr><th>Login</th>";

					console.log("fsdfdsf");
					for(var j=0;j<user.length;j++)
					{
						s+= "<th>" + user[j] + "</th>";
					}
					s+="</tr>";
					str+=s;
						
				
			}
			str+="<tr><th>" + object[i] +"</th>";
		
		for(var j=0;j<user.length;j++)
		{
			
			str+="<td>" + proc[mas[i][j]] +"</td>";
		}	
		str+="</tr>";
	}
	return str;
}


		
	