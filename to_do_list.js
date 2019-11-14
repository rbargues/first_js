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

const make_list = (list) => {
	var task_to_add = document.getElementById("item")
	list.push(task_to_add)
	var to_do = new to_do_list(list)
}


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

