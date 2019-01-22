	//Variáveis	
	var p = "";
	var s = 0;
	var m = 0;
	var t = 0;
	var q = 0;
	var k = 0;
	var j = 0;
	var i = 0;	
	var x = 0;
	var y = 0;
	var a = 0;
	var w = 0;
	var d = 0;
	var o = "";
	var u = "";
	var g = "";
	var rr = "";
	var inputCount = 0;
	var players = 1;
	var nicks = [""];
	var especials = [""];
	var backupNicks = [""];
	var nickCorrigido = [""];
	var corrigido = 0;
	var extraAmount = 0;
	var extraCount = 0;
	var inputLack = 0;
	
	
	//Avança do primeiro card para o segundo ou terceiro
	function firstChange(){
		//Esconde o primeiro card
		document.getElementById("card-1").style.display = "none";
	
		//Confere qual o novo card
		if (document.getElementById("opt12").checked == true) {
			document.getElementById("card-3").style.display = "block";
		}else{
			document.getElementById("card-2").style.display = "block";
		};
	};
			
	//Avança do segundo para o terceiro card
	function secondChange(){
		//Esconde o segundo card
		document.getElementById("card-2").style.display = "none";
		
		//Mostra o terceiro card
		document.getElementById("card-3").style.display = "block";
	};
	
	//Avança do terceiro para o quarto card
	function thirdChange(){
		//Esconde o segundo card
		document.getElementById("card-3").style.display = "none";
		
		//Mostra o terceiro card
		document.getElementById("card-4").style.display = "block";
	};
	
	//Avança do quarto para o quinto card
	function fourthChange(){
		//Esconde o quarto card
		document.getElementById("card-4").style.display = "none";
		
		//Mostra o quinto card
		document.getElementById("card-5").style.display = "block";
	};
	
	//Volta do segundo ou terceiro para o primeiro card		
	function backToAmount(){
		if(document.getElementById('opt12').checked == true){
			document.getElementById("card-1").style.display = "block";
			document.getElementById('card-3').style.display = "none";
		}else if(document.getElementById('card-2').style.display == "block"){
			document.getElementById("card-1").style.display = "block";
			document.getElementById("card-2").style.display = "none";
		}else{
			document.getElementById("card-2").style.display = "block";
			document.getElementById("card-3").style.display = "none";
		};
	};
	
	//Volta do quinto para o quarto
	function corrige(){
		if(document.getElementById("card-5").style.display == "block"){
			document.getElementById("card-4").style.display = "block";
			document.getElementById("card-5").style.display = "none";
		};
	};
	
	//Volta do quarto para o terceiro card
	function backToInfo(){
		if(document.getElementById('card-4').style.display == "block"){
			document.getElementById("card-3").style.display = "block";
			document.getElementById('card-4').style.display = "none";
		};
	};
	
	//Dá estilo checado as opções do primeiro card
	function radioCheck(){
		if (document.getElementById("opt12").checked == true){
			document.getElementById("label-opt12").classList.add("checked");
			document.getElementById("label-opt14").classList.remove("checked");
			document.getElementById("label-opt16").classList.remove("checked");
			document.getElementById("label-opt18").classList.remove("checked");
		}else if(document.getElementById("opt14").checked == true){
			document.getElementById("label-opt12").classList.remove("checked");
			document.getElementById("label-opt14").classList.add("checked");
			document.getElementById("label-opt16").classList.remove("checked");
			document.getElementById("label-opt18").classList.remove("checked");
		}else if(document.getElementById("opt16").checked == true){
			document.getElementById("label-opt12").classList.remove("checked");
			document.getElementById("label-opt14").classList.remove("checked");
			document.getElementById("label-opt16").classList.add("checked");
			document.getElementById("label-opt18").classList.remove("checked");
		}else if(document.getElementById("opt18").checked == true){
			document.getElementById("label-opt12").classList.remove("checked");
			document.getElementById("label-opt14").classList.remove("checked");
			document.getElementById("label-opt16").classList.remove("checked");
			document.getElementById("label-opt18").classList.add("checked");
		};
	};
	
	//Incrementa à variável, quantos personagens extras terão no jogo
	function extras(){
		if (document.getElementById("opt14").checked == true){
			x = 2;
			extraAmount = 2;
		}else if(document.getElementById("opt16").checked == true){
			x = 4;
			extraAmount = 4;
		}else if(document.getElementById("opt18").checked == true){
			x = 6;
			extraAmount = 6;
		};
	};
	
	//Confere se o checkbox do segundo card estava checado, então, aplica o estilo adequado
	function boxCheck(e){
		if (e.checked == true){
			e.parentElement.classList.add("checked");
		}else{
			e.parentElement.classList.remove("checked");
		};
	};
	
	//Dá estilo checado as opções do terceiro card
	function radioCheckInfo(){
		if(document.getElementById('infoSim').checked == true){
			document.getElementById("parentInfoSim").classList.add("checked");
			document.getElementById("parentInfoNao").classList.remove("checked");
		} else{
			document.getElementById("parentInfoSim").classList.remove("checked");
			document.getElementById("parentInfoNao").classList.add("checked");
		};
	};
	
	//Escreve o título do body do card 2
	function extraTitle(){
		document.getElementById("extra-title").innerHTML = "Escolha " + x + " personagens:";
	};
	
	//Habilita ou desabilita cheboxes, de acordo com a quantia de players
	function allowExtras(e){
		
		//Incrementa ou decrementa a variável "i"
		if(e.checked == true){
			i = ++i;
		}else if(e.checked == false){
			i = --i;
		};	
		
		//Ativa ou desativa os checkboxes
		if(i == x){
			if(document.getElementById('fada').checked == false){
				document.getElementById('fada').disabled = true;
				document.getElementById('fada').parentElement.classList.add("disabled");
			};
			if(document.getElementById('escu').checked == false){
				document.getElementById('escu').disabled = true;
				document.getElementById('escu').parentElement.classList.add("disabled");
			};
			if(document.getElementById('just').checked == false){
				document.getElementById('just').disabled = true;
				document.getElementById('just').parentElement.classList.add("disabled");
			};
			if(document.getElementById('hb').checked == false){
				document.getElementById('hb').disabled = true;
				document.getElementById('hb').parentElement.classList.add("disabled");
			};
			if(document.getElementById('demo').checked == false){
				document.getElementById('demo').disabled = true;
				document.getElementById('demo').parentElement.classList.add("disabled");
			};
			if(document.getElementById('testem').checked == false){
				document.getElementById('testem').disabled = true;
				document.getElementById('testem').parentElement.classList.add("disabled");
			};
			if(document.getElementById('psico').checked == false){
				document.getElementById('psico').disabled = true;
				document.getElementById('psico').parentElement.classList.add("disabled");
			};
		}else if(i < x){
			if(document.getElementById('fada').checked == false){
				document.getElementById('fada').disabled = false;
				document.getElementById('fada').parentElement.classList.remove("disabled");
			};
			if(document.getElementById('escu').checked == false){
				document.getElementById('escu').disabled = false;
				document.getElementById('escu').parentElement.classList.remove("disabled");
			};
			if(document.getElementById('just').checked == false){
				document.getElementById('just').disabled = false;
				document.getElementById('just').parentElement.classList.remove("disabled");
			};
			if(document.getElementById('hb').checked == false){
				document.getElementById('hb').disabled = false;
				document.getElementById('hb').parentElement.classList.remove("disabled");
			};
			if(document.getElementById('demo').checked == false){
				document.getElementById('demo').disabled = false;
				document.getElementById('demo').parentElement.classList.remove("disabled");
			};
			if(document.getElementById('testem').checked == false){
				document.getElementById('testem').disabled = false;
				document.getElementById('testem').parentElement.classList.remove("disabled");
			};
			if(document.getElementById('psico').checked == false){
				document.getElementById('psico').disabled = false;
				document.getElementById('psico').parentElement.classList.remove("disabled");
			};
		};
	};
	
	//Reseta os botões do card 2 e 1, caso o usuário voltar para o primeiro card
	function resetExtras(){
		x = 0;
		i = 0;
		
		//Botões do segundo card
		//Fada
		document.getElementById('fada').disabled = false;
		document.getElementById('fada').checked = false;
		document.getElementById('fada').parentElement.classList.remove("disabled");
		document.getElementById('fada').parentElement.classList.remove("checked");
		
		//Escudeiro
		document.getElementById('escu').disabled = false;
		document.getElementById('escu').checked = false;
		document.getElementById('escu').parentElement.classList.remove("disabled");
		document.getElementById('escu').parentElement.classList.remove("checked");
		
		//Psicopata
		document.getElementById('psico').disabled = false;
		document.getElementById('psico').checked = false;
		document.getElementById('psico').parentElement.classList.remove("disabled");
		document.getElementById('psico').parentElement.classList.remove("checked");
		
		//Homem-bomba
		document.getElementById('hb').disabled = false;
		document.getElementById('hb').checked = false;
		document.getElementById('hb').parentElement.classList.remove("disabled");
		document.getElementById('hb').parentElement.classList.remove("checked");
		
		//Demônio
		document.getElementById('demo').disabled = false;
		document.getElementById('demo').checked = false;
		document.getElementById('demo').parentElement.classList.remove("disabled");
		document.getElementById('demo').parentElement.classList.remove("checked");
		
		//Testemunha
		document.getElementById('testem').disabled = false;
		document.getElementById('testem').checked = false;
		document.getElementById('testem').parentElement.classList.remove("disabled");
		document.getElementById('testem').parentElement.classList.remove("checked");
		
		//Justiceiro
		document.getElementById('just').disabled = false;
		document.getElementById('just').checked = false;
		document.getElementById('just').parentElement.classList.remove("disabled");
		document.getElementById('just').parentElement.classList.remove("checked");
		
		//Botões do primeiro card
		//Doze players
		document.getElementById('opt12').checked = true;
		document.getElementById('opt12').parentElement.classList.add("checked");
		
		//Quatorze players
		document.getElementById('opt14').parentElement.classList.remove("checked");
		
		//Quatorze players
		document.getElementById('opt16').parentElement.classList.remove("checked");
		
		//Quatorze players
		document.getElementById('opt18').parentElement.classList.remove("checked");
	};
		
	//Recolhe, sorteia e distribui os nicknames		
	function shuffle(arra1){
		
		//Pega os nicks------------------------------
		for (y = 0; y < players; y++) {
			var z = "input" + y;
			nicks[y] = document.getElementById(z).value;
			backupNicks[y] = document.getElementById(z).value;
		};
		
		//Mágica do sorteio------------------------
		var ctr = arra1.length, temp, index;

			// While there are elements in the array
			while (ctr > 0) {
				// Pick a random index
				index = Math.floor(Math.random() * ctr);
				// Decrease ctr by 1
				ctr--;
				// And swap the last element with it
				temp = arra1[ctr];
				arra1[ctr] = arra1[index];
				arra1[index] = temp;
			};
		
		
		//Distribui os nicknames-----------------
		for (a = 0; a < players; a++) {
			var b = "char" + a;
			document.getElementById(b).innerHTML = nicks[a];
		};
		
		return arra1;
	};
	
	//Cria os inputs
	function createInput(){		
		//Determina quantos players vão jogar
		if(document.getElementById('opt12').checked == true){
			players = 12;
		}else if(document.getElementById('opt14').checked == true){
			players = 14;
		}else if(document.getElementById('opt16').checked == true){
			players = 16;
		}else{
			players = 18;
		}
				
		//Cria os inputs em si
		if (players == 12 && inputCount < 12){
			for (w = 0; w < 12; w++) {
				document.getElementById('firstRow').innerHTML += '<input type="text" maxlength="8" class="form-control form-control-sm col-11 col-sm-5 mx-auto" placeholder="Digite aqui..." id="input' + w + '" oninput="fillLack();">'
				
				inputCount = w + 1;
			};
		}else if(players == 14 && inputCount < 14){
			for (w = 0; w < 14; w++) {
				if(w < 12){
					document.getElementById('firstRow').innerHTML += "<input type='text' maxlength='8' class='form-control form-control-sm col-11 col-sm-5 mx-auto' placeholder='Digite aqui...' id='input" + w + "' oninput='fillLack();'>";
					
					inputCount = w + 1;
				}else if(w >= 12){
					document.getElementById('secondRow').innerHTML += "<input type='text' maxlength='8' class='form-control form-control-sm col-11 col-sm-5 mx-auto' placeholder='Digite aqui...' id='input" + w + "' oninput='fillLack();'>";
					
					inputCount = w + 1;
				};
				
			};
		}else if(players == 16){
			for (w = 0; w < 16; w++) {
				if(w < 12){
					document.getElementById('firstRow').innerHTML += "<input type='text' maxlength='8' class='form-control form-control-sm col-11 col-sm-5 mx-auto' placeholder='Digite aqui...' id='input" + w + "' oninput='fillLack();'>";
				}else if(w >= 12){
					document.getElementById('secondRow').innerHTML += "<input type='text' maxlength='8' class='form-control form-control-sm col-11 col-sm-5 mx-auto' placeholder='Digite aqui...' id='input" + w + "' oninput='fillLack();'>";
				};
			};
		}else if(players == 18){
			for (w = 0; w < 18; w++) {
				if(w < 12){
					document.getElementById('firstRow').innerHTML += "<input type='text' maxlength='8' class='form-control form-control-sm col-11 col-sm-5 mx-auto' placeholder='Digite aqui...' id='input" + w + "' oninput='fillLack();'>";
				}else if(w >= 12){
					document.getElementById('secondRow').innerHTML += "<input type='text' maxlength='8' class='form-control form-control-sm col-11 col-sm-5 mx-auto' placeholder='Digite aqui...' id='input" + w + "' oninput='fillLack();'>";
				};
			};
		}
	
		
	};
	
	//Reseta os inputs e a variável inputCount
	function inputReset(){
		if (document.getElementById('opt12').checked == true){
			document.getElementById('firstRow').innerHTML = "";
			document.getElementById('secondRow').innerHTML = "";
			inputCount = 0;
		}else if(document.getElementById('opt14').checked == true){
			document.getElementById('firstRow').innerHTML = "";
			document.getElementById('secondRow').innerHTML = "";
			inputCount = 0;
		}else if(document.getElementById('opt16').checked == true){
			document.getElementById('firstRow').innerHTML = "";
			document.getElementById('secondRow').innerHTML = "";
			inputCount = 0;
		}else if(document.getElementById('opt18').checked == true){
			document.getElementById('firstRow').innerHTML = "";
			document.getElementById('secondRow').innerHTML = "";
			inputCount = 0;
		};
	};
			
	//Ativa as barras, se o usuário quiser dar informações
	function showInfo(){
		if(document.getElementById('infoSim').checked == true){
			document.getElementById('show-info1').classList.remove('hide');
			document.getElementById('show-info2').classList.remove('hide');
			document.getElementById('show-info3').classList.remove('hide');
			document.getElementById('show-info4').classList.remove('hide');
		}else{
			document.getElementById('show-info1').classList.add('hide');
			document.getElementById('show-info2').classList.add('hide');
			document.getElementById('show-info3').classList.add('hide');
			document.getElementById('show-info4').classList.add('hide');
		};
	};
	
	//Confere quais personagens extras foram escolhidos
	function extraCheck(){
		if(document.getElementById('fada').checked == true){
			especials[j] = document.getElementById('extraFada').innerHTML;
			j++;
		};
		
		if(document.getElementById('escu').checked == true){
			especials[j] = document.getElementById('extraEscu').innerHTML;
			j++;
		};
		
		if(document.getElementById('just').checked == true){
			especials[j] = document.getElementById('extraJust').innerHTML;
			j++;
		};
		
		if(document.getElementById('testem').checked == true){
			especials[j] = document.getElementById('extraTestem').innerHTML;
			j++;
		};
		
		if(document.getElementById('hb').checked == true){
			especials[j] = document.getElementById('extraHb').innerHTML;
			j++;
		};
		
		if(document.getElementById('psico').checked == true){
			especials[j] = document.getElementById('extraPsico').innerHTML;
			j++;
		};
		
		if(document.getElementById('demo').checked == true){
			especials[j] = document.getElementById('extraDemo').innerHTML;
			j++;
		};
		
		//reseta a variável, pra evitar bugs, quando o usuário voltar a página
		j = 0;
	};

	//Ativa os cargos especiais escolhidos
	function showEspecial(){
		if(document.getElementById('opt14').checked == true){
			document.getElementById("extra1").innerHTML = '<span id="charCopy12"><h2 class="d-inline">&nbsp;' + especials[0] + ': </h2><p class="d-inline" id="char12"></p></span><img src="_img/copy.png" class="copy-icon btn-copy" data-clipboard-action="copy" data-clipboard-target="#charCopy12"><br>';
			document.getElementById("extra2").innerHTML = '<span id="charCopy13"><h2 class="d-inline">&nbsp;' + especials[1] + ': </h2><p class="d-inline" id="char13"></p></span><img src="_img/copy.png" class="copy-icon btn-copy" data-clipboard-action="copy" data-clipboard-target="#charCopy13"><br>';
		};
		
		if(document.getElementById('opt16').checked == true){
			document.getElementById("extra1").innerHTML = '<span id="charCopy12"><h2 class="d-inline">&nbsp;' + especials[0] + ': </h2><p class="d-inline" id="char12"></p></span><img src="_img/copy.png" class="copy-icon btn-copy" data-clipboard-action="copy" data-clipboard-target="#charCopy12"><br>';
			document.getElementById("extra2").innerHTML = '<span id="charCopy13"><h2 class="d-inline">&nbsp;' + especials[1] + ': </h2><p class="d-inline" id="char13"></p></span><img src="_img/copy.png" class="copy-icon btn-copy" data-clipboard-action="copy" data-clipboard-target="#charCopy13"><br>';
			document.getElementById("extra3").innerHTML = '<span id="charCopy14"><h2 class="d-inline">&nbsp;' + especials[2] + ': </h2><p class="d-inline" id="char14"></p></span><img src="_img/copy.png" class="copy-icon btn-copy"data-clipboard-action="copy" data-clipboard-target="#charCopy14"><br>';
			document.getElementById("extra4").innerHTML = '<span id="charCopy15"><h2 class="d-inline">&nbsp;' + especials[3] + ': </h2><p class="d-inline" id="char15"></p></span><img src="_img/copy.png" class="copy-icon btn-copy" data-clipboard-action="copy" data-clipboard-target="#charCopy15"><br>';
		};
		
		if(document.getElementById('opt18').checked == true){
			document.getElementById("extra1").innerHTML = '<span id="charCopy12"><h2 class="d-inline">' + especials[0] + ': </h2><p class="d-inline" id="char12"></p></span><img src="_img/copy.png" class="copy-icon btn-copy" data-clipboard-action="copy" data-clipboard-target="#charCopy12"><br>';
			document.getElementById("extra2").innerHTML = '<span id="charCopy13"><h2 class="d-inline">' + especials[1] + ': </h2><p class="d-inline" id="char13"></p></span><img src="_img/copy.png" class="copy-icon btn-copy" data-clipboard-action="copy" data-clipboard-target="#charCopy13"><br>';
			document.getElementById("extra3").innerHTML = '<span id="charCopy14"><h2 class="d-inline">' + especials[2] + ': </h2><p class="d-inline" id="char14"></p></span><img src="_img/copy.png" class="copy-icon btn-copy" data-clipboard-action="copy" data-clipboard-target="#charCopy14"><br>';
			document.getElementById("extra4").innerHTML = '<span id="charCopy15"><h2 class="d-inline">' + especials[3] + ': </h2><p class="d-inline" id="char15"></p></span><img src="_img/copy.png" class="copy-icon btn-copy" data-clipboard-action="copy" data-clipboard-target="#charCopy15"><br>';
			document.getElementById("extra5").innerHTML = '<span id="charCopy16"><h2 class="d-inline">' + especials[4] + ': </h2><p class="d-inline" id="char16"></p></span><img src="_img/copy.png" class="copy-icon btn-copy" data-clipboard-action="copy" data-clipboard-target="#charCopy16"><br>';
			document.getElementById("extra6").innerHTML = '<span id="charCopy17"><h2 class="d-inline">' + especials[5] + ': </h2><p class="d-inline" id="char17"></p></span><img src="_img/copy.png" class="copy-icon btn-copy" data-clipboard-action="copy" data-clipboard-target="#charCopy17"><br>';
		};
	};
	
	//Reseta os personagens extras e a array nicks
	function extrasReset(){
		for (s = 0; s < 6; s++) {
				p = "extra" + (s + 1);
				
				document.getElementById(p).innerHTML = "";
		};
		
		s = 0;
		
		//array nicks
		nicks = [""];
	};
	
	//Retonar o valor para os inputs resetados
	function backup(){
		if(corrigido == 1){
			for (t = 0; t < players; t++) {
				var q = "input" + t;
				document.getElementById(q).value = backupNicks[t];
			};
		};
	};
	
	//Confere se o usuário clicou em corrigir
	function corriCheck(){
		corrigido = 1;
	};
	
	//Confere se o usuário clicou em corrigir
	function corriUncheck(){
		corrigido = 0;
	};
	
	//Corrige nicks
	function corrigeNicks(){
		//Pega os nicks
		for (y = 0; y < players; y++) {
			u = "input" + y;
			nickCorrigido[y] = document.getElementById(u).value;
			
		};
		
		//Confere os nicks trocados e redistribui
		for (y = 0; y < players; y++) {
			
			if(nickCorrigido[y] !== backupNicks[y]){
				for (z = 0; z < players; z++) {
					o = "char" + z;					
					console.log('chegou no char');
					if(backupNicks[y] == document.getElementById(o).innerHTML){
						document.getElementById(o).innerHTML = nickCorrigido[y];
					};
				};
			}; 	
		};
				
		//Passa os valores corrigidos para a variável original de nicks
		for (y = 0; y < players; y++) {
			u = "char" + y;
			nicks[y] = document.getElementById(u).innerHTML;		
		};
		
		
		for (z = 0; z < players; z++) {
			o = "char" + z;
			
			document.getElementById(o).innerHTML = nicks[z];
		};
		
		for (z = 0; z < players; z++) {
			backupNicks[z] = nickCorrigido[z];
		};	
	};
	
	//Ativa botão de salvar e desativa o de sorteio
	function changeBtn(){
		document.getElementById('save').classList.remove('d-none');
		document.getElementById('inputShuffle').classList.add('d-none');
		document.getElementById('inputBack').classList.add('d-none');
	};
	
	//Inicializa CopyToClipboard JS
	var clipboard = new Clipboard('.btn-copy');
	
	//Valida card de personagens extras
		//Faz validação em si
		function validaExtra(){
			//Reseta variável que armazena quantos checks foram marcados
			extraCount = 0;
			
			//Conta quantos estão marcados
			checkedCount();
			
			//Compara e valida
			if(extraCount == extraAmount){
				//Muda para o próximo card
				secondChange();
				
				//Armazena quais personagens extras foram escolhidos 
				extraCheck();
			}else if(extraCount < extraAmount){
				//Armazena personagens restantes para escolha
				d = extraAmount - extraCount;
				
				//Estiliza o formulário
				document.getElementById('body1').classList.add('invalidForm1');
				
				//Fala quantos personagens faltam ser escolhidos
				if(d > 1){
					document.getElementById('extra-title').innerHTML = "Falta escolher " + d + " personagens!";
				}else{
					document.getElementById('extra-title').innerHTML = "Falta escolher " + d + " personagem!";
				};
				
				//Reseta variável que armazena quantos checks foram marcados
				extraCount = 0;
			};
		};
		
		//Checa quantos personagens foram escolhidos
		function checkedCount(){
			//Conta quantos estão marcados
			if(document.getElementById('fada').checked == true){
				extraCount++;
			};
			if(document.getElementById('escu').checked == true){
				extraCount++;
			};
			if(document.getElementById('just').checked == true){
				extraCount++;
			};
			if(document.getElementById('testem').checked == true){
				extraCount++;
			};
			if(document.getElementById('hb').checked == true){
				extraCount++;
			};
			if(document.getElementById('psico').checked == true){
				extraCount++;
			};
			if(document.getElementById('demo').checked == true){
				extraCount++;
			};
		};
		
		//Informa quantos personagens faltam, antes do usuário clicar em "próximo"
		function extraLack(){
			//Conta quantos estão marcados
			checkedCount();
			
			//Estiliza o formulário
			document.getElementById('body1').classList.remove('invalidForm1');
			
			//Armazena personagens restantes para escolha
			d = extraAmount - extraCount;
			
			//Informa quantos personagens faltam ser escolhidos
			if(d > 1){
				document.getElementById("extra-title").innerHTML = "Escolha " + d + " personagens:";
			}else if(d == 1){
				document.getElementById("extra-title").innerHTML = "Escolha " + d + " personagem:";
			}else{
				document.getElementById("extra-title").innerHTML = "Muito bem! =)";
			};
			
			//Reseta variável que armazena quantos checks foram marcados
			extraCount = 0;
		};
	
	//Valida o formulário de inputs
		function validInput(){
			//Confere quantos inputs faltam ser preenchidos
			inputLackCheck();
			
			//Faz a validação em si
			if(inputLack > 1){			
				document.getElementById('body2').classList.add('invalidForm2');
				for (z = 0; z < players; z++) {
					rr = "input" + z;
					
					document.getElementById(rr).classList.add('invalidForm2');
				};
				
				fillLack();
				
				document.getElementById("extra-title2").innerHTML = "Falta preencher " + inputLack + " nicknames:";
			}else if(inputLack == 1){
				document.getElementById('body2').classList.add('invalidForm2');
				for (z = 0; z < players; z++) {
					rr = "input" + z;
					
					document.getElementById(rr).classList.add('invalidForm2');
				};
				
				fillLack();
				
				document.getElementById("extra-title2").innerHTML = "Falta preencher " + inputLack + " nickname:";
			}else{
				console.log('chegou')
				fourthChange();
				corriUncheck();
			};
			
			//Reseta a variável
			inputLack = 0;
		};
		
		function fillLack(){
			//Confere quantos inputs faltam preencher
			inputLackCheck();
			
			//Valida em si
			if(inputLack == 0){
				document.getElementById("extra-title2").innerHTML = "";
				document.getElementById('body2').classList.remove('invalidForm2');
				for (z = 0; z < players; z++) {
					rr = "input" + z;
					
					document.getElementById(rr).classList.remove('invalidForm2');
				};
			}else if(inputLack == 1){
				document.getElementById("extra-title2").innerHTML = "Falta preencher " + inputLack + " nickname:";
			}else{
				document.getElementById("extra-title2").innerHTML = "Falta preencher " + inputLack + " nicknames:";
			};
			
		};
		
		//Armazena quantos inputs faltam preencher
		function inputLackCheck(){
			//Zera variável que conta quantos inputs estão vazios
			inputLack = 0;
			
			//Conta quantos inputs estão vazios
			for (z = 0; z < players; z++) {
				
				rr = "input" + z;
				
				if(document.getElementById(rr).value == ""){
					inputLack++;
				};
			};
		};