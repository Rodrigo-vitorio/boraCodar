document.getElementById('toggleButton').addEventListener('click', function() {
    var element = document.getElementById('element');
    var gifElement = document.getElementById('gifElement');

    element.style.display = 'none';
    gifElement.style.display = 'block';
});

document.getElementById('toggleButton360').addEventListener('click', function() {
    var element = document.getElementById('element');
    var gifElement = document.getElementById('gifElement');

    element.style.display = 'block';
    gifElement.style.display = 'none';
});