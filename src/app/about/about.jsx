var u = require('com/u');

function ListaCidades() {
	return m.request({method:'GET', url:'http://private-­fe2a­-scuptel.apiary-­mock.com/ddd/details'});
};
function ListaValores() {
	return m.request({method:'GET', url:'http://private-­fe2a­-scuptel.apiary-­mock.com/ddd/pricing'});
};
function ListaPlanos() {
	return m.request({ method: 'GET', url: 'http://private-­fe2a­-scuptel.apiary-­mock.com/plans' });
};

function controller() {
  this.cidades = ListaCidades();
  this.filterText = m.prop("");
  this.planos = ListaPlanos();
  this.tarifa_valores = ListaValores();
  this.select_origem = m.prop("");
  this.select_destino = m.prop("");

  modal_ddd = function(content,valor) {
  	return [
		m('.col-md-3',[
			m('h4',content),
			m('p',
				m('span','R$ '+valor)
			)
		])
  	];
  };
  calcula_ddd = function(tempo_ddd,plano, valor) {
  	if (valor == 0) return '-';
  	switch(plano){
  		case ('0'):
			resultado = ((tempo_ddd - 0) * valor).toFixed(2);
  			return(resultado);
  			break;
  		default:
  			if (tempo_ddd - plano > 0 ){
			  	resultado = ((tempo_ddd - plano) * valor * 1.10).toFixed(2);
			} else {
				resultado = '-';
			}
			return(resultado);
  			break;
  	}
  };
  busca_tarifa = function(ctrl,origem,destino) {
  	var valor_final = '0';
  	var arrayFiltro = ctrl.tarifa_valores().data;
	arrayFiltro.forEach(function(p) {
	  	if (p.origin == origem) {
		  	if (p.destiny == destino) {
		  		valor_final = p.price;
		  	}
		}
	});
	return valor_final;
  };
	this.calcula = function() {
		tempo_ddd = text_tempo.value;
		valor_ddd = busca_tarifa(this,select_origem.value, select_destino.value);
		this.valores = [];
		var valores_temp = [];
		this.planos().data.forEach(function(p) {
			valores_temp.push(modal_ddd(p.plan,calcula_ddd(tempo_ddd,p.time,valor_ddd)));
		});
		this.valores.push(valores_temp);
		this.valores.push(modal_ddd('Normal',calcula_ddd(tempo_ddd,'0',valor_ddd)));
	}.bind(this);
}

function view(ctrl) {
  var rows = [];
  ctrl.cidades().data.forEach(function(p) {
  	if (p.city.indexOf(ctrl.filterText()) === -1 ) {
		return;
    }
    rows.push(
      m('option[value='+p.ddd+']', p.city)
    );
  });
  

  return INCLUDE('about/about.tpl');
}

exports.label = 'cidades';
exports.controller = controller;
exports.view = view;





// var u = require('com/u');
// var todo = exports;

// todo.Todo = function(data) {
//   this.description = m.prop(data.description);
//   this.done = m.prop(false);
// };

// todo.TodoList = Array;

// todo.controller = function() {
//   this.list = new todo.TodoList();
//   this.description = m.prop("");

//   this.addTodo = function(description) {
//     this.list.push(new todo.Todo({
//       description: description
//     }));
//   }.bind(this);

//   this.add = function() {
//     if (this.description()) {
//       this.addTodo(this.description());
//       this.description("");
//     }
//   }.bind(this);

//   this.addTodo('try next example');
//   this.addTodo('learn Mithril');
//   this.addTodo('clear this list');
// };

// todo.view = function(ctrl) {
//   return INCLUDE('about/about.tpl');
// };
