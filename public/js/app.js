$(function() {
	$('#cnh').mask('00000000000');
	$('#codigoSeguranca').mask('00000000000');
	$('#habilitacao_1').mask('00/00/0000');
	$('#cnhValidade').mask('00/00/0000');
	$('#cnhEmissao').mask('00/00/0000');
	$('#telefone').mask('(00) 00000-0000');
	$('#celular').mask('(00) 00000-0000');
	$('#cpf').mask('000.000.000-00');

	$("#div_veiculo_1").hide();
	$("#div_veiculo_2").hide();
	$("#div_veiculo_3").hide();

	$("#div_proprietario_1").hide();
	$("#div_proprietario_2").hide();
	$("#div_proprietario_3").hide();

	$("#adicionar_veiculo_1").click(function () {
		if ($("#div_veiculo_1").is(":hidden"))
		{
			$("#adicionar_veiculo_1").hide();
			$("#div_veiculo_1").show();
			$('#div_veiculo_1 input').each((index, value) => { 
				value.required = true; 
			})
			$('#documento_proprietario_1').mask('000.000.000-00');
			$('#renavam_veiculo_1').mask('00000000000');
		}
	});

	$("#adicionar_veiculo_2").click(function () {
		if ($("#div_veiculo_2").is(":hidden"))
		{
			$("#adicionar_veiculo_2").hide();
			$("#div_veiculo_2").show();
			$('#div_veiculo_2 input').each((index, value) => { 
				value.required = true; 
			})
		}
	});

	$("#adicionar_veiculo_3").click(function () {
		if ($("#div_veiculo_3").is(":hidden"))
		{
			$("#adicionar_veiculo_3").hide();
			$("#div_veiculo_3").show();
			$('#div_veiculo_3 input').each((index, value) => { 
				value.required = true; 
			})
		}
	});

	$("#adicionar_proprietario_1").click(function () {
		if ($("#div_proprietario_1").is(":hidden"))
		{
			$("#adicionar_proprietario_1").hide();
			$("#div_proprietario_1").show();
			$('#div_proprietario_1 input').each((index, value) => { 
				value.required = true; 
			})
		}
	});

	$("#adicionar_proprietario_2").click(function () {
		if ($("#div_proprietario_2").is(":hidden"))
		{
			$("#adicionar_proprietario_2").hide();
			$("#div_proprietario_2").show();
			$('#div_proprietario_2 input').each((index, value) => { 
				value.required = true; 
			})
		}
	});

	$("#adicionar_proprietario_3").click(function () {
		if ($("#div_proprietario_3").is(":hidden"))
		{
			$("#adicionar_proprietario_3").hide();
			$("#div_proprietario_3").show();
			$('#div_proprietario_3 input').each((index, value) => { 
				value.required = true; 
			})
		}
	});

	$(document).on('click', '#remover_veiculo_1', function () {
			$("#adicionar_veiculo_1").show();
			$("#div_veiculo_1").hide();
			$('#div_veiculo_1 input').each((index, value) => { 
				value.required = false; 
			})
	});

	$(document).on('click', '#remover_veiculo_2', function () {
		$("#adicionar_veiculo_2").show();
		$("#div_veiculo_2").hide();
		$('#div_veiculo_2 input').each((index, value) => { 
			value.required = false; 
		})
	});

	$(document).on('click', '#remover_veiculo_3', function () {
		$("#adicionar_veiculo_3").show();
		$("#div_veiculo_3").hide();
		$('#div_veiculo_3 input').each((index, value) => { 
			value.required = false; 
		})
	});

	$(document).on('click', '#remover_proprietario_1', function () {
		$("#adicionar_proprietario_1").show();
		$("#div_proprietario_1").hide();
		$('#div_proprietario_1 input').each((index, value) => { 
			value.required = false; 
		})
	});

	$(document).on('click', '#remover_proprietario_2', function () {
		$("#adicionar_proprietario_2").show();
		$("#div_proprietario_2").hide();
		$('#div_proprietario_2 input').each((index, value) => { 
			value.required = false; 
		})
	});

	$(document).on('click', '#remover_proprietario_3', function () {
		$("#adicionar_proprietario_3").show();
		$("#div_proprietario_3").hide();
		$('#div_proprietario_3 input').each((index, value) => { 
			value.required = false; 
		})
	});

})