var proc = ["read", "write", "pd", "pp"];
var mas = [];
var user_arr=[];
var file_arr=[];



function fill_table(logins, files, table)
{

	var tble = document.getElementById(table);
	tble.innerHTML = "";

	var loginStr = document.getElementById(logins).value;
	var logins = loginStr.split(",");
	user_arr = logins;

	var fileStr = document.getElementById(files).value;
	var files = fileStr.split(",");
	file_arr=files;

	
	generate_matrix(logins, files);
	tble.innerHTML += TableOutput(logins, files);

}

function generate_matrix(userArray, filesArray)
{

  for (var i = 0; i < filesArray.length; i++){
    mas[i] = [];
    for (var j = 0; j < userArray.length; j++){
        mas[i][j] = randomInteger(0, proc.length);
 }}
}

function randomInteger(min, max) {
    var rand = Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }


 
function get_access(loginElem, fileElem, outElem)
{
	var login = document.getElementById(loginElem).value;
	
	var file = document.getElementById(fileElem).value;
	
	var out = document.getElementById(outElem);
	
	for(var q=0; q<user_arr.length;q++)
	{		
		if(login == user_arr[q])
		{
			
			for(var w=0; w<file_arr.length;w++)
			{
				if(file == file_arr[w])
				{
				
					out.innerHTML = "<b>" + login + "</b> Has <b> "   
					+ proc[mas[q][w]] + "</b> to file <b>" + file +"</b>";
					return;
				}
				
			}
			out.innerHTML = ("file: " + file  + " is not exist");	
			return;
		}

	}
	out.innerHTML = ("login: " + login  + " is not exist");	
	
}

function TableOutput(user, object)
{
	var str = "";
	for(var i=0; i<object.length; i++)
	{
		if(i==0) {
				var s = "<tr><th>Login</th>";

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


		
	