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
  
  
  
  
  