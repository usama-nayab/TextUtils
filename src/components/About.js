import React from 'react'

export default function About(props) {

    
    return (
        <div className="container " style={props.enableMode} >
            <h1>About TextUtils</h1>
            <div className="accordion my-3" id="accordionExample">
                <div className="accordion-item" style={props.enableMode}>
                    <h2 className="accordion-header" id="headingOne">
                        <button style={props.enableMode} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                         <h4>Welcome To TextUtils </h4>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        A very handy and efficient online text tool having attractive user interface where you can change between lower case and upper case letters and do differnet manipulations as you want. Explore the options below:
                        </div>
                    </div>
                </div>
                <div className="accordion-item"style={props.enableMode}>
                    <h2 className="accordion-header" id="headingOne">
                        <button style={props.enableMode} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                          <h4> Upper Case </h4>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        The upper case transformer will take any text that you have and will generate all the letters into upper case ones. It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters).
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={props.enableMode}>
                    <h2 className="accordion-header" id="headingOne">
                        <button style={props.enableMode} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            <h4>Lower Case</h4>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        If you are wondering how to uncapitalize text, this is exactly what the lower case text converter will allow you to do - it transforms all the letters in your text into lowercase letters. Simply copy the text that you need generating into lower case and paste the text into the box above and select the <strong> Convert To Lower Case </strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={props.enableMode}>
                    <h2 className="accordion-header" id="headingOne">
                        <button style={props.enableMode} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            <h4>Clear Text</h4>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        if you want to remove all the written text just click on <strong>Clear Text</strong> button.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={props.enableMode}>
                    <h2 className="accordion-header" id="headingOne">
                        <button style={props.enableMode} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            <h4>Copy Text</h4>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Want to copy text? so that you can use it some where? just click on <strong>Clear Text</strong> button.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={props.enableMode}>
                    <h2 className="accordion-header" id="headingOne">
                        <button style={props.enableMode} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            <h4>Remove Extra Spaces</h4>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        sometimes you have text with some extra spaces that decrease readability. so for increasing readability just click on <strong>Remove Extra Spaces</strong> button 
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}