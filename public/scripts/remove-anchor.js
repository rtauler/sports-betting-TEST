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
    //initial unwrap of seo url
    unWrapAllItems();

    //in case user clicks on button view more, unwrap the newly created
    var retry_click = function() {
            //fake delay to give time allow removoving the anchor of new elements
            setTimeout(function() {
                unWrapAllItems();
            }, 0);

        }
        //check on button to wait for creation
    document.getElementById('view_all').onclick = retry_click;
    document.getElementById('sort').onclick = retry_click;