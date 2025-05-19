/*
    HTML CODE

    <a id="modal-open" onclick="modal()">Click here</a>

    <div id="modal">
        <h1>My modal</h1>
        <p>Modal description</p>
        <a id="modal-close" onclick="modalClose()">X</a>
    </div>
*/

function modal() {
    var modal = document.getElementById('modal')
    var style = modal.style

    if (!style.display || style.display === 'none') {
        style.display = 'inline-block'
    } else {
        style.display = 'none'
    }

}

function modalClose() {
    var button = document.getElementById("modal-close")
    var parent = button.parentElement

    parent.style.display = 'none'
}

function modalOptions (opt) {
    alert(opt)
}