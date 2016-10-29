/* author: Raphael R. Gusmão */

// Dados do Control Panel
var faces = $("#numFaces")[0];
var lancamentos = $("#numLancamentos")[0];
var velocidade = $("#numVelocidade")[0];

// Botao Visualizar
function visualizar ()
{
    console.log(faces.value);
    console.log(lancamentos.value);
    console.log(velocidade.value);
}

// Numero de faces
$("#sldFaces").bind("input", function ()
{
    faces.value = this.value;
});
$("#numFaces").bind("input", function ()
{
    if (this.value > 20) {
        this.value = 20;
    } else if (this.value < 1) {
        this.value = 1;
    }
    $("#sldFaces")[0].MaterialSlider.change(this.value);
});

// Numero de lancamentos
$("#sldLancamentos").bind("input", function ()
{
    lancamentos.value = this.value;
});
$("#numLancamentos").bind("input", function ()
{
    if (this.value > 1000) {
        this.value = 1000;
    } else if (this.value < 1) {
        this.value = 1;
    }
    $("#sldLancamentos")[0].MaterialSlider.change(this.value);
});

// Velocidade da animacao
$("#sldVelocidade").bind("input", function ()
{
    velocidade.value = this.value;
});
$("#numVelocidade").bind("input", function ()
{    
    if (this.value > 2) {
        this.value = 2;
    } else if (this.value < 0.1) {
        this.value = 0.1;
    }
    $("#sldVelocidade")[0].MaterialSlider.change(this.value);
});