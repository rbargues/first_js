class to_do_list {
	constructor(list){
		this.tasks = list;
	}
	add_task(task){
		this.tasks.push(task);
	}
	remove_task(task){
		this.tasks = this.tasks.filter(function(item){return item != task})
	}
}
var to_do_list = []


function render_list(arr){
var container = document.getElementById("container");
while (container.hasChildNodes()) {
          container.removeChild(container.lastChild);};
	to_do_list.forEach(function(item) {
	var task_item = document.createElement("button");
		task_item.innerHTML = 'done';
		task_item.onclick = function(){remove_task(item)};
	var task_label = document.createElement('div');
		task_label.innerHTML = item;

	container.appendChild(task_label);
	container.appendChild(task_item);
	container.appendChild(document.createElement('br'));
});
};

function add_task(){
	var task = document.getElementById("item").value;
	to_do_list.push(task)
	render_list(to_do_list)
};

function remove_task(task){
to_do_list = to_do_list.filter(function(item){return item != task})
      render_list(to_do_list)
};