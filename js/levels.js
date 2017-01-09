var levels = [
  {
    helpTitle : "Selecionando elementos por seu tipo",
    selectorName : "Elemento",
    doThis : "Selecione os pratos",
    selector : "plate",
    syntax : "plate",
    help : "Selecione todos os elementos <strong>plate</strong>. ",
    examples : [
      '<strong>div</strong> seleciona todos <tag>div</tag> elementos.',
      '<strong>p</strong> seleciona todos <tag>p</tag> elementos.',
    ],
    boardMarkup: `
    <plate/>
    <plate/>
    `
  },
  {
    doThis : "Selecione o bento",
    selector : "bento",
    syntax : "bento",
    helpTitle : "Selecione elementos por seu tipo",
    selectorName : "Type Selector",
    help : "Selecione todos os elemetos com o tipo bento",
    examples : [
      '<strong>div</strong> seleciona todos <tag>div</tag> elementos.',
      '<strong>p</strong> seleciona todos <tag>p</tag> elementos.',
    ],
    boardMarkup: `
    <bento/>
    <plate/>
    <bento/>
    `
  },
  {
    doThis : "Selecione o prato fancy",
    selector : "#fancy",
    selectorName: "ID Selector",
    helpTitle: "Selecionte os elementos com um ID",
    syntax: "#id",
    help : 'Selecione o elemento com o <strong>id</strong> fancy.',
    examples : [
      '<strong>#cool</strong> seleciona os elementos com o <strong>id="cool"</strong>',
      '<strong>ul#long</strong> seleciona <tag>ul id="long"</tag>'
    ],
    boardMarkup : `
    <plate id="fancy"/>
    <plate/>
    <bento/>
    `
  },
  {
    helpTitle: "Selecione um elemento dentro de outro elemento",
    selectorName : "Selector descendente",
    doThis : "Selecione a maçã do prato",
    selector : "prato maçã",
    syntax: "A&nbsp;&nbsp;B",
    help : "Seleciona todos <strong>B</strong> dentro <strong>A</strong>. <strong>B</strong> é chamado de descendente porque ele está dentro de outro elemento.",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> selects all <tag>strong</tag> elements that are inside of any <tag>p</tag>',
      '<strong>#fancy&nbsp;&nbsp;span</strong> selects any <tag>span</tag> elements that are inside of the element with <strong>id="fancy"</strong>',
    ],
    boardMarkup : `
    <bento/>
    <plate>
      <apple/>
    </plate>
    <apple/>
    `
  },
  {
    doThis : "Selecione o picles dentro do prato fancy",
    selector : "#fancy pickle",
    helpTitle: "Combine the Descendant & ID Selectors",
    syntax: "#id&nbsp;&nbsp;A",
    help : 'You can combine any selector with the descendent selector.',
    examples : [
      '<strong>#cool&nbsp;span</strong> selects all <tag>span</tag> elements that are inside of elements with <strong>id="cool"</strong>'
    ],
    boardMarkup : `
    <bento>
    <orange/>
    </bento>
    <plate id="fancy">
      <pickle/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    `
  },
  {
    doThis : "Selecione todas as pequenas maçãs",
    selector : ".small",
    selectorName: "Class Selector",
    helpTitle: "Selecionando elementos pela sua classe",
    syntax: ".classname",
    help : 'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
    examples : [
    '<strong>.neato</strong> selects all elements with <strong>class="neato"</strong>'
    ],
    boardMarkup : `
    <apple/>
    <apple class="small"/>
    <plate>
      <apple class="small"/>
    </plate>
    <plate/>
    `
  },
  {
    doThis : "Selecione as pequenas laranjas",
    selector : "orange.small",
    helpTitle: "Combine the Class Selector",
    syntax: "A.className",
    help : 'You can combine the class selector with other selectors, like the type selector.',
    examples : [
      '<strong>ul.important</strong> selects all <tag>ul</tag> elements that have <strong>class="important"</strong>',
      '<strong>#big.wide</strong> selects all elements with <strong>id="big"</strong> that also have <strong>class="wide"</strong>'
    ],
    boardMarkup :`
    <apple/>
    <apple class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <plate>
      <orange/>
    </plate>
    <plate>
      <orange class="small"/>
    </plate>`
  },
  {
    doThis : "Select the small oranges in the bentos",
    selector : "bento orange.small",
    syntax: "Put your back into it!",
    helpTitle: "You can do it...",
    help : 'Combine o que você aprendeu nos últimos níveis para resolver esse!',
    boardMarkup : `
    <bento>
      <orange/>
    </bento>
    <orange class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <bento>
      <apple class="small"/>
    </bento>
    <bento>
      <orange class="small"/>
    </bento>
    `
  },
  {
    doThis : "Select all the plates and bentos",
    selector : "plate,bento",
    selectorName : "Comma Combinator",
    helpTitle: "Combine, selectors, with... commas!",
    syntax : "A, B",
    help : 'Thanks to Shatner technology, this selects all <strong>A</strong> and <strong>B</strong> elements. You can combine any selectors this way, and you can specify more than two.',
    examples: [
    '<strong>p, .fun</strong> selects all <tag>p</tag> elements as well as all elements with <strong>class="fun"</strong>',
    '<strong>a, p, div</strong> selects all <tag>a</tag>, <tag>p</tag> and <tag>div</tag> elements'
    ],
    boardMarkup : `
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <bento>
      <pickle/>
    </bento>
    <plate>
      <pickle/>
    </plate>
    <pickle/>
    <pickle class="small"/>
    `
  },
  {
    doThis : "Selecione todas as coisas!",
    selector : "*",
    selectorName:  "O seletor universal",
    helpTitle: "Você pode selecionar tudo!",
    syntax : "*",
    help : 'Você pode selecionar todos elementos com o seletor universal!',
    examples : [
      '<strong>p *</strong> selects any element inside all <tag>p</tag> elements.',
    ],
    boardMarkup : `
    <apple/>
    <plate>
      <orange class="small" />
    </plate>
    <bento/>
    <bento>
      <orange/>
    </bento>
    <plate id="fancy"/>
    `
  },
  {
    doThis : "Selecione todas as coisas do prato",
    selector : "plate *",
    syntax : "A&nbsp;&nbsp;*",
    helpTitle: "Combine the Universal Selector",
    help : 'This selects all elements inside of <strong>A</strong>.',
    examples : [
      '<strong>p *</strong> selects every element inside all <tag>p</tag> elements.',
      '<strong>ul.fancy *</strong> selects every element inside all <tag>ul class="fancy"</tag> elements.'
    ],
    boardMarkup: `
    <plate id="fancy">
      <orange class="small"/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    <apple class="small"/>
    <plate>
      <apple/>
    </plate>`
  },
  {
    doThis : "Selecione todas maçãs do próximo prato",
    selector : "plate + apple",
    helpTitle: "Select an element that directly follows another element",
    selectorName: "Adjacent Sibling Selector",
    syntax : "A + B",
    help : "This selects all <strong>B</strong> elements that directly follow <strong>A</strong>. Elements that follow one another are called siblings. They're on the same level, or depth. <br/><br/>In the HTML markup for this level, elements that have the same indentation are siblings.",
    examples : [
      '<strong>p + .intro</strong> selects every element with <strong>class="intro"</strong> that directly follows a <tag>p</tag>',
      '<strong>div + a</strong> selects every <tag>a</tag> element that directly follows a <tag>div</tag>'
    ],
    boardMarkup : `
    <bento>
      <apple class="small"/>
    </bento>
    <plate />
    <apple class="small"/>
    <plate />
    <apple/>
    <apple class="small"/>
    <apple class="small"/>
    `
  },
  {
    selectorName: "General Sibling Selector",
    helpTitle: "Select elements that follows another element",
    syntax: "A ~ B",
    doThis : "Select the pickles beside the bento",
    selector : "bento ~ pickle",
    help : "You can select all siblings of an element that follow it. This is like the Adjacent Selector (A + B) except it gets all of the following elements instead of one.",
    examples : [
      '<strong>A ~ B</strong> selects all <strong>B</strong> that follow a <strong>A</strong>'
    ],
    boardMarkup : `
    <pickle/>
    <bento>
      <orange class="small"/>
    </bento>
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <plate>
      <pickle class="small"/>
    </plate>
    `
  },
  {
    selectorName: "Child Selector",
    syntax: "A > B&nbsp;",
    doThis : "Select the apple directly on a plate",
    selector : "plate > apple",
    helpTitle: "Select direct children of an element",
    help : "You can select elements that are direct children of other elements. A child element is any element that is nested directly in another element. <br><br>Elements that are nested deeper than that are called descendant elements.",
    examples : [
      '<strong>A > B</strong> selects all <strong>B</strong> that are a direct children <strong>A</strong>'
    ],
    boardMarkup: `
    <plate>
      <bento>
        <apple/>
      </bento>
    </plate>
    <plate>
      <apple/>
    </plate>
    <plate/>
    <apple/>
    <apple class="small"/>
    `
  },
  {
    selectorName: "First Child Pseudo-selector",
    helpTitle: "Select a first child element inside of another element",
    doThis : "Select the top orange",
    selector : "plate :first-child",
    syntax: ":first-child",

    help : "You can select the first child element. A child element is any element that is directly nested in another element. You can combine this pseudo-selector with other selectors.",
    examples : [
      '<strong>:first-child</strong> selects all first child elements.',
      '<strong>p:first-child</strong> selects all first child <tag>p</tag> elements.',
      '<strong>div p:first-child</strong> selects all first child <tag>p</tag> elements that are in a <tag>div</tag>.'
    ],
    boardMarkup :`
    <bento/>
    <plate />
    <plate>
      <orange />
      <orange />
      <orange />
    </plate>
    <pickle class="small" />
    `
  },
  {
    selectorName: "Only Child Pseudo-selector",
    helpTitle: "Select an element that are the only element inside of another one.",
    doThis : "Select the apple and the pickle on the plates",
    selector : "plate :only-child",
    syntax: ":only-child",
    help : "You can select any element that is the only element inside of another one.",
    examples : [
      '<strong>span:only-child</strong> selects the <tag>span</tag> elements that are the only child of some other element.',
      '<strong>ul li:only-child</strong> selects the only <tag>li</tag> element that are in a <tag>ul</tag>.'
    ],
    boardMarkup : `
    <plate>
      <apple/>
    </plate>
    <plate>
      <pickle />
    </plate>
    <bento>
      <pickle />
    </bento>
    <plate>
      <orange class="small"/>
      <orange/>
    </plate>
    <pickle class="small"/>
    `
  },
  {
    selectorName: "Last Child Pseudo-selector",
    helpTitle: "Select the last element inside of another element",
    doThis : "Select the small apple and the pickle",
    selector : ".small:last-child",
    syntax: ":last-child",
    help : "You can use this selector to select an element that is the last child element inside of another element. <br><br>Pro Tip &rarr; In cases where there is only one element, that element counts as the first-child, only-child and last-child!",
    examples : [
      '<strong>:last-child</strong> selects all last-child elements.',
      '<strong>span:last-child</strong> selects all last-child <tag>span</tag> elements.',
      '<strong>ul li:last-child</strong> selects the last <tag>li</tag> elements inside of any <tag>ul</tag>.'
    ],
    boardMarkup : `
    <plate id="fancy">
      <apple class="small"/>
    </plate>
    <plate/>
    <plate>
      <orange class="small"/>
      <orange>
    </plate>
    <pickle class="small"/>`
  },
  {
    selectorName: "Nth Child Pseudo-selector",
    helpTitle: "Select an element by its order in another element",
    doThis : "Select the 3rd plate",
    selector : ":nth-child(3)",
    syntax: ":nth-child(A)",
    help : "Selects the <strong>nth</strong> (Ex: 1st, 3rd, 12th etc.) child element in another element.",
    examples : [
      '<strong>:nth-child(8)</strong> selects every element that is the 8th child of another element.',
      '<strong>div p:nth-child(2)</strong> selects the second <strong>p</strong> in every <strong>div</strong>',
    ],
    boardMarkup : `
    <plate/>
    <plate/>
    <plate/>
    <plate id="fancy"/>
    `
  },
  {
    selectorName: "Nth Last Child Selector",
    helpTitle: "Select an element by its order in another element, counting from the back",
    doThis : "Select the 1st bento",
    selector : "bento:nth-last-child(3)",
    syntax: ":nth-last-child(A)",
    help : "Selects the children from the bottom of the parent. This is like nth-child, but counting from the back!",
    examples : [
      '<strong>:nth-last-child(2)</strong> selects all second-to-last child elements.'
    ],
    boardMarkup: `
    <plate/>
    <bento/>
    <plate>
      <orange/>
      <orange/>
      <orange/>
    </plate>
    <bento/>
    `
  },
  {
    selectorName: "First of Type Selector",
    helpTitle: "Select the first element of a specific type",
    doThis : "Select first apple",
    selector : "apple:first-of-type",
    syntax: ":first-of-type",
    help : "Selects the first element of that type within another element.",
    examples : [
      '<strong>span:first-of-type</strong> selects the first <tag>span</tag> in any element.'
    ],
    boardMarkup: `
    <orange class="small"/>
    <apple/>
    <apple class="small"/>
    <apple/>
    <apple class="small"/>
    <plate>
      <orange class="small"/>
      <orange/>
    </plate>
    `
  },
  {
    selectorName: "Nth of Type Selector",
    doThis: "Select all even plates",
    selector: "plate:nth-of-type(even)",
    syntax: ":nth-of-type(A)",
    help: "Selects a specific element based on its type and order in another element - or even or odd instances of that element.",
    examples: [
      '<strong>div:nth-of-type(2)</strong> selects the second instance of a div.',
      '<strong>.example:nth-of-type(odd)</strong> selects all odd instances of a the example class.'
    ],
    boardMarkup : `
    <plate/>
    <plate/>
    <plate/>
    <plate/>
    <plate id="fancy"/>
    <plate/>
    `
  },
  {
    selectorName: "Seletor N-de-um-tipo com formula (Nth-of-type Selector with Formula)",
    doThis: "Selecione todo segundo prato, a partir do terceiro",
    selector: "plate:nth-of-type(2n+3)",
    syntax: ":nth-of-type(An+B)",
    help: "O nth-de-um-tipo seleciona todo elemento N, a partir da instância especifícada daquele elemento.",
    examples: [
      '<strong>span:nth-of-type(6n+2)</strong> seleciona toda 6º instância da <tag>span</tag>, começando com (e incluindo) a segunda instância'
    ],
    boardMarkup : `
    <plate/>
    <plate>
      <pickle class="small" />
    </plate>
    <plate>
      <apple class="small" />
    </plate>
    <plate/>
    <plate>
      <apple />
    </plate>
    <plate/>
    `
  },
  {
    selectorName: "Seletor Único do Tipo (Only of Type Selector)",
    helpTitle: "Seleciona os elementos que são os únicos do tipo em seu elemento-pai",
    selector : "apple:only-of-type",
    syntax: ":only-of-type",
    doThis : "Seleciona a maçã no meio do prato",
    help : "Seleciona o único elemento do seu tipo que esteja contido em outro elemento.",
    examples : [
      '<strong>p span:only-of-type</strong> seleciona um <tag>span</tag> que contenha qualquer <tag>p</tag> se é apenas o única <tag>span</tag> ali.'
    ],
    boardMarkup: `
    <plate id="fancy">
      <apple class="small" />
      <apple />
    </plate>
    <plate>
      <apple class="small" />
    </plate>
    <plate>
      <pickle />
    </plate>
    `
  },
  {
    selectorName: "Seletor Último do Tipo (Last of Type Selector)",
    helpTitle: "Seleciona o último elemento de um tipo específico",
    doThis : "Selecione a última maçã e laranja",
    selector : ".small:last-of-type",
    syntax: ":last-of-type",
    help : "Seleciona cada último elemento que esteja em outro elemento. Lembre-se que esse seletor se referencia ao tipo de tag, então <tag>p</tag> e <tag>span</tag> são tipos diferentes. <br><br> Eu me pergunto se foi assim que o último dinossauro foi selecionado antes de ser extinto.",
    examples : [
      '<strong>div:last-of-type</strong> seleciona a última <tag>div</tag> em cada elemento.',
      '<strong>p span:last-of-type</strong> seleciona o último <tag>span</tag> em cada <tag>p</tag>.'
    ],
    boardMarkup : `
    <orange class="small"/>
    <orange class="small" />
    <pickle />
    <pickle />
    <apple class="small" />
    <apple class="small" />
    `
  },
  {
    selectorName: "Seletores Vazios (Empty Selector)",
    helpTitle: "Seletores cujo os elementos não tenham filhos",
    doThis : "Selecione os bentos vazios",
    selector : "bento:empty",
    syntax: ":empty",
    help : "Selecione os elementos que não tenham nenhum outro elemento dentro deles.",
    examples : [
      '<strong>div:empty</strong> seleciona todos os elementos vazios da <tag>div</tag>.'
    ],
    boardMarkup:`
    <bento/>
    <bento>
      <pickle class="small"/>
    </bento>
    <plate/>
    <bento/>`
  },
  {
    selectorName: "Pseudo Classe de Negação (Negation Pseudo-class)",
    helpTitle: "Seleciona todos os elementos que não se encaixem no seletor",
    doThis : "Selecione as maçãs grandes",
    selector : "apple:not(.small)",
    syntax: ":not(X)",
    help : 'Você pode usar isso para selecionar todos os elementos que não se encaixem no seletor <strong>"X"</strong>.',
    examples : [
      '<strong>:not(#fancy)</strong> seleciona todos os elementos que não tenham  <strong>id="fancy"</strong>.',
      '<strong>div:not(:first-child)</strong> seleciona toda <tag>div</tag> que não seja a primeira filha (first-child).',
      '<strong>:not(.big, .medium)</strong> seleciona todos os elementos que não tenham <strong>class="big"</strong> ou <strong>class="medium"</strong>.'
    ],
    boardMarkup: `
    <plate id="fancy">
      <apple class="small" />
    </plate>
    <plate>
      <apple />
    </plate>
    <apple />
    <plate>
      <orange class="small" />
    </plate>
    <pickle class="small" />
    `
  },
  {
    selectorName: "Seletor de Atributo (Attribute Selector)",
    helpTitle: "Seleciona todos os elementos que tenham um atributo especifico",
    doThis : "Selecione os items para alguém",
    selector : "[for]",
    syntax: "[attribute]",
    help : 'São atributos que estejam dentro de da abertura de uma tag, como: <tag>span attribute="value"</tag>. Um atributo nem sempre precisa ter um valor, podendo ficar em branco!',
    examples : [
      '<strong>a[href]</strong> seleciona todos os elementos <tag>a</tag> que tenham o atributo <strong>href="anything"</strong>.',
      '<strong>[type]</strong> seleciona todos os elementos que tenham o atributo <strong>type="anything"</strong>.'
    ],
    boardMarkup:`
    <bento><apple class="small"/></bento>
    <apple for="Ethan"/>
    <plate for="Alice"><pickle/></plate>
    <bento for="Clara"><orange/></bento>
    <pickle/>`
  },
  {
    selectorName: "Seletor de Atributo (Attribute Selector)",
    helpTitle: "Selecione todos os elementos que têm um atributo específico",
    doThis : "Selecione os pratos para alguém",
    selector : "plate[for]",
    syntax: "A[attribute]",
    help : "Combine o seletor de atributo com outro seletor (como o seletor de tags) adicionando-o no fim.",
    examples : [
      '<strong>[value]</strong> seleciona todos os elementos que tenham o valor <strong>value="anything"</strong>.',
      '<strong>a[href]</strong> seleciona todos os elementos <tag>a</tag> que contenham o valor <strong>href="anything"</strong>.',
      '<strong>input[disabled]</strong> seleciona todas os elementos <tag>input</tag>strong> com o atributo <strong>disabled</strong>.'
    ],
    boardMarkup:`
    <plate for="Sarah"><pickle/></plate>
    <plate for="Luke"><apple/></plate>
    <plate/>
    <bento for="Steve"><orange/></bento>
    `
  },
  {
    selectorName: "Atribuindo Seletor de Valor (Value Selector)",
    helpTitle: "Seleciona todos os elementos que contenham um valor especifícado.",
    doThis : "Selecione a refeição da Vitaly",
    selector : "[for=Vitaly]",
    syntax: '[attribute="value"]',
    help : "Seletores de atributos são case sensitive (diferencia-se maíuscula de minuscula), então cada caracter deve ser exatamente igual.",
    examples : [
      '<strong>input[type="checkbox"]</strong> seleciona todos os elementos do elemento input do tipo checkbox.'
    ],
    boardMarkup:`
    <apple for="Alexei" />
    <bento for="Albina"><apple /></bento>
    <bento for="Vitaly"><orange/></bento>
    <pickle/>
    `
  },
  {
    selectorName: "Atribuindo Seletor Começa Com (Starts With)",
    helpTitle: "Seleciona todos os elementos que comecem com o valor especifícado",
    doThis : "Seleciona os itens que comecem com 'Sa'",
    selector : '[for^="Sa"]',
    syntax: '[attribute^="value"]',
    help : "Você pode usar aspas ao redor do valor no seletor ou não; É opcional!",
    examples : [
      '<strong>.toy[category^="Swim"]</strong> seleciona elementos com a classe  <strong>toy</strong> e com a category <strong>category="Swimwear</strong> ou <strong>category="Swimming"</strong>.'
    ],
    boardMarkup: `
    <plate for="Sam"><pickle/></plate>
    <bento for="Sarah"><apple class="small"/></bento>
    <bento for="Mary"><orange/></bento>
    `
  },
  {
    selectorName: "Atribuindo Seletor Termina Com (Ends With)",
    helpTitle: "Seleciona todos os elementos que terminem com o valor especifícado.",
    doThis : "Seleciona os itens que terminem com 'ato'",
    selector : '[for$="ato"]',
    syntax: '[attribute$="value"]',
    help : '',
    examples : [
      '<strong>img[src$=".jpg"]</strong> seleciona todas as imagens que mostrem um <strong>.jpg</strong>.',
    ],
    boardMarkup:`
    <apple class="small"/>
    <bento for="Hayato"><pickle/></bento>
    <apple for="Ryota"></apple>
    <plate for="Minato"><orange/></plate>
    <pickle class="small"/>
    `
  },
  {
    selectorName: "Atribuindo Seletor Coringa (Wildcard Selector)",
    helpTitle: "Selecione todos os elementos com um atributo que contenha caracteres específicos em qualquer lugar",
    syntax: '[attribute*="value"]',
    doThis : "Selecione as refeições que contenham 'obb'",
    selector : '[for*="obb"]',
    help : 'Um seletor muito uso se você puder indentificar padrões comuns como em: <strong>class</strong>, <strong>href</strong>, <strong>src</strong>, ou atributos',
    examples : [
      '<strong>img[src*="/thumbnails/"]</strong> seleciona todas as imagens que sejam vindas da pasta "thumbnails".',
      '<strong>[class*="heading"]</strong> seleciona todos os elementos que tenha "heading"em suas classes, como <strong>class="main-heading"</strong> e <strong>class="sub-heading"</strong>'
    ],
    boardMarkup:`
    <bento for="Robbie"><apple /></bento>
    <bento for="Timmy"><pickle /></bento>
    <bento for="Bobby"><orange /></bento>
    `
  }
];
