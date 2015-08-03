var get_data = {
		get_ddd_pricing: function () {
			return m.request({ method: 'GET', url: 'http://private-­fe2a­-scuptel.apiary-­mock.com/ddd/pricing' });
		},

		get_ddd_details : function () {
			return m.request({ method: 'GET', url: 'http://private-­fe2a­-scuptel.apiary-­mock.com/ddd/details' });
		},

		get_plans : function () {
			return m.request({ method: 'GET', url: 'http://private-­fe2a­-scuptel.apiary-­mock.com/plans' });
		},
	};
var template_data = function (ctrl) {
  return [
    m('.about content-center',[
      m('h1','Scup Fale'),
      m('hr'),
      m('h2','Comparar Planos'),
      m('form.btn-group[role="group"]',[
        m('.col-md-4',[
          m('label','Origem'),
          m('select.form-control[aria-describedby="sizing-addon1"]',[
            m('option','DDDa'),
            m('option[value="011"]','sp'),
            m('option[value="021"]','rj')
          ])
        ]),
        m('.col-md-4',[
          m('label','Origem'),
          m('select.form-control[aria-describedby="sizing-addon1"]',[
            m('option','DDD'),
            m('option[value="011"]','sp'),
            m('option[value="021"]','rj')
          ])
        ]),
        m('.col-md-4',[
          m('label','Origem'),
          m('select.form-control[aria-describedby="sizing-addon1"]',[
            m('option','DDD'),
            m('option[value="011"]','sp'),
            m('option[value="021"]','rj')
          ])
        ])
      ]),
      m('hr'),
      m('.col-md-3',[
        m('h4','Fale + 30'),
        m('p',
          m('span','R$ 355ss,50')
        )
      ]),
      m('.col-md-3',[
        m('h4','Fale + 30'),
        m('p',
          m('span','R$ 355,50')
        )
      ]),
      m('.col-md-3',[
        m('h4','Fale + 30'),
        m('p',
          m('span','R$ 355,50')
        )
      ]),
      m('.col-md-3',[
        m('h4','Fale + 30'),
        m('p',
          m('span','R$ 355,50')
        )
      ])
    ])
  ];
};

module.exports = template_data;