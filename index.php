<!DOCTYPE html>
<html>
<head>
<meta charset=UTF-8>
<meta name=description content="Sorteie e distribua cargos de forma fácil, enquanto diverte-se no Habbo Hotel.">
<meta name=viewport content="width=device-width, initial-scale=1">
<title> Sorteador para Guerras Civis! </title>
<link rel=icon href=images/favicon.ico type=image/x-icon />
<link rel=stylesheet href=http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css async>
<style>*{border-radius:0!important}body{padding-top:25px}#n13,#n14,#n15,#n16,#n17,#n18,#sorteados,#configs,#especiais,.btn-hide,#all-prot{display:none}h1,h2,h3,h4,h5,h6,p,figcaption{text-align:center}.btn{text-decoration:none}#imagem-dicas>*{color:#337ab7}.btn-hide,.btn-peq{background:url(images/copiar.png) no-repeat center center #337ab7}.c-cv{background:url(images/copiar-cv.png) no-repeat center center #5bc0de}.c-mf{background:url(images/copiar-mf.png) no-repeat center center #f0ad4e}.civis-prot-bg>*{background-color:#d9edf7}.mf-prot-bg>*{background-color:#fcf8e3}.btn-mf{background-color:#ec971f}.btn-cv{background-color:#31b0d5}</style>
</head>
<body>
<article class=container>
<section class="panel panel-primary" id=form-nicks>
<header class=panel-heading>
<h1 class=panel-title> Guerras Civis: Sorteador de Cargos </h1>
<p class=sr-only>Sorteie os cargos do jogo "Guerras Civis" e seja um ótimo host!</p>
</header>
<div class=panel-body>
<form id=form1 name=form1 class="col=xs-12 col-sm-5 col-md-5">
<section class="panel panel-primary">
<header class=panel-heading>
<h1 class=panel-title> Players </h1>
</header>
<div class="input-group col-xs-12 panel-body">
<div class=col-xs-3> <input type=radio name=quant id=12 value=12 onclick=deixarVisivel12();uncheckAll() checked> <label for=12 onclick=uncheckAll()> 12 </label> </div>
<div class=col-xs-3> <input type=radio name=quant id=14 value=14 onclick=deixarVisivel14();uncheckAll()> <label for=14 onclick=uncheckAll()> 14 </label> </div>
<div class=col-xs-3> <input type=radio name=quant id=16 value=16 onclick=deixarVisivel16();uncheckAll()> <label for=16 onclick=uncheckAll()> 16 </label> </div>
<div class=col-xs-3> <input type=radio name=quant id=18 value=18 onclick=deixarVisivel18();CheckToRadio();uncheckAll()> <label for=18 onclick=uncheckAll();CheckToRadio()> 18 </label> </div>
</div>
</section>
<section id=configs class="panel panel-danger">
<header class=panel-heading>
<h1 id=extra-title class=panel-title> </h1>
</header>
<div class=panel-body>
<div class="col-xs-12 col-md-6">
<div> <input type=checkbox id=fada onclick=verificar();mudaValue(this) name=opcoes value=Fada> <label for=fada onclick> Fada </label> </div>
<div> <input type=checkbox id=escu onclick=verificar();mudaValue(this) name=opcoes value=Escudeiro> <label for=escu onclick> Escudeiro </label> </div>
<div> <input type=checkbox id=adv onclick=verificar();mudaValue(this) name=opcoes value=Justiceiro> <label for=adv onclick> Justiceiro </label> </div>
<div> <input type=checkbox id=testem onclick=verificar();mudaValue(this) name=opcoes value=Testemunha> <label for=testem onclick> Testemunha </label> </div>
</div>
<div class="col-xs-12 col-md-6">
<div> <input type=checkbox id=hb onclick=verificar();mudaValue(this) name=opcoes value=Homem-Bomba> <label for=hb onclick> Homem-Bomba </label> </div>
<div> <input type=checkbox id=psico onclick=verificar();mudaValue(this) name=opcoes value=Psicopata> <label for=psico onclick> Psicopata </label> </div>
<div> <input type=checkbox id=demo onclick=verificar();mudaValue(this) name=opcoes value=Demônio> <label for=demo onclick> Demônio </label> </div>
</div> <button type=button onclick=verificar();uncheckAll() class="btn btn-danger form-control"> Resetar </button> </div>
</section>
<section class="panel panel-primary">
<header class=panel-heading>
<h1 class=panel-title> Infos </h1>
</header>
<div class="input-group col-xs-12 panel-body text-center">
<div class="col-xs-12 col-sm-6"> <input type=radio name=info id=com value=com onclick=hideBtn() checked> <label for=com> Com info! </label> </div>
<div class="col-xs-12 col-sm-6"> <input type=radio name=info id=sem value=sem onclick=ShowBtn()> <label for=sem> Sem info! </label> </div>
</div>
</section>
<section id=nicks-entry class="panel panel-primary">
<header class=panel-heading>
<h1 class=panel-title> Nicknames </h1>
</header>
<div class=panel-body>
<input type=text id=n1 class=form-control name=normal-entry onchange=passaValor(this)> <input type=text id=n2 class=form-control name=normal-entry onchange=passaValor(this)> <input type=text id=n3 class=form-control name=normal-entry onchange=passaValor(this)> <input type=text id=n4 class=form-control name=normal-entry onchange=passaValor(this)> <input type=text id=n5 class=form-control name=normal-entry onchange=passaValor(this)> <input type=text id=n6 class=form-control name=normal-entry onchange=passaValor(this)> <input type=text id=n7 class=form-control name=normal-entry onchange=passaValor(this)> <input type=text id=n8 class=form-control name=normal-entry onchange=passaValor(this)> <input type=text id=n9 class=form-control name=normal-entry onchange=passaValor(this)> <input type=text id=n10 class=form-control name=normal-entry onchange=passaValor(this)> <input type=text id=n11 class=form-control name=normal-entry onchange=passaValor(this)> <input type=text id=n12 class=form-control name=normal-entry onchange=passaValor(this)>
<input type=text id=n13 class=form-control onchange=passaValor(this)> <input type=text id=n14 class=form-control onchange=passaValor(this)> <input type=text id=n15 class=form-control onchange=passaValor(this)> <input type=text id=n16 class=form-control onchange=passaValor(this)> <input type=text id=n17 class=form-control onchange=passaValor(this)> <input type=text id=n18 class=form-control onchange=passaValor(this)> </div>
</section>
<a class=btns href=#sorteados><button type=button onclick=selecionados();backup();embaralha();esconde() class="form-control btn btn-success">Sortear</button></a> </form>
<figure class="hidden-xs col-sm-7 col-md-7" id=imagem-dicas>
<h2> Divida as janelas </h2> <img src=images/dica-layout-min.png alt="Dica de layout para as janelas do navegador" class=img-responsive> </figure>
</div>
</section>
<section id=sorteados class="panel panel-primary">
<header class=panel-heading>
<h2 class=panel-title> Guerras Civis: Resultados </h2>
</header>
<div class=panel-body>
<section class="panel panel-primary">
<header class=panel-heading>
<h1 class=panel-title> Protagonistas </h1>
</header>
<div id=protagonistas class=panel-body>
<div id=mafia-prot class="col-xs-12 col-md-6"><br/>
<div class="col-xs-12 col-sm-4 col-md-4 mf-prot-bg">
<div class=thumbnail> <img id=mini-1 src onerror=mudaSrc(this)>
<div id=assa class=caption>
<h3> Assassino <span class=sr-only> :&nbsp </span> </h3>
<p id=c1> ... </p><button type=button class="btn btn-warning form-control btn-hide btn-mf" onclick="return fieldtoclipboard.copyfield(event,'assa')"></button> </div>
</div>
</div>
<div class="col-xs-12 col-sm-4 col-md-4 mf-prot-bg">
<div class=thumbnail> <img id=mini-2 src onerror=mudaSrc(this)>
<div id=apren class=caption> <span class=sr-only> / </span>
<h3> Aprendiz <span class=sr-only> :&nbsp </span> </h3>
<p id=c2> ... </p> <button type=button class="btn btn-warning form-control btn-hide btn-mf" onclick="return fieldtoclipboard.copyfield(event,'apren')"> </button> </div>
</div>
</div>
<div class="col-xs-12 col-sm-4 col-md-4 mf-prot-bg">
<div class=thumbnail> <img id=mini-3 src onerror=mudaSrc(this)>
<div id=silence class=caption> <span class=sr-only> / </span>
<h3> Silenciador <span class=sr-only> :&nbsp </span> </h3>
<p id=c3> ... </p> <button type=button class="btn btn-warning form-control btn-hide btn-mf" onclick="return fieldtoclipboard.copyfield(event,'silence')"> </button> </div>
</div>
</div> <button id=info1 type=button class="btn btn-warning form-control c-mf" onClick="return fieldtoclipboard.copyfield(event,'mafia-prot')"> </button> </div>
<div id=civis-prot class="col-xs-12 col-md-6"><br/>
<div class="col-xs-12 col-sm-4 col-md-4 civis-prot-bg">
<div class=thumbnail> <img id=mini-4 src onerror=mudaSrc(this)>
<div id=juiz class=caption>
<h3> Juíz <span class=sr-only> :&nbsp </span> </h3>
<p id=c4> ... </p> <button type=button class="btn btn-info form-control btn-hide btn-cv" onclick="return fieldtoclipboard.copyfield(event,'juiz')"> </button> </div>
</div>
</div>
<div class="col-xs-12 col-sm-4 col-md-4 civis-prot-bg">
<div class=thumbnail> <img id=mini-5 src onerror=mudaSrc(this)>
<div id=poli class=caption> <span class=sr-only> / </span>
<h3> Policial <span class=sr-only> :&nbsp </span> </h3>
<p id=c5> ... </p> <button type=button class="btn btn-info form-control btn-hide btn-cv" onclick="return fieldtoclipboard.copyfield(event,'poli')"> </button> </div>
</div>
</div>
<div class="col-xs-12 col-sm-4 col-md-4 civis-prot-bg">
<div class=thumbnail> <img id=mini-6 src onerror=mudaSrc(this)>
<div id=anjo class=caption> <span class=sr-only> / </span>
<h3> Anjo <span class=sr-only> :&nbsp </span> </h3>
<p id=c6> ... </p> <button type=button class="btn btn-info form-control btn-hide btn-cv" onclick="return fieldtoclipboard.copyfield(event,'anjo')"> </button> </div>
</div>
</div> <button id=info2 type=button class="btn btn-info form-control c-cv" onclick="return fieldtoclipboard.copyfield(event,'civis-prot')"> </button> </div> <button type=button class="btn btn-success form-control" onclick="return fieldtoclipboard.copyfield(event,'protagonistas')" id=all-prot> Copiar Todos Protagonistas </button> </div>
</section>
<section class="panel panel-primary">
<header class=panel-heading>
<h1 class=panel-title> Co-protagonistas </h1>
</header>
<div id=co-prot class=panel-body>
<div class="col-xs-12 col-sm-4 col-md-2">
<div class=thumbnail> <img id=mini-7 src onerror=mudaSrc(this)>
<div id=para class=caption>
<h3> Paralisador <span class=sr-only> :&nbsp </span> </h3>
<p id=c7> ... </p> <button type=button class="btn btn-primary form-control btn-peq" onclick="return fieldtoclipboard.copyfield(event,'para')"> </button> </div>
</div>
</div>
<div class="col-xs-12 col-sm-4 col-md-2">
<div class=thumbnail> <img id=mini-8 src onerror=mudaSrc(this)>
<div id=papa class=caption> <span class=sr-only> / </span>
<h3> Paparazzi <span class=sr-only> :&nbsp </span> </h3>
<p id=c8> ... </p> <button type=button class="btn btn-primary form-control btn-peq" onclick="return fieldtoclipboard.copyfield(event,'papa')"> </button> </div>
</div>
</div>
<div class="col-xs-12 col-sm-4 col-md-2">
<div class=thumbnail> <img id=mini-9 src onerror=mudaSrc(this)>
<div id=bruxo class=caption> <span class=sr-only> / </span>
<h3> Bruxo <span class=sr-only> :&nbsp </span> </h3>
<p id=c9> ... </p> <button type=button class="btn btn-primary form-control btn-peq" onclick="return fieldtoclipboard.copyfield(event,'bruxo')"> </button> </div>
</div>
</div>
<div class="col-xs-12 col-sm-4 col-md-2">
<div class=thumbnail> <img id=mini-10 src onerror=mudaSrc(this)>
<div id=det class=caption> <span class=sr-only> / </span>
<h3> Detetive <span class=sr-only> :&nbsp </span> </h3>
<p id=c10> ... </p> <button type=button class="btn btn-primary form-control btn-peq" onclick="return fieldtoclipboard.copyfield(event,'det')"> </button> </div>
</div>
</div>
<div class="col-xs-12 col-sm-4 col-md-2">
<div class=thumbnail> <img id=mini-11 src onerror=mudaSrc(this)>
<div id=ald class=caption> <span class=sr-only> / </span>
<h3> Aldeão <span class=sr-only> :&nbsp </span> </h3>
<p id=c11> ... </p> <button type=button class="btn btn-primary form-control btn-peq" onclick="return fieldtoclipboard.copyfield(event,'ald')"> </button> </div>
</div>
</div>
<div class="col-xs-12 col-sm-4 col-md-2">
<div class=thumbnail> <img id=mini-12 src onerror=mudaSrc(this)>
<div id=esp class=caption> <span class=sr-only> / </span>
<h3> Espírito <span class=sr-only> :&nbsp </span> </h3>
<p id=c12> ... </p> <button type=button class="btn btn-primary form-control btn-peq" onclick="return fieldtoclipboard.copyfield(event,'esp')"> </button> </div>
</div>
</div> <button type=button class="btn btn-success form-control" onclick="return fieldtoclipboard.copyfield(event,'co-prot')"> Copiar Todos Co-protagonistas </button> </div>
</section>
<section id=especiais class="panel panel-primary">
<header class=panel-heading>
<h1 class=panel-title> Coadjuvantes </h1>
</header>
<div id=coadjuvantes class=panel-body>
<div id=esp1 class="col-xs-12 col-sm-4 col-md-2">
<div class=thumbnail> <img id=mini-13 src onerror=mudaSrc(this)>
<div class=caption>
<h3 id=persona1> </h3> <span class=sr-only> :&nbsp </span>
<p id=c13> ... </p> <button type=button class="btn btn-primary form-control btn-peq" onclick="return fieldtoclipboard.copyfield(event,'esp1')"> </button> </div>
</div>
</div>
<div id=esp2 class="col-xs-12 col-sm-4 col-md-2">
<div class=thumbnail> <img id=mini-14 src onerror=mudaSrc(this)>
<div class=caption> <span class=sr-only> / </span>
<h3 id=persona2> </h3> <span class=sr-only> :&nbsp </span>
<p id=c14> ... </p> <button type=button class="btn btn-primary form-control btn-peq" onclick="return fieldtoclipboard.copyfield(event,'esp2')"> </button> </div>
</div>
</div>
<div id=esp3 class="col-xs-12 col-sm-4 col-md-2">
<div class=thumbnail> <img id=mini-15 src onerror=mudaSrc(this)>
<div class=caption> <span class=sr-only> / </span>
<h3 id=persona3> </h3> <span class=sr-only> :&nbsp </span>
<p id=c15> ... </p> <button type=button class="btn btn-primary form-control btn-peq" onclick="return fieldtoclipboard.copyfield(event,'esp3')"> </button> </div>
</div>
</div>
<div id=esp4 class="col-xs-12 col-sm-4 col-md-2">
<div class=thumbnail> <img id=mini-16 src onerror=mudaSrc(this)>
<div class=caption> <span class=sr-only> / </span>
<h3 id=persona4> </h3> <span class=sr-only> :&nbsp </span>
<p id=c16> ... </p> <button type=button class="btn btn-primary form-control btn-peq" onclick="return fieldtoclipboard.copyfield(event,'esp4')"> </button> </div>
</div>
</div>
<div id=esp5 class="col-xs-12 col-sm-4 col-md-2">
<div class=thumbnail> <img id=mini-17 src onerror=mudaSrc(this)>
<div class=caption> <span class=sr-only> / </span>
<h3 id=persona5> </h3> <span class=sr-only> :&nbsp </span>
<p id=c17> ... </p> <button type=button class="btn btn-primary form-control btn-peq" onclick="return fieldtoclipboard.copyfield(event,'esp5')"> </button> </div>
</div>
</div>
<div id=esp6 class="col-xs-12 col-sm-4 col-md-2">
<div class=thumbnail> <img id=mini-18 src onerror=mudaSrc(this)>
<div class=caption> <span class=sr-only> / </span>
<h3 id=persona6> </h3> <span class=sr-only> :&nbsp </span>
<p id=c18> ... </p> <button type=button class="btn btn-primary form-control btn-peq" onclick="return fieldtoclipboard.copyfield(event,'esp6')"> </button> </div>
</div>
</div> <button type=button class="btn btn-success form-control" onclick="return fieldtoclipboard.copyfield(event,'coadjuvantes')"> Copiar Todos Coadjuvantes </button> </div>
</section>
<a href=#nicks-entry><button type=button onclick=devolve();escondeInvert() class="btn btn-danger col-xs-12 col-md-4" data-toggle=tooltip data-placement=bottom title="Alguém saiu? Clique aqui!">Corrigir e resortear</button></a> <a class=btns href=#sorteados><button type=button onclick=embaralha() class="btn btn-danger col-xs-12 col-md-4" data-toggle=tooltip data-placement=bottom title="Deu cargo errado? Clique aqui!">Embaralhar</button></a> <button type=button onclick=history.go(0) class="btn btn-danger col-xs-12 col-md-4" data-toggle=tooltip data-placement=bottom title="Acabou a rodada? Clique aqui!"> Novo Sorteio </button> </div>
</section>
</article>
<div class="container hidden-xs">
<footer class=text-center>
<p> Este site da web não é de propriedade ou operado pela Sulake Corporation Oy e não é parte do Habbo Hotel &copy <br/> Site desenvolvido pelo habbo <a href=https://www.habbo.com.br/profile/BillyGates target=_blank>BillyGates</a> <br/></p>
</footer>
</div>
<script src=js/script.js async></script>
<script src=https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js async></script>
<script src=http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js async></script>
<script async>$(document).ready(function(){$('[data-toggle="tooltip"]').tooltip()});</script>
</body>
</html>