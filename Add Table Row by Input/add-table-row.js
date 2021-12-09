/* $("#btnAdd").click(function() {
    var addContent = `<input type="text"></input><br>`
    $("#inputDiv").append(addContent)
}) */

$("#save").click(function() {
    var name = $("#name").val()
    var age = $("#age").val()
    var rowContent = `<tr>
    <td>${name}</td>
    <td>${age}</td
    </tr>`
    $("#body").append(rowContent)
    $("#name").val('')
    $("#age").val('')
})