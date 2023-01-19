function saveNote() {
    var input = document.getElementById("note-input").value;
    var output = document.getElementById("note-output");
    output.innerHTML += "<p>" + input + "</p>";
}
  
function clearNotes() {
  var output = document.getElementById("note-output");
  output.innerHTML = "";
}

function downloadNotes() {
  var notes = document.getElementById("note-output").innerText;
  var file = new Blob([notes], {type: 'text/plain'});

  var a = document.createElement("a"),
      url = URL.createObjectURL(file);
  a.href = url;
  a.download = "notes.txt";
  document.body.appendChild(a);
  a.click();
  setTimeout(function() {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);  
  }, 0); 
}
  
/*
EXPLICAÇÃO DA LÓGICA

A função saveNote() é responsável por salvar uma nota digitada pelo usuário. Ela é chamada quando o usuário clica no botão "Salvar Nota".

A função começa definindo duas variáveis:

input: que armazena o valor digitado no campo de texto com id "note-input"
output: que armazena a referência do elemento com id "note-output"
Em seguida, a função adiciona o valor armazenado na variável input dentro de uma tag <p> e a adiciona no final do conteúdo do elemento armazenado na variável output. Isso é feito usando o método innerHTML +=, que adiciona conteúdo HTML ao conteúdo já existente.

Exemplo: Se o usuário digitar "Nota 1" e clicar no botão "Salvar Nota", a função adicionará o seguinte código HTML no final do conteúdo do elemento com id "note-output"  
<p>Nota 1</p>

A função clearNotes() é responsável por limpar todas as notas salvas. Ela é chamada quando o usuário clica no botão "Limpar Notas".

A função começa definindo uma variável output que armazena a referência do elemento com id "note-output".

Em seguida, a função limpa o conteúdo desse elemento, atribuindo uma string vazia ao seu atributo innerHTML. Isso remove todo o conteúdo HTML dentro do elemento, limpando todas as notas salvas.

Exemplo: Se o usuário tiver salvado as notas "Nota 1" e "Nota 2" e clicar no botão "Limpar Notas", a função limpará todo o conteúdo HTML dentro do elemento com id "note-output", fazendo com que as notas "Nota 1" e "Nota 2" desapareçam da tela.

A função downloadNotes() é responsável por fazer o download das notas salvas em um arquivo de texto. Ela é chamada quando o usuário clica no botão "Download de Notas".

A função começa definindo uma variável notes que armazena o conteúdo de texto do elemento com id "note-output". Isso é feito usando o atributo innerText que retorna o conteúdo de texto dentro do elemento, sem as tags HTML.

Em seguida, a função cria um novo objeto Blob com o conteúdo das notas e o tipo de arquivo 'text/plain'.

Depois, cria-se um novo elemento "a" e a partir dele é criado uma URL para o arquivo Blob criado anteriormente, essa URL é atribuida ao atributo href do elemento criado. A função define o nome do arquivo como "notes.txt" e adiciona o elemento ao corpo da página.

Por fim, é simulado um click no elemento "a" para iniciar o download e logo em seguida, é removido o elemento "a" da página e a URL é revogada.

Assim, o usuário pode baixar um arquivo de texto com as notas salvas no aplicativo.

*/ 