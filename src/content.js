import React from "react";
import Footer from "./Footer";
import Form from "./form";


function Content() {
    return (
        <React.Fragment>
            <div class='content'>
                <h1><span class='green title'>Publish your podcasts </span><span class='title white'>everywhere.</span></h1>
                <p>Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify,
                    Apple Podcasts, Google Podcasts, Pocket Casts and more!</p>
                <Form />
                <Footer />

            </div>

        </React.Fragment>
    )
}

export default Content;