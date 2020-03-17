function imageLazyload() {
    var images = document.getElementsByClassName('js-image-lazyloading')
    for (var i = 0; i < images.length; i++) {
        var realImage = document.createElement('img')
        var dataset = images[i].dataset
        var keys = Object.keys(dataset)

        for (var j = 0; j < keys.length; j++) {
            realImage.setAttribute([keys[j]], dataset[keys[j]])
        }
        insertAfter(realImage, images[i])
    }
}

function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling)
}

imageLazyload()
