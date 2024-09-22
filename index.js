function conveter(type, val) {
    if (type===1) {
        results = (val * 2.20507);
        console.log(results);   
    }
    if (type===2) {
        results = (val/2.20507);
        console.log(results);   
    }
    if (type===3) {
        results = (val * 0.02834375);
        console.log(results);   
    }
    if (type===4) {
        results = (val / 0.02834375);
        console.log(results);   
    }
    if (type===5) {
        results = (val * 16);
        console.log(results);   
    }
    if (type===6) {
        results = (val / 16);
        console.log(results);   
    }
}

conveter(1,50)


<script>
        document.addEventListener('DOMContentLoaded', function() {
            // Create the <h1> element
            const header = document.createElement('h1');
            header.textContent = 'Your Name Here';

            // Create the <p> element
            const paragraph = document.createElement('p');
            paragraph.textContent = 'Matric No: Your Matric No Here, Mother\'s Name: Your Mother\'s Name Here';

            // Get the <div> element by its id
            const infoDiv = document.getElementById('info');

            // Append the <h1> and <p> to the <div>
            infoDiv.appendChild(header);
            infoDiv.appendChild(paragraph);
        });