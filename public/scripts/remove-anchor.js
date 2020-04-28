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
    function findElements() {
        var elements = document.querySelectorAll('#seo_url');
        return elements;
    }

    // iterate through all of them and unwrap them
    function unWrapAllItems() {
        var elements = findElements();
        for (var i = 0; i < elements.length; i++) {
            console.log(elements[i]);
            unwrap(elements[i]);
        }
    }
    unWrapAllItems();

    var retry_click = function() {
        var delayInMilliseconds = 10; //1 second
        setTimeout(function() {
            unWrapAllItems();
        }, delayInMilliseconds);
    }
    document.getElementById('view_all').onclick = retry_click;