    //create function to unwrap without using jquery
    function unwrap(wrapper) {
        // place childNodes in document fragment
        var docFrag = document.createDocumentFragment();
        while (wrapper.firstChild) {
            var child = wrapper.removeChild(wrapper.firstChild);
            docFrag.appendChild(child);
        }
        // replace wrapper with document fragment
        wrapper.parentNode.replaceChild(docFrag, wrapper);
    }
    // create array of elements that have seo_url
    var elements = document.querySelectorAll('#seo_url');
    // iterate through all of them and unwrap them
    for (var i = 0; i < elements.length; i++) {
        console.log(elements[i]);
        unwrap(elements[i]);
    }