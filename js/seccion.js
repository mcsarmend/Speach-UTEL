$(document).ready(function(){
	Ocultar_Secciones();
	var estado = false;

	$('#btn-toggle-Ad').on('click',function(){
		$('.seccionToggle').slideToggle();
		if (estado == true) {
			
			estado = false;
		} else {
			$("#secc_adicionales").show();
			estado = true;
		}
	});
});

function Ocultar_Secciones(){
	$("#secc_adicionales").hide();
}
