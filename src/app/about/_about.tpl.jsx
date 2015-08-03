m('.about content-center',[
  m('h1','Scup Fale'),
  m('hr'),
  m('h2','Comparar Planos'),
  m('form.btn-group[role="group"][onsubmit={u.silence()}]',[
    m('.col-md-3',[
      m('label','Origem'),
      m('select.form-control.input-lg#select_origem',[
        m('option','Escolha a cidade'),
        rows
      ])
    ]),
    m('.col-md-3',[
      m('label','Destino'),
      m('select.form-control.input-lg#select_destino',[
        m('option','Escolha a cidade'),
        rows
      ])
    ]),
    m('.col-md-3',[
      m('label','Tempo'),
      m('input#text_tempo.input-lg[placeholder="Tempo"]'),
    ]),
    m('.col-md-3',[
      <button class="input-lg" onclick={ctrl.calcula}>Calcular</button>
    ])
  ]),
  m('hr'),
  ctrl.valores
])