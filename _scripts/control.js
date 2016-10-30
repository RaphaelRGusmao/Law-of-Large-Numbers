/* author: Raphael R. Gusmão */

// Botao Visualizar
function visualizar ()
{
    var faces = $("#numFaces")[0];
    var lancamentos = $("#numLancamentos")[0];
    var velocidade = $("#numVelocidade")[0];

    geraGraficos(faces.value, lancamentos.value, velocidade.value);
}

// Numero de faces
$("#sldFaces").bind("input", function ()
{
    $("#numFaces")[0].value = this.value;
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
    $("#numLancamentos")[0].value = this.value;
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
    $("#numVelocidade")[0].value = this.value;
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