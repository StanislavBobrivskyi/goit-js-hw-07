import { galleryItems } from "./gallery-items.js";
// Change code below this line

import * as basicLightbox from "basiclightbox";

const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`);

instance.show();
console.log(galleryItems);
