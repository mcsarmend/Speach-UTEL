$(document).ready(function(){
	Ocultar_Secciones();
	var estado = false;
	var estado_lic = false;
// Botones de las secciones Aprender
	$('#btn-toggle-Ad').on('click',function(){
		$('.seccionToggle').slideToggle();
		if (estado == true) {
			Ocultar_Secciones();
			estado = false;
		} else {
			Ocultar_Secciones_Exc_Una("Adicionales");
			estado = true;
		}
	});
	$('#btn-toggle-Dif').on('click',function(){
		$('.seccionToggle').slideToggle();
		if (estado == true) {
			Ocultar_Secciones();
			estado = false;
		} else {
			Ocultar_Secciones_Exc_Una("Diferenciadores");
			estado = true;
		}
	});
	$('#btn-toggle-Gen').on('click',function(){
		$('.seccionToggle').slideToggle();
		if (estado == true) {
			Ocultar_Secciones();
			estado = false;
		} else {
			Ocultar_Secciones_Exc_Una("Generalidades");
			estado = true;
		}
	});
	$('#btn-toggle-Lic').on('click',function(){
		$('.seccionToggle').slideToggle();
		if (estado == true) {
			Ocultar_Secciones();
			estado = false;
		} else {
			Ocultar_Secciones_Exc_Una("Licenciaturas");
			estado = true;
		}
	});
	// Secciones de Licenciaturas
	// Ingenieria en Sistemas
	$('#btn-toggle-ingSis').on('click',function(){
		$('.seccionToggle').slideToggle();
		Ocultar_Lic_Exc_Una("ingSis");
	});
	$('#return_lics_ingSis').on('click',function(){
		$('.seccionToggle').slideToggle();
		mostrar_lics();
	});
	// Ingieria Industrial y Administración
	$('#btn-toggle-ingIndAdm').on('click',function(){
		$('.seccionToggle').slideToggle();
		Ocultar_Lic_Exc_Una("ingIndAdm");
	});
	$('#return_lics_ingIndAdm').on('click',function(){
		$('.seccionToggle').slideToggle();
		mostrar_lics();
	});
	// Ingeniería Industrial
	$('#btn-toggle-ingInd').on('click',function(){
		$('.seccionToggle').slideToggle();
		Ocultar_Lic_Exc_Una("ingInd");
	});
	$('#return_lics_ingInd').on('click',function(){
		$('.seccionToggle').slideToggle();
		mostrar_lics();
	});
	// Administración
	$('#btn-toggle-adm').on('click',function(){
		$('.seccionToggle').slideToggle();
		Ocultar_Lic_Exc_Una("adm");
	});
	$('#return_lics_adm').on('click',function(){
		$('.seccionToggle').slideToggle();
		mostrar_lics();
	});
	// Administración de Negocios
	$('#btn-toggle-admNeg').on('click',function(){
		$('.seccionToggle').slideToggle();
		Ocultar_Lic_Exc_Una("admNeg");
	});
	$('#return_lics_admNeg').on('click',function(){
		$('.seccionToggle').slideToggle();
		mostrar_lics();
	});
	// Administración de Recursos Humanos
	$('#btn-toggle-admRRHH').on('click',function(){
		$('.seccionToggle').slideToggle();
		Ocultar_Lic_Exc_Una("admRRHH");
	});
	$('#return_lics_admRRHH').on('click',function(){
		$('.seccionToggle').slideToggle();
		mostrar_lics();
	});
	// Administración y finanzas
	$('#btn-toggle-admFin').on('click',function(){
		$('.seccionToggle').slideToggle();
		Ocultar_Lic_Exc_Una("admFin");
	});
	$('#return_lics_admFin').on('click',function(){
		$('.seccionToggle').slideToggle();
		mostrar_lics();
	});
	// Administración de TI
	$('#btn-toggle-admTI').on('click',function(){
		$('.seccionToggle').slideToggle();
		Ocultar_Lic_Exc_Una("admTI");
	});
	$('#return_lics_admTI').on('click',function(){
		$('.seccionToggle').slideToggle();
		mostrar_lics();
	});
	// Administración de Ventas
	$('#btn-toggle-admVent').on('click',function(){
		$('.seccionToggle').slideToggle();
		Ocultar_Lic_Exc_Una("admVent");
	});
	$('#return_lics_admVent').on('click',function(){
		$('.seccionToggle').slideToggle();
		mostrar_lics();
	});
	//Arte Digital y Diseño
	$('#btn-toggle-ArtDig').on('click',function(){
		$('.seccionToggle').slideToggle();
		Ocultar_Lic_Exc_Una("ArtDig");
	});
	$('#return_lics_ArtDig').on('click',function(){
		$('.seccionToggle').slideToggle();
		mostrar_lics();
	});
	//Ciencias politicas y Administración pública
	$('#btn-toggle-cpAdmPub').on('click',function(){
		$('.seccionToggle').slideToggle();
		Ocultar_Lic_Exc_Una("cpAdmPub");
	});
	$('#return_lics_cpAdmPub').on('click',function(){
		$('.seccionToggle').slideToggle();
		mostrar_lics();
	});
	//Comunicación
	$('#btn-toggle-com').on('click',function(){
		$('.seccionToggle').slideToggle();
		Ocultar_Lic_Exc_Una("com");
	});
	$('#return_lics_com').on('click',function(){
		$('.seccionToggle').slideToggle();
		mostrar_lics();
	});

	//Comunicación Digital
	$('#btn-toggle-comDig').on('click',function(){
		$('.seccionToggle').slideToggle();
		Ocultar_Lic_Exc_Una("comDig");
	});
	$('#return_lics_comDig').on('click',function(){
		$('.seccionToggle').slideToggle();
		mostrar_lics();
	});
	//Comunicación Organizacional
	$('#btn-toggle-comOrg').on('click',function(){
		$('.seccionToggle').slideToggle();
		Ocultar_Lic_Exc_Una("comOrg");
	});
	$('#return_lics_comOrg').on('click',function(){
		$('.seccionToggle').slideToggle();
		mostrar_lics();
	});
	//Comunicación Corporativa
	$('#btn-toggle-comCorp').on('click',function(){
		$('.seccionToggle').slideToggle();
		Ocultar_Lic_Exc_Una("comCorp");
	});
	$('#return_lics_comCorp').on('click',function(){
		$('.seccionToggle').slideToggle();
		mostrar_lics();
	});
	//Contaduría Pública
	$('#btn-toggle-contPub').on('click',function(){
		$('.seccionToggle').slideToggle();
		Ocultar_Lic_Exc_Una("contPub");
	});
	$('#return_lics_contPub').on('click',function(){
		$('.seccionToggle').slideToggle();
		mostrar_lics();
	});

	//Contaduría y Finanzas
	$('#btn-toggle-contFin').on('click',function(){
		$('.seccionToggle').slideToggle();
		Ocultar_Lic_Exc_Una("contFin");
	});
	$('#return_lics_contFin').on('click',function(){
		$('.seccionToggle').slideToggle();
		mostrar_lics();
	});
	//Criminología y Criminalistica
	$('#btn-toggle-Crim').on('click',function(){
		$('.seccionToggle').slideToggle();
		Ocultar_Lic_Exc_Una("Crim");
	});
	$('#return_lics_Crim').on('click',function(){
		$('.seccionToggle').slideToggle();
		mostrar_lics();
	});
	//Derecho
	$('#btn-toggle-der').on('click',function(){
		$('.seccionToggle').slideToggle();
		Ocultar_Lic_Exc_Una("der");
	});
	$('#return_lics_der').on('click',function(){
		$('.seccionToggle').slideToggle();
		mostrar_lics();
	});
	//Derecho Internacional
	$('#btn-toggle-derInt').on('click',function(){
		$('.seccionToggle').slideToggle();
		Ocultar_Lic_Exc_Una("derInt");
	});
	$('#return_lics_derInt').on('click',function(){
		$('.seccionToggle').slideToggle();
		mostrar_lics();
	});
	//Derecho Empresarial
	$('#btn-toggle-derEmp').on('click',function(){
		$('.seccionToggle').slideToggle();
		Ocultar_Lic_Exc_Una("derEmp");
	});
	$('#return_lics_derEmp').on('click',function(){
		$('.seccionToggle').slideToggle();
		mostrar_lics();
	});

	//Marketing y Publicidad
	$('#btn-toggle-mktPub').on('click',function(){
		$('.seccionToggle').slideToggle();
		Ocultar_Lic_Exc_Una("mktPub");
	});
	$('#return_lics_mktPub').on('click',function(){
		$('.seccionToggle').slideToggle();
		mostrar_lics();
	});
	//Medios Digitales
	$('#btn-toggle-medDig').on('click',function(){
		$('.seccionToggle').slideToggle();
		Ocultar_Lic_Exc_Una("medDig");
	});
	$('#return_lics_medDig').on('click',function(){
		$('.seccionToggle').slideToggle();
		mostrar_lics();
	});
	//Mercadotécnia
	$('#btn-toggle-merc').on('click',function(){
		$('.seccionToggle').slideToggle();
		Ocultar_Lic_Exc_Una("merc");
	});
	$('#return_lics_merc').on('click',function(){
		$('.seccionToggle').slideToggle();
		mostrar_lics();
	});
	//Negocios Internacionales
	$('#btn-toggle-negInt').on('click',function(){
		$('.seccionToggle').slideToggle();
		Ocultar_Lic_Exc_Una("negInt");
	});
	$('#return_lics_negInt').on('click',function(){
		$('.seccionToggle').slideToggle();
		mostrar_lics();
	});
	//Pedagogía
	$('#btn-toggle-ped').on('click',function(){
		$('.seccionToggle').slideToggle();
		Ocultar_Lic_Exc_Una("ped");
	});
	$('#secc_ped').on('click',function(){
		$('.seccionToggle').slideToggle();
		mostrar_lics();
	});
	//Psicología Organizacional
	$('#btn-toggle-psicOrg').on('click',function(){
		$('.seccionToggle').slideToggle();
		Ocultar_Lic_Exc_Una("psicOrg");
	});
	$('#secc_psicOrg').on('click',function(){
		$('.seccionToggle').slideToggle();
		mostrar_lics();
	});
	//Psicología
	$('#btn-toggle-psic').on('click',function(){
		$('.seccionToggle').slideToggle();
		Ocultar_Lic_Exc_Una("psic");
	});
	$('#secc_psic').on('click',function(){
		$('.seccionToggle').slideToggle();
		mostrar_lics();
	});

// Botones de Acordar
// Abrir promociones
//Escalonada Bimestral
$('#btn-toggle-escBim').on('click',function(){
	$('.seccionToggle').slideToggle();
	ocultarPromosExcUna("escBim");

});
$('#return_escBim_acordar').on('click',function(){
	$('.seccionToggle').slideToggle();
	ocultarPromos();
});
//Por Jornada

$('#btn-toggle-Jor').on('click',function(){
	$('.seccionToggle').slideToggle();
	ocultarPromosExcUna("jor");
	
});
$('#return_jor_acordar').on('click',function(){
	$('.seccionToggle').slideToggle();
	ocultarPromos();
});
//Escalonada Mensual

$('#btn-toggle-escMen').on('click',function(){
	$('.seccionToggle').slideToggle();
	ocultarPromosExcUna("escMen");
	
});
$('#return_escMen_acordar').on('click',function(){
	$('.seccionToggle').slideToggle();
	ocultarPromos();
});
//Jornada Mensual

$('#btn-toggle-jorMen').on('click',function(){
	$('.seccionToggle').slideToggle();
	ocultarPromosExcUna("jorMen");
	
});
$('#return_jorMen_acordar').on('click',function(){
	$('.seccionToggle').slideToggle();
	ocultarPromos();
});





});
function ocultarBotonesProm(){
	$('#btn-toggle-escBim').hide();
	$('#btn-toggle-escMen').hide();
	$('#btn-toggle-Jor').hide();
	$('#btn-toggle-jorMen').hide();
}

function ocultarPromosExcUna(exception){

	$('#_return_Acordar').hide();
	$('#_main').hide();
	switch(exception){
	case "escBim":
		ocultarBotonesProm();
		$('#secc_escBim').show();
		$('#secc_escMen').hide();
		$('#secc_jor').hide();
		$('#secc_jorMen').hide();				

	break;
	case "jor":
		ocultarBotonesProm();
		$('#secc_jor').show();
		$('#secc_escMen').hide();
		$('#secc_escBim').hide();
		$('#secc_jorMen').hide();								
	break;
	case "escMen":
		ocultarBotonesProm();
		$('#secc_escMen').show();
		$('#secc_jor').hide();
		$('#secc_escBim').hide();
		$('#secc_jorMen').hide();				
	break;
	case "jorMen":
		ocultarBotonesProm();
		$('#secc_jorMen').show();
		$('#secc_escMen').hide();
		$('#secc_jor').hide();
		$('#secc_escBim').hide();				
	break;
	}
}
function ocultarPromos(){
	$('#_return_Acordar').show();
	$('#_main').show();
	$('#btn-toggle-Jor').show();	
	$('#btn-toggle-escBim').show();
	$('#btn-toggle-escMen').show();
	$('#btn-toggle-jorMen').show();
	$('#secc_escBim').hide();
	$('#secc_jor').hide();
	$('#secc_escMen').hide();
	$('#secc_jorMen').hide();


}

function Ocultar_Secciones(){
	$("#licenciaturas").hide();
	$("#secc_adicionales").hide();
	$("#secc_diferenciadores").hide();
	$("#secc_generalidades").hide();
	$('#secc_prom').hide();
}
function Ocultar_Secciones_Exc_Una(exception){
	switch(exception){
		case "Adicionales":
			$("#licenciaturas").hide();
			$("#secc_diferenciadores").hide();
			$("#secc_generalidades").hide();
			$("#secc_adicionales").show();
		break;
		case "Diferenciadores":
			$("#licenciaturas").hide();
			$("#secc_adicionales").hide();
			$("#secc_generalidades").hide();
			$("#secc_diferenciadores").show();
		break;
		case "Generalidades":
			$("#licenciaturas").hide();
			$("#secc_adicionales").hide();
			$("#secc_diferenciadores").hide();
			$("#secc_generalidades").show();

		break;
		case "Licenciaturas":
			$("#secc_adicionales").hide();
			$("#secc_diferenciadores").hide();
			$("#secc_generalidades").hide();
			$("#licenciaturas").show();
		break;

	}


}
function mostrar_lics(){
	$("#lics").show();
	$("#return_").show();
	$("#secc_adm").hide();		//1
	$("#secc_admFin").hide();	//2
	$("#secc_admNeg").hide();	//3
	$("#secc_admRRHH").hide();	//4	
	$("#secc_admTI").hide();	//5
	$("#secc_admVent").hide();	//6
	$("#secc_ArtDig").hide();	//7
	$("#secc_cpAdmPub").hide();	//8
	$("#secc_com").hide();		//9
	$("#secc_comDig").hide();	//10
	$("#secc_comOrg").hide();	//11
	$("#secc_comCorp").hide();	//12
	$("#secc_contPub").hide();	//13
	$("#secc_contFin").hide();	//14	
	$("#secc_Crim").hide();		//15
	$("#secc_der").hide();		//16
	$("#secc_derInt").hide();	//17
	$("#secc_derEmp").hide();	//18
	$("#secc_ingSis").hide();	//19
	$("#secc_ingIndAdm").hide();//20
	$("#secc_ingInd").hide();	//21
	$("#secc_mktPub").hide();	//22
	$("#secc_medDig").hide();	//23
	$("#secc_merc").hide();		//24
	$("#secc_negInt").hide();	//25
	$("#secc_negInt").hide();	//25
	$("#secc_ped").hide();		//26
	$("#secc_psicOrg").hide();	//27
	$("#secc_psic").hide();		//28




}
function Ocultar_Lic_Exc_Una(exception){
	$("#lics").hide();
	$("#return_").hide();

	Ocultar_Secciones();
	switch(exception){
		//1
		case "adm":
			$("#secc_adm").show();			//1
			$("#secc_ingSis").hide();		//2
			$("#secc_ingIndAdm").hide();	//3
			$("#secc_ingInd").hide();		//4
			$("#secc_admNeg").hide();		//5
			$("#secc_admRRHH").hide();		//6
			$("#secc_admFin").hide();		//7
			$("#secc_admTI").hide();		//8
			$("#secc_admVent").hide();		//9
			$("#secc_ArtDig").hide();		//10
			$("#secc_cpAdmPub").hide();		//11
			$("#secc_com").hide();			//12
			$("#secc_comDig").hide();		//13
			$("#secc_comOrg").hide();		//14
			$("#secc_comCorp").hide();		//15
			$("#secc_contPub").hide();		//16
			$("#secc_contFin").hide();		//17
			$("#secc_Crim").hide();			//18
			$("#secc_der").hide();			//19
			$("#secc_derInt").hide();		//20
			$("#secc_derEmp").hide();		//21
			$("#secc_mktPub").hide();		//22
			$("#secc_medDig").hide();		//23
			$("#secc_merc").hide();			//24
			$("#secc_negInt").hide();		//25
			$("#secc_ped").hide();			//26
			$("#secc_psicOrg").hide();		//27
			$("#secc_psic").hide();			//27
		break;
		//2
		case "admFin":
			$("#secc_admFin").show();		//1
			$("#secc_admRRHH").hide();		//2
			$("#secc_admNeg").hide();		//3
			$("#secc_adm").hide();			//4
			$("#secc_ingSis").hide();		//5
			$("#secc_ingIndAdm").hide();	//6
			$("#secc_ingInd").hide();		//7
			$("#secc_admTI").hide();		//8
			$("#secc_admVent").hide();		//9
			$("#secc_ArtDig").hide();		//10
			$("#secc_cpAdmPub").hide();		//11
			$("#secc_com").hide();			//12
			$("#secc_comDig").hide();		//13
			$("#secc_comOrg").hide();		//14
			$("#secc_comCorp").hide();		//15
			$("#secc_contPub").hide();		//16
			$("#secc_contFin").hide();		//17
			$("#secc_Crim").hide();			//18
			$("#secc_der").hide();			//19
			$("#secc_derInt").hide();		//20
			$("#secc_derEmp").hide();		//21
			$("#secc_mktPub").hide();		//22
			$("#secc_medDig").hide();		//23
			$("#secc_merc").hide();			//24
			$("#secc_negInt").hide();		//25
			$("#secc_ped").hide();			//26
			$("#secc_psicOrg").hide();		//27
			$("#secc_psic").hide();			//28

		break;
		//3
		case "admNeg":
			$("#secc_admNeg").show();		//1
			$("#secc_adm").hide();			//2
			$("#secc_ingSis").hide();		//3
			$("#secc_ingIndAdm").hide();	//4	
			$("#secc_ingInd").hide();		//5
			$("#secc_admRRHH").hide();		//6
			$("#secc_admFin").hide();		//7
			$("#secc_admTI").hide();		//8
			$("#secc_admVent").hide();		//9
			$("#secc_ArtDig").hide();		//10
			$("#secc_cpAdmPub").hide();		//11
			$("#secc_com").hide();			//12
			$("#secc_comDig").hide();		//13
			$("#secc_comOrg").hide();		//14
			$("#secc_comCorp").hide();		//15
			$("#secc_contPub").hide();		//16
			$("#secc_contFin").hide();		//17
			$("#secc_Crim").hide();			//18
			$("#secc_der").hide();			//19
			$("#secc_derInt").hide();		//20
			$("#secc_derEmp").hide();		//21
			$("#secc_mktPub").hide();		//22
			$("#secc_medDig").hide();		//23
			$("#secc_merc").hide();			//24
			$("#secc_negInt").hide();		//25
			$("#secc_ped").hide();			//26
			$("#secc_psicOrg").hide();		//27
			$("#secc_psic").hide();			//28
		break;
		//4
		case "admRRHH":
			$("#secc_admRRHH").show();		//1
			$("#secc_admNeg").hide();		//2
			$("#secc_adm").hide();			//3
			$("#secc_ingSis").hide();		//4
			$("#secc_ingIndAdm").hide();	//5
			$("#secc_ingInd").hide();		//6
			$("#secc_admFin").hide();		//7
			$("#secc_admTI").hide();		//8
			$("#secc_admVent").hide();		//9
			$("#secc_ArtDig").hide();		//10
			$("#secc_cpAdmPub").hide();		//11
			$("#secc_com").hide();			//12
			$("#secc_comDig").hide();		//13
			$("#secc_comOrg").hide();		//14
			$("#secc_comCorp").hide();		//15
			$("#secc_contPub").hide();		//16
			$("#secc_contFin").hide();		//17
			$("#secc_Crim").hide();			//18
			$("#secc_der").hide();			//19
			$("#secc_derInt").hide();		//20
			$("#secc_derEmp").hide();		//21
			$("#secc_mktPub").hide();		//22
			$("#secc_medDig").hide();		//23
			$("#secc_merc").hide();			//24
			$("#secc_negInt").hide();		//25
			$("#secc_ped").hide();			//26
			$("#secc_psicOrg").hide();		//27
			$("#secc_psic").hide();			//28

		break;
		//5
		case "admTI":
			$("#secc_admTI").show();		//1
			$("#secc_admFin").hide();		//2
			$("#secc_admRRHH").hide();		//3
			$("#secc_admNeg").hide();		//4
			$("#secc_adm").hide();			//5
			$("#secc_ingSis").hide();		//6
			$("#secc_ingIndAdm").hide();	//7
			$("#secc_ingInd").hide();		//8
			$("#secc_admVent").hide();		//9
			$("#secc_ArtDig").hide();		//10
			$("#secc_cpAdmPub").hide();		//11
			$("#secc_com").hide();			//12
			$("#secc_comDig").hide();		//13
			$("#secc_comOrg").hide();		//14
			$("#secc_comCorp").hide();		//15
			$("#secc_contPub").hide();		//16
			$("#secc_contFin").hide();		//17
			$("#secc_Crim").hide();			//18
			$("#secc_der").hide();			//19
			$("#secc_derInt").hide();		//20
			$("#secc_derEmp").hide();		//21
			$("#secc_mktPub").hide();		//22
			$("#secc_medDig").hide();		//23
			$("#secc_merc").hide();			//24
			$("#secc_negInt").hide();		//25
			$("#secc_ped").hide();			//26
			$("#secc_psicOrg").hide();		//27
			$("#secc_psic").hide();			//28

		break;
		//6
		case "admVent":
			$("#secc_admVent").show();		//1
			$("#secc_admTI").hide();		//2
			$("#secc_admFin").hide();		//3
			$("#secc_admRRHH").hide();		//4
			$("#secc_admNeg").hide();		//5
			$("#secc_adm").hide();			//6
			$("#secc_ingSis").hide();		//7
			$("#secc_ingIndAdm").hide();	//8
			$("#secc_ingInd").hide();		//9
			$("#secc_ArtDig").hide();		//10
			$("#secc_cpAdmPub").hide();		//11
			$("#secc_com").hide();			//12
			$("#secc_comDig").hide();		//13
			$("#secc_comOrg").hide();		//14
			$("#secc_comCorp").hide();		//15
			$("#secc_contPub").hide();		//16
			$("#secc_contFin").hide();		//17
			$("#secc_Crim").hide();			//18
			$("#secc_der").hide();			//19
			$("#secc_derInt").hide();		//20
			$("#secc_derEmp").hide();		//21
			$("#secc_mktPub").hide();		//22
			$("#secc_medDig").hide();		//23
			$("#secc_merc").hide();			//24
			$("#secc_negInt").hide();		//25
			$("#secc_ped").hide();			//26
			$("#secc_psicOrg").hide();		//27
			$("#secc_psic").hide();			//28
		break;
		// 7
		case "ArtDig":
			$("#secc_ArtDig").show();		//1
			$("#secc_ingInd").hide();		//2
			$("#secc_ingSis").hide();		//3
			$("#secc_ingIndAdm").hide();	//4
			$("#secc_adm").hide();			//5
			$("#secc_admNeg").hide();		//6
			$("#secc_admRRHH").hide();		//7
			$("#secc_admFin").hide();		//8
			$("#secc_admTI").hide();		//9
			$("#secc_admVent").hide();		//10
			$("#secc_cpAdmPub").hide();		//11
			$("#secc_com").hide();			//12
			$("#secc_comDig").hide();		//13
			$("#secc_comOrg").hide();		//14
			$("#secc_comCorp").hide();		//15
			$("#secc_contPub").hide();		//16
			$("#secc_contFin").hide();		//17
			$("#secc_Crim").hide();			//18
			$("#secc_der").hide();			//19
			$("#secc_derInt").hide();		//20
			$("#secc_derEmp").hide();		//21
			$("#secc_mktPub").hide();		//22
			$("#secc_medDig").hide();		//23
			$("#secc_merc").hide();			//24
			$("#secc_negInt").hide();		//25
			$("#secc_ped").hide();			//26
			$("#secc_psicOrg").hide();		//27
			$("#secc_psic").hide();			//28
			
		break;
		//8
		case "cpAdmPub":
			$("#secc_cpAdmPub").show();		//1
			$("#secc_ArtDig").hide();		//2
			$("#secc_ingInd").hide();		//3
			$("#secc_ingSis").hide();		//4
			$("#secc_ingIndAdm").hide();	//5
			$("#secc_adm").hide();			//6
			$("#secc_admNeg").hide();		//7
			$("#secc_admRRHH").hide();		//8
			$("#secc_admFin").hide();		//9
			$("#secc_admTI").hide();		//10
			$("#secc_admVent").hide();		//11
			$("#secc_com").hide();			//12
			$("#secc_comDig").hide();		//13
			$("#secc_comOrg").hide();		//14
			$("#secc_comCorp").hide();		//15
			$("#secc_contPub").hide();		//16
			$("#secc_contFin").hide();		//17
			$("#secc_Crim").hide();			//18
			$("#secc_der").hide();			//19
			$("#secc_derInt").hide();		//20
			$("#secc_derEmp").hide();		//21
			$("#secc_mktPub").hide();		//22
			$("#secc_medDig").hide();		//23
			$("#secc_merc").hide();			//24
			$("#secc_negInt").hide();		//25
			$("#secc_ped").hide();			//26
			$("#secc_psicOrg").hide();		//27
			$("#secc_psic").hide();			//28
		break;
		//9
		case "com":
			$("#secc_com").show();			//1
			$("#secc_cpAdmPub").hide();		//2
			$("#secc_ArtDig").hide();		//3
			$("#secc_ingInd").hide();		//4
			$("#secc_ingSis").hide();		//5
			$("#secc_ingIndAdm").hide();	//6
			$("#secc_adm").hide();			//7
			$("#secc_admNeg").hide();		//8
			$("#secc_admRRHH").hide();		//9
			$("#secc_admFin").hide();		//10
			$("#secc_admTI").hide();		//11
			$("#secc_admVent").hide();		//12
			$("#secc_comDig").hide();		//13
			$("#secc_comOrg").hide();		//14
			$("#secc_comCorp").hide();		//15
			$("#secc_contPub").hide();		//16
			$("#secc_contFin").hide();		//17
			$("#secc_Crim").hide();			//18
			$("#secc_der").hide();			//19
			$("#secc_derInt").hide();		//20
			$("#secc_derEmp").hide();		//21
			$("#secc_mktPub").hide();		//22
			$("#secc_medDig").hide();		//23
			$("#secc_merc").hide();			//24
			$("#secc_negInt").hide();		//25
			$("#secc_ped").hide();			//26
			$("#secc_psicOrg").hide();		//27
			$("#secc_psic").hide();			//28
		break;
		//10
		case "comDig":
			$("#secc_comDig").show();		//1
			$("#secc_com").hide();			//2
			$("#secc_cpAdmPub").hide();		//3
			$("#secc_ArtDig").hide();		//4
			$("#secc_ingInd").hide();		//5
			$("#secc_ingSis").hide();		//6
			$("#secc_ingIndAdm").hide();	//7
			$("#secc_adm").hide();			//8
			$("#secc_admNeg").hide();		//9
			$("#secc_admRRHH").hide();		//10
			$("#secc_admFin").hide();		//11
			$("#secc_admTI").hide();		//12
			$("#secc_admVent").hide();		//13
			$("#secc_comCorp").hide();		//14
			$("#secc_comOrg").hide();		//15
			$("#secc_contPub").hide();		//16
			$("#secc_contFin").hide();		//17
			$("#secc_Crim").hide();			//18
			$("#secc_der").hide();			//19
			$("#secc_derInt").hide();		//20
			$("#secc_derEmp").hide();		//21
			$("#secc_mktPub").hide();		//22
			$("#secc_medDig").hide();		//23
			$("#secc_merc").hide();			//24
			$("#secc_negInt").hide();		//25
			$("#secc_ped").hide();			//26
			$("#secc_psicOrg").hide();		//27
			$("#secc_psic").hide();			//28
		break;
		//11
		case "comOrg":
			$("#secc_comOrg").show();		//1
			$("#secc_comDig").hide();		//2
			$("#secc_com").hide();			//3
			$("#secc_cpAdmPub").hide();		//4
			$("#secc_ArtDig").hide();		//5
			$("#secc_ingInd").hide();		//6
			$("#secc_ingSis").hide();		//7
			$("#secc_ingIndAdm").hide();	//8
			$("#secc_adm").hide();			//9
			$("#secc_admNeg").hide();		//10
			$("#secc_admRRHH").hide();		//11
			$("#secc_admFin").hide();		//12
			$("#secc_admTI").hide();		//13
			$("#secc_admVent").hide();		//14
			$("#secc_comCorp").hide();		//15
			$("#secc_contPub").hide();		//16
			$("#secc_contFin").hide();		//17
			$("#secc_Crim").hide();			//18
			$("#secc_der").hide();			//19
			$("#secc_derInt").hide();		//20
			$("#secc_derEmp").hide();		//21
			$("#secc_mktPub").hide();		//22
			$("#secc_medDig").hide();		//23
			$("#secc_merc").hide();			//24
			$("#secc_negInt").hide();		//25
			$("#secc_ped").hide();			//26
			$("#secc_psicOrg").hide();		//27
			$("#secc_psic").hide();			//28
		break;
		//12
		case "comCorp":
			$("#secc_comCorp").show();		//1
			$("#secc_comOrg").hide();		//2
			$("#secc_comDig").hide();		//3
			$("#secc_com").hide();			//4
			$("#secc_cpAdmPub").hide();		//5
			$("#secc_ArtDig").hide();		//6
			$("#secc_ingInd").hide();		//7
			$("#secc_ingSis").hide();		//8
			$("#secc_ingIndAdm").hide();	//9
			$("#secc_adm").hide();			//10
			$("#secc_admNeg").hide();		//11
			$("#secc_admRRHH").hide();		//12
			$("#secc_admFin").hide();		//13
			$("#secc_admTI").hide();		//14
			$("#secc_admVent").hide();		//15
			$("#secc_contPub").hide();		//16
			$("#secc_contFin").hide();		//17
			$("#secc_Crim").hide();			//18
			$("#secc_der").hide();			//19
			$("#secc_derInt").hide();		//20
			$("#secc_derEmp").hide();		//21
			$("#secc_mktPub").hide();		//22
			$("#secc_medDig").hide();		//23
			$("#secc_merc").hide();			//24
			$("#secc_negInt").hide();		//25
			$("#secc_ped").hide();			//26
			$("#secc_psicOrg").hide();		//27
			$("#secc_psic").hide();			//28
		break;
		//13
		case "contPub":
			$("#secc_contPub").show();		//1
			$("#secc_comCorp").hide();		//2
			$("#secc_comOrg").hide();		//3
			$("#secc_comDig").hide();		//4
			$("#secc_com").hide();			//5
			$("#secc_cpAdmPub").hide();		//6
			$("#secc_ArtDig").hide();		//7
			$("#secc_ingInd").hide();		//8
			$("#secc_ingSis").hide();		//9
			$("#secc_ingIndAdm").hide();	//1
			$("#secc_adm").hide();			//11
			$("#secc_admNeg").hide();		//12
			$("#secc_admRRHH").hide();		//13
			$("#secc_admFin").hide();		//14
			$("#secc_admTI").hide();		//15
			$("#secc_admVent").hide();		//16
			$("#secc_contFin").hide();		//17
			$("#secc_Crim").hide();			//18
			$("#secc_der").hide();			//19
			$("#secc_derInt").hide();		//20
			$("#secc_derEmp").hide();		//21
			$("#secc_mktPub").hide();		//22
			$("#secc_medDig").hide();		//23
			$("#secc_merc").hide();			//24
			$("#secc_negInt").hide();		//25
			$("#secc_ped").hide();			//26
			$("#secc_psicOrg").hide();		//27
			$("#secc_psic").hide();			//28
		break;
		//14
		case "contFin":
			$("#secc_contFin").show();		//1
			$("#secc_contPub").hide();		//2
			$("#secc_comCorp").hide();		//3
			$("#secc_comOrg").hide();		//4
			$("#secc_comDig").hide();		//5
			$("#secc_com").hide();			//6
			$("#secc_cpAdmPub").hide();		//7
			$("#secc_ArtDig").hide();		//8
			$("#secc_ingInd").hide();		//9
			$("#secc_ingSis").hide();		//10
			$("#secc_ingIndAdm").hide();	//11
			$("#secc_adm").hide();			//12
			$("#secc_admNeg").hide();		//13
			$("#secc_admRRHH").hide();		//14
			$("#secc_admFin").hide();		//15
			$("#secc_admTI").hide();		//16
			$("#secc_admVent").hide();		//17
			$("#secc_Crim").hide();			//18
			$("#secc_der").hide();			//19
			$("#secc_derInt").hide();		//20
			$("#secc_derEmp").hide();		//21
			$("#secc_mktPub").hide();		//22
			$("#secc_medDig").hide();		//23
			$("#secc_merc").hide();			//24
			$("#secc_negInt").hide();		//25
			$("#secc_ped").hide();			//26
			$("#secc_psicOrg").hide();		//27
			$("#secc_psic").hide();			//28

		break;
		//15
		case "Crim":
			$("#secc_Crim").show();			//1
			$("#secc_contFin").hide();		//2
			$("#secc_contPub").hide();		//3
			$("#secc_comCorp").hide();		//4
			$("#secc_comOrg").hide();		//5
			$("#secc_comDig").hide();		//6
			$("#secc_com").hide();			//7
			$("#secc_cpAdmPub").hide();		//8
			$("#secc_ArtDig").hide();		//9
			$("#secc_ingInd").hide();		//10
			$("#secc_ingSis").hide();		//11
			$("#secc_ingIndAdm").hide();	//12
			$("#secc_adm").hide();			//13
			$("#secc_admNeg").hide();		//14
			$("#secc_admRRHH").hide();		//15
			$("#secc_admFin").hide();		//16
			$("#secc_admTI").hide();		//17
			$("#secc_admVent").hide();		//18
			$("#secc_der").hide();			//19
			$("#secc_derInt").hide();		//20
			$("#secc_derEmp").hide();		//21
			$("#secc_mktPub").hide();		//22
			$("#secc_medDig").hide();		//23
			$("#secc_merc").hide();			//24
			$("#secc_negInt").hide();		//25
			$("#secc_ped").hide();			//26
			$("#secc_psicOrg").hide();		//27
			$("#secc_psic").hide();			//28
		break;
		//16
		case "der":
			$("#secc_der").show();			//1
			$("#secc_Crim").hide();			//2
			$("#secc_contFin").hide();		//3
			$("#secc_contPub").hide();		//4
			$("#secc_comCorp").hide();		//5
			$("#secc_comOrg").hide();		//6
			$("#secc_comDig").hide();		//7
			$("#secc_com").hide();			//8
			$("#secc_cpAdmPub").hide();		//9
			$("#secc_ArtDig").hide();		//10
			$("#secc_ingInd").hide();		//11
			$("#secc_ingSis").hide();		//12
			$("#secc_ingIndAdm").hide();	//13
			$("#secc_adm").hide();			//14
			$("#secc_admNeg").hide();		//15
			$("#secc_admRRHH").hide();		//16
			$("#secc_admFin").hide();		//17
			$("#secc_admTI").hide();		//18
			$("#secc_admVent").hide();		//19
			$("#secc_derInt").hide();		//20
			$("#secc_derEmp").hide();		//21
			$("#secc_mktPub").hide();		//22
			$("#secc_medDig").hide();		//23
			$("#secc_merc").hide();			//24
			$("#secc_negInt").hide();		//25
			$("#secc_ped").hide();			//26
			$("#secc_psicOrg").hide();		//27
			$("#secc_psic").hide();			//28
		break;
		//17
		case "derInt":
			$("#secc_derInt").show();		//1
			$("#secc_der").hide();			//2
			$("#secc_Crim").hide();			//3
			$("#secc_contFin").hide();		//4
			$("#secc_contPub").hide();		//5
			$("#secc_comCorp").hide();		//6
			$("#secc_comOrg").hide();		//7
			$("#secc_comDig").hide();		//8
			$("#secc_com").hide();			//9
			$("#secc_cpAdmPub").hide();		//10
			$("#secc_ArtDig").hide();		//11
			$("#secc_ingInd").hide();		//12
			$("#secc_ingSis").hide();		//13
			$("#secc_ingIndAdm").hide();	//14
			$("#secc_adm").hide();			//15
			$("#secc_admNeg").hide();		//16
			$("#secc_admRRHH").hide();		//17
			$("#secc_admFin").hide();		//18
			$("#secc_admTI").hide();		//19
			$("#secc_admVent").hide();		//20
			$("#secc_derEmp").hide();		//21
			$("#secc_mktPub").hide();		//22
			$("#secc_medDig").hide();		//23
			$("#secc_merc").hide();			//24
			$("#secc_negInt").hide();		//25
			$("#secc_ped").hide();			//26
			$("#secc_psicOrg").hide();		//27
			$("#secc_psic").hide();			//28
		break;
		//18
		case "derEmp":
			$("#secc_derEmp").show();		//1
			$("#secc_der").hide();			//2
			$("#secc_Crim").hide();			//3
			$("#secc_contFin").hide();		//4
			$("#secc_contPub").hide();		//5
			$("#secc_comCorp").hide();		//6
			$("#secc_comOrg").hide();		//7
			$("#secc_comDig").hide();		//8
			$("#secc_com").hide();			//9
			$("#secc_cpAdmPub").hide();		//10
			$("#secc_ArtDig").hide();		//11
			$("#secc_ingInd").hide();		//12
			$("#secc_ingSis").hide();		//13
			$("#secc_ingIndAdm").hide();	//14
			$("#secc_adm").hide();			//15
			$("#secc_admNeg").hide();		//16
			$("#secc_admRRHH").hide();		//17
			$("#secc_admFin").hide();		//18
			$("#secc_admTI").hide();		//19
			$("#secc_admVent").hide();		//20
			$("#secc_derInt").hide();		//21
			$("#secc_mktPub").hide();		//22
			$("#secc_medDig").hide();		//23
			$("#secc_merc").hide();			//24
			$("#secc_negInt").hide();		//25
			$("#secc_ped").hide();			//26
			$("#secc_psicOrg").hide();		//27
			$("#secc_psic").hide();			//28
		break;
		//19
		case "ingSis":
			$("#secc_ingSis").show();		//1
			$("#secc_ingIndAdm").hide();	//2
			$("#secc_ingInd").hide();		//3
			$("#secc_adm").hide();			//4
			$("#secc_admNeg").hide();		//5		
			$("#secc_admRRHH").hide();		//6
			$("#secc_admFin").hide();		//7
			$("#secc_admTI").hide();		//8
			$("#secc_admVent").hide();		//9
			$("#secc_ArtDig").hide();		//10
			$("#secc_cpAdmPub").hide();		//11
			$("#secc_com").hide();			//12
			$("#secc_comDig").hide();		//13
			$("#secc_comOrg").hide();		//14
			$("#secc_comCorp").hide();		//15
			$("#secc_contPub").hide();		//16
			$("#secc_contFin").hide();		//17
			$("#secc_Crim").hide();			//18
			$("#secc_der").hide();			//19
			$("#secc_derInt").hide();		//20
			$("#secc_derEmp").hide();		//21
			$("#secc_mktPub").hide();		//22
			$("#secc_medDig").hide();		//23
			$("#secc_merc").hide();			//24
			$("#secc_negInt").hide();		//25
			$("#secc_ped").hide();			//26
			$("#secc_psicOrg").hide();		//27
			$("#secc_psic").hide();			//28

		break;
		//20
		case "ingIndAdm":
			$("#secc_ingIndAdm").show();	//1
			$("#secc_ingSis").hide();		//2
			$("#secc_ingInd").hide();		//3
			$("#secc_adm").hide();			//4
			$("#secc_admNeg").hide();		//5
			$("#secc_admRRHH").hide();		//6
			$("#secc_admFin").hide();		//7
			$("#secc_admTI").hide();		//8
			$("#secc_admVent").hide();		//9
			$("#secc_ArtDig").hide();		//10
			$("#secc_cpAdmPub").hide();		//11
			$("#secc_com").hide();			//12
			$("#secc_comDig").hide();		//13
			$("#secc_comOrg").hide();		//14
			$("#secc_comCorp").hide();		//15
			$("#secc_contPub").hide();		//16
			$("#secc_contFin").hide();		//17
			$("#secc_Crim").hide();			//18
			$("#secc_der").hide();			//19
			$("#secc_derInt").hide();		//20
			$("#secc_derEmp").hide();		//21
			$("#secc_mktPub").hide();		//22
			$("#secc_medDig").hide();		//23
			$("#secc_merc").hide();			//24
			$("#secc_negInt").hide();		//25
			$("#secc_ped").hide();			//26
			$("#secc_psicOrg").hide();		//27
			$("#secc_psic").hide();			//28
		break;
		//21
		case "ingInd":
			$("#secc_ingInd").show();		//1
			$("#secc_ingSis").hide();		//2
			$("#secc_ingIndAdm").hide();	//3
			$("#secc_adm").hide();			//4
			$("#secc_admNeg").hide();		//5
			$("#secc_admRRHH").hide();		//6
			$("#secc_admFin").hide();		//6
			$("#secc_admTI").hide();		//8
			$("#secc_admVent").hide();		//9
			$("#secc_ArtDig").hide();		//10
			$("#secc_cpAdmPub").hide();		//11
			$("#secc_com").hide();			//12
			$("#secc_comDig").hide();		//13
			$("#secc_comOrg").hide();		//14
			$("#secc_comCorp").hide();		//15
			$("#secc_contPub").hide();		//16
			$("#secc_contFin").hide();		//17
			$("#secc_Crim").hide();			//18
			$("#secc_der").hide();			//19
			$("#secc_derInt").hide();		//20
			$("#secc_derInt").hide();		//20
			$("#secc_derEmp").hide();		//21
			$("#secc_mktPub").hide();		//22
			$("#secc_medDig").hide();		//23
			$("#secc_merc").hide();			//24
			$("#secc_negInt").hide();		//25
			$("#secc_ped").hide();			//26
			$("#secc_psicOrg").hide();		//27
			$("#secc_psic").hide();			//28
		break;
		//22
		case "mktPub":
			$("#secc_mktPub").show();		//1
			$("#secc_derEmp").hide();		//2
			$("#secc_derInt").hide();		//3
			$("#secc_der").hide();			//4
			$("#secc_Crim").hide();			//5
			$("#secc_contFin").hide();		//6
			$("#secc_contPub").hide();		//7
			$("#secc_comCorp").hide();		//8
			$("#secc_comOrg").hide();		//9
			$("#secc_comDig").hide();		//10
			$("#secc_com").hide();			//11
			$("#secc_cpAdmPub").hide();		//12
			$("#secc_ArtDig").hide();		//13
			$("#secc_ingInd").hide();		//14
			$("#secc_ingSis").hide();		//15
			$("#secc_ingIndAdm").hide();	//16
			$("#secc_adm").hide();			//17
			$("#secc_admNeg").hide();		//18
			$("#secc_admRRHH").hide();		//19
			$("#secc_admFin").hide();		//20
			$("#secc_admTI").hide();		//22
			$("#secc_admVent").hide();		//23
			$("#secc_medDig").hide();		//24
			$("#secc_merc").hide();			//24
			$("#secc_negInt").hide();		//25
			$("#secc_ped").hide();			//26
			$("#secc_psicOrg").hide();		//27
			$("#secc_psic").hide();			//28
		break;
		//23
		case "medDig":
			$("#secc_medDig").show();		//1
			$("#secc_mktPub").hide();		//2
			$("#secc_derEmp").hide();		//3
			$("#secc_derInt").hide();		//4
			$("#secc_der").hide();			//5
			$("#secc_Crim").hide();			//6
			$("#secc_contFin").hide();		//7
			$("#secc_contPub").hide();		//8
			$("#secc_comCorp").hide();		//9
			$("#secc_comOrg").hide();		//20
			$("#secc_comDig").hide();		//10
			$("#secc_com").hide();			//11
			$("#secc_cpAdmPub").hide();		//12
			$("#secc_ArtDig").hide();		//13
			$("#secc_ingInd").hide();		//14
			$("#secc_ingSis").hide();		//15
			$("#secc_ingIndAdm").hide();	//16
			$("#secc_adm").hide();			//17
			$("#secc_admNeg").hide();		//18
			$("#secc_admRRHH").hide();		//19
			$("#secc_admFin").hide();		//20
			$("#secc_admTI").hide();		//22
			$("#secc_admVent").hide();		//23
			$("#secc_merc").hide();			//24
			$("#secc_negInt").hide();		//25
			$("#secc_ped").hide();			//26
			$("#secc_psicOrg").hide();		//27
			$("#secc_psic").hide();			//28
		break;
		//24
		case "merc":
			$("#secc_merc").show();			//1
			$("#secc_medDig").hide();		//2
			$("#secc_mktPub").hide();		//3
			$("#secc_derEmp").hide();		//4
			$("#secc_derInt").hide();		//5
			$("#secc_der").hide();			//6
			$("#secc_Crim").hide();			//7
			$("#secc_contFin").hide();		//8
			$("#secc_contPub").hide();		//9
			$("#secc_comCorp").hide();		//10
			$("#secc_comOrg").hide();		//11
			$("#secc_comDig").hide();		//12
			$("#secc_com").hide();			//13
			$("#secc_cpAdmPub").hide();		//14
			$("#secc_ArtDig").hide();		//15
			$("#secc_ingInd").hide();		//16
			$("#secc_ingSis").hide();		//17
			$("#secc_ingIndAdm").hide();	//18
			$("#secc_adm").hide();			//19
			$("#secc_admNeg").hide();		//20
			$("#secc_admRRHH").hide();		//21
			$("#secc_admFin").hide();		//22
			$("#secc_admTI").hide();		//23
			$("#secc_admVent").hide();		//24
			$("#secc_negInt").hide();		//25
			$("#secc_ped").hide();			//26
			$("#secc_psicOrg").hide();		//27
			$("#secc_psic").hide();			//28
		break;
		//25
		case "negInt":
			$("#secc_negInt").show();		//1
			$("#secc_medDig").hide();		//2
			$("#secc_mktPub").hide();		//3
			$("#secc_derEmp").hide();		//4
			$("#secc_derInt").hide();		//5
			$("#secc_der").hide();			//6
			$("#secc_Crim").hide();			//7
			$("#secc_contFin").hide();		//8
			$("#secc_contPub").hide();		//9
			$("#secc_comCorp").hide();		//10
			$("#secc_comOrg").hide();		//11
			$("#secc_comDig").hide();		//12
			$("#secc_com").hide();			//13
			$("#secc_cpAdmPub").hide();		//14
			$("#secc_ArtDig").hide();		//15
			$("#secc_ingInd").hide();		//16
			$("#secc_ingSis").hide();		//17
			$("#secc_ingIndAdm").hide();	//18
			$("#secc_adm").hide();			//19
			$("#secc_admNeg").hide();		//20
			$("#secc_admRRHH").hide();		//21
			$("#secc_admFin").hide();		//22
			$("#secc_admTI").hide();		//23
			$("#secc_admVent").hide();		//24
			$("#secc_merc").hide();			//25
			$("#secc_ped").hide();			//26
			$("#secc_psicOrg").hide();		//27
			$("#secc_psic").hide();			//28
		break;
		//26
		case "ped":
			$("#secc_ped").show();			//1
			$("#secc_medDig").hide();		//2
			$("#secc_mktPub").hide();		//3
			$("#secc_derEmp").hide();		//4
			$("#secc_derInt").hide();		//5
			$("#secc_der").hide();			//6
			$("#secc_Crim").hide();			//7
			$("#secc_contFin").hide();		//8
			$("#secc_contPub").hide();		//9
			$("#secc_comCorp").hide();		//10
			$("#secc_comOrg").hide();		//11
			$("#secc_comDig").hide();		//12
			$("#secc_com").hide();			//13
			$("#secc_cpAdmPub").hide();		//14
			$("#secc_ArtDig").hide();		//15
			$("#secc_ingInd").hide();		//16
			$("#secc_ingSis").hide();		//17
			$("#secc_ingIndAdm").hide();	//18
			$("#secc_adm").hide();			//19
			$("#secc_admNeg").hide();		//20
			$("#secc_admRRHH").hide();		//21
			$("#secc_admFin").hide();		//22
			$("#secc_admTI").hide();		//23
			$("#secc_admVent").hide();		//24
			$("#secc_merc").hide();			//25
			$("#secc_negInt").hide();		//26
			$("#secc_psicOrg").hide();		//27
			$("#secc_psic").hide();			//28
		break;
		//27
		case "psicOrg":
			$("#secc_psicOrg").show();		//1
			$("#secc_medDig").hide();		//2
			$("#secc_mktPub").hide();		//3
			$("#secc_derEmp").hide();		//4
			$("#secc_derInt").hide();		//5
			$("#secc_der").hide();			//6
			$("#secc_Crim").hide();			//7
			$("#secc_contFin").hide();		//8
			$("#secc_contPub").hide();		//9
			$("#secc_comCorp").hide();		//10
			$("#secc_comOrg").hide();		//11
			$("#secc_comDig").hide();		//12
			$("#secc_com").hide();			//13
			$("#secc_cpAdmPub").hide();		//14
			$("#secc_ArtDig").hide();		//15
			$("#secc_ingInd").hide();		//16
			$("#secc_ingSis").hide();		//17
			$("#secc_ingIndAdm").hide();	//18
			$("#secc_adm").hide();			//19
			$("#secc_admNeg").hide();		//20
			$("#secc_admRRHH").hide();		//21
			$("#secc_admFin").hide();		//22
			$("#secc_admTI").hide();		//23
			$("#secc_admVent").hide();		//24
			$("#secc_merc").hide();			//25
			$("#secc_negInt").hide();		//26
			$("#secc_ped").hide();			//27
			$("#secc_psic").hide();			//28
		break;
		//28
		case "psic":
			$("#secc_psic").show();			//1
			$("#secc_medDig").hide();		//2
			$("#secc_mktPub").hide();		//3
			$("#secc_derEmp").hide();		//4
			$("#secc_derInt").hide();		//5
			$("#secc_der").hide();			//6
			$("#secc_Crim").hide();			//7
			$("#secc_contFin").hide();		//8
			$("#secc_contPub").hide();		//9
			$("#secc_comCorp").hide();		//10
			$("#secc_comOrg").hide();		//11
			$("#secc_comDig").hide();		//12
			$("#secc_com").hide();			//13
			$("#secc_cpAdmPub").hide();		//14
			$("#secc_ArtDig").hide();		//15
			$("#secc_ingInd").hide();		//16
			$("#secc_ingSis").hide();		//17
			$("#secc_ingIndAdm").hide();	//18
			$("#secc_adm").hide();			//19
			$("#secc_admNeg").hide();		//20
			$("#secc_admRRHH").hide();		//21
			$("#secc_admFin").hide();		//22
			$("#secc_admTI").hide();		//23
			$("#secc_admVent").hide();		//24
			$("#secc_merc").hide();			//25
			$("#secc_negInt").hide();		//26
			$("#secc_ped").hide();			//27
			$("#secc_psicOrg").hide();		//28
		break;



	}
}
