function readMarkdown(div, url) {
    fetch(url)
        .then(response => {

            return response.text()
        })
        .then(text => {
            document.getElementById(div).innerHTML =
                marked.parse(text);
        })
}
