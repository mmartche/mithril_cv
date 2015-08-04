m('.about content-center',[
  m('h1','Scup Fale'),
  m('hr'),
  m('h2','Comparar Planos'),
  m('form.btn-group[role="group"][onsubmit={u.silence()}]',[
    m('.col-md-4',[
      m('label','Origem'),
      m('select.form-control#select_origem',{onchange:ctrl.calcula},[
        m('option','Escolha a cidade'),
        rows
      ])
    ]),
    m('.col-md-4',[
      m('label','Destino'),
      m('select.form-control#select_destino',{onchange:ctrl.calcula},[
        m('option','Escolha a cidade'),
        rows
      ])
    ]),
    m('.col-md-4',[
      m('label.content-center','Tempo'),
      m('.input-group', [
        m('input#text_tempo.form-control',{placeholder:"Tempo...",onkeyup:ctrl.calcula}),
        <span class="input-group-addon" id="basic-addon2">minutos</span>
      ])

    ])
  ]),
  m('hr'),
  ctrl.valores
])