
var count = 1;

var final = document.createElement('p');
final.classList.add('gpa');
final.classList.add('cgpa');

var body = document.getElementById('body');
body.appendChild(final);

function addCol(addbtn){
	var list = document.createElement('li');
	list.classList.add('down');

	var course = document.createElement('div');
	var input = document.createElement('input');
	input.placeholder = "Course Code";
	course.classList.add('sec');

	var grade = document.createElement('div');
	grade.classList.add('sec');

	var unit = document.createElement('div');
	unit.classList.add('sec');

	var del = document.createElement('div');
	del.classList.add('sec');
	del.classList.add('logo');
	del.innerHTML = '<i class="far fa-trash-alt"></i>';
	del.addEventListener('click', () => {
		var item = del.parentNode;
		var parent = item.parentNode;
		parent.removeChild(item);
	});

	var List1 = document.createElement('select');
	List1.classList.add('courseGrade');
	List1.setAttribute('id', 'courseGrade');
	
	var opt1 = document.createElement('option');
	List1.options.add(opt1);
	opt1.text = "A"; opt1.value = "A";
	var opt2 = document.createElement('option');
	List1.options.add(opt2);
	opt2.text = "B"; opt2.value = "B";
	var opt3 = document.createElement('option');
	List1.options.add(opt3);
	opt3.text = "C"; opt3.value = "C";
	var opt4 = document.createElement('option');
	List1.options.add(opt4);
	opt4.text = "D"; opt4.value = "D";
	var opt5 = document.createElement('option');
	List1.options.add(opt5);
	opt5.text = "F"; opt5.value = "F";


	List1.appendChild(opt1);
	List1.appendChild(opt2);
	List1.appendChild(opt3);
	List1.appendChild(opt4);
	List1.appendChild(opt5);


	var List2 = document.createElement('select');
	List2.classList.add('courseUnit');
	List2.setAttribute('id', 'courseUnit');

	var op1 = document.createElement('option');
	List2.options.add(op1);
	op1.text = "1"; op1.value = "1";
	var op2 = document.createElement('option');
	List2.options.add(op2);
	op2.text = "2"; op2.value = "2";
	var op3 = document.createElement('option');
	List2.options.add(op3);
	op3.text = "3"; op3.value = "3";
	var op4 = document.createElement('option');
	List2.options.add(op4);
	op4.text = "4"; op4.value = "4";
	var op5 = document.createElement('option');
	List2.options.add(op5);
	op5.text = "5"; op5.value = "5";

	List2.appendChild(op1);
	List2.appendChild(op2);
	List2.appendChild(op3);
	List2.appendChild(op4);
	List2.appendChild(op5);


	course.appendChild(input);
	grade.appendChild(List1);
	unit.appendChild(List2);
	list.appendChild(course);
	list.appendChild(grade);
	list.appendChild(unit);
	list.appendChild(del);
	addbtn.appendChild(list);

}




function newSem(num){
	var container = document.createElement('div');
	container.classList.add('container');

	var top = document.createElement('div');
	top.classList.add('top');
	top.classList.add('exception');

	var h2 = document.createElement('h2');
	h2.innerHTML = "Semester " + count;

	var addbtn = document.createElement('div');
	addbtn.classList.add('add');
	addbtn.classList.add('addnew');
	addbtn.innerHTML = '<i class="fas fa-plus"></i>';
	
	if(num != 1){
		var delbtn = document.createElement('div');
		delbtn.classList.add('add1');
		delbtn.classList.add('delnew');
		delbtn.innerHTML = '<i class="far fa-trash-alt">';
		top.appendChild(delbtn);
		delbtn.addEventListener('click', () =>{
			var item = delbtn.parentNode.parentNode;
			var parent = item.parentNode;
			parent.removeChild(item);
			rename();
		});
	}
	

	top.appendChild(h2);
	top.appendChild(addbtn);

	var ul = document.createElement('ul');
	addbtn.addEventListener('click', () =>{
		addCol(ul);
	});

	var gp = document.createElement('p');
	gp.classList.add('gpa');
	gp.classList.add('p');

	var gpBtn = document.createElement('button');
	gpBtn.classList.add('calc');
	gpBtn.setAttribute('id', h2.innerHTML);
	gpBtn.innerHTML = 'Calculate GPA';
	gpBtn.addEventListener('click', () =>{
		console.log('jeled '+h2.innerHTML);
		ans = calculate(h2.innerHTML);
		gp.innerHTML = ans;
	});

	var btn = document.createElement('button');
	btn.classList.add('btn');
	btn.setAttribute('id', h2.innerHTML);
	btn.innerHTML = "Add New Semester";
	btn.addEventListener('click', () =>{
		count++;
		newSem();
	});


	container.appendChild(top);
	container.appendChild(ul);
	container.appendChild(gp);
	container.appendChild(gpBtn);
	container.appendChild(btn);

	var main = document.getElementById('main');
	main.appendChild(container);

}

function rename(){
	var all = document.getElementsByTagName('h2');
	for(var i = 0; i < all.length; i++){
		all[i].innerHTML = "Semester "+(i+1);
		count = (all.length);
	}
}

function calculate(cond){
	var grade = [];
	var unit = [];
	var h2 = document.getElementsByTagName('h2');
	for(var i = 0; i < h2.length; i++){
		if(h2[i].innerHTML == cond){
			var main = h2[i].parentNode.parentNode;
			var list = main.getElementsByTagName('select');
			for(var i = 0; i < list.length; i++){
				console.log(list[i].classList);
				if(list[i].classList == "courseGrade"){
					grade[i] = list[i].value;
				}
				if(list[i].classList == "courseUnit"){
					unit[i] = list[i].value;
				}
				
			}
			
		}
		
	}
	for(var i = 0; i < grade.length; i++){
		if(grade[i] == null){
			grade.splice(i,1);
		}
	}
	for(var i = 0; i < unit.length; i++){
		if(unit[i] == null){
			unit.splice(i,1);
		}
	}
	var grades = []; 
	var units = [];
	if(list && grade){
		for(var i = 0; i < grade.length; i++){
			switch(grade[i]){
				case 'A': 
					grades[i] = 5.0;
					break;
				case 'B': 
					grades[i] = 4.0;
					break;
				case 'C': 
					grades[i] = 3.0;
					break;
				case 'D': 
					grades[i] = 2.0;
					break;
				case 'F': 
					grades[i] = 0.0;
					break;
			}
		}
	}
	if(list && unit){
		for(var i = 0; i < unit.length; i++){
			switch(unit[i]){
				case '1': 
					units[i] = 1.0;
					break;
				case '2': 
					units[i] = 2.0;
					break;
				case '3': 
					units[i] = 3.0;
					break;
				case '4': 
					units[i] = 4.0;
					break;
				case '5': 
					units[i] = 5.0;
					break;
			}
		}
	}

	var totalUnits = 0.0;
	var totalPoints = 0.0;
	var mul = [];
	for(var i = 0; i < units.length; i++){
		totalUnits = totalUnits += units[i];
	}
	console.log(totalUnits);

	for(var i = 0; i < grades.length; i++){
		mul[i] = grades[i] * units[i];
	}
	console.log(mul);
	for(var i = 0; i < mul.length; i++){
		totalPoints = totalPoints + mul[i];
	}
	console.log(totalPoints);
	var gp = (totalPoints/totalUnits);
	console.log(gp.toFixed(2));

	var all = 0;
	setTimeout(() => {
		var p = document.getElementsByClassName('p');
		var check = 0;
		for (var i = 0; i < p.length; i++) {
			all += parseFloat(p[i].innerHTML);
			console.log(all);
		}
		var cgpa = parseFloat(all) / p.length;

		final.innerHTML = "CGPA : " + cgpa.toFixed(2);
	}, 10);

	return (gp.toFixed(2));
}



