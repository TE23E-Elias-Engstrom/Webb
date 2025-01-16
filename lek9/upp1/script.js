function LäggTillILista()
{
    let input = document.getElementById("AttGöra").value;
    let ul = document.getElementById("lista");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input));
    ul.appendChild(li);
}