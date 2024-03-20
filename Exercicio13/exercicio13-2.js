let frase = window.prompt("Digite sua frase: ");
document.write(frase+"<br>");
if (frase !== null && frase !== "") {
    for (let index = 0; index < frase.length; index++) {
        document.write("<br>Caractere na posição " +index+ " : " + frase.charAt(index));
    }
    document.writeln("<br><br>Primeiro caractere: " + frase.charAt(0) + "<br />");
    document.write("Último caractere: " + frase.charAt(frase.length-1));
} else {
    document.writeln("Conteudo inválido");
}

hoje = new Date();
document.write("<br>Data completa:" + hoje );
document.write("<br>Dia de hoje:" + hoje.getDate());
document.write("<br>Mês de hoje (0 a 11): " + hoje.getMonth()); 
document.write("<br>Ano de hoje:" + hoje.getFullYear());
document.write("<br>Apenas o dia da semana :" + hoje.getDay() );
document.write("<br>Apenas hora e minuto : " + hoje.getHours() + ":" + hoje.getMinutes() );