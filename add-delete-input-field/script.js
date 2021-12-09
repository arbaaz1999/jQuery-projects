$("#addBtn").click(function() {
    var content = `<div>
    <input type="text">
    <button class="delete-row">-</button>
    </div>`
    $(".add-row").append(content)
})

$('body').on("click", ".delete-row", function() {
    $(this).parent().remove()
})