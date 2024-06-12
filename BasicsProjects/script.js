const colorChanger = document.querySelectorAll('.button')
const getBodyData = document.querySelector('body')

colorChanger.forEach(function (buttonClicked) {
    buttonClicked.addEventListener('click', function (e) {
        const getClickedData = e.target.id;
        getBodyData.style.backgroundColor = getClickedData;
    })
});

const rangeForm = document.querySelector('form')
rangeForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const heightVal = parseInt(document.querySelector('#height').value)
    const weightVal = parseInt(document.querySelector('#weight').value)
    const resultsVal = document.querySelector('#results')

    if (heightVal === '' || heightVal < 0 || isNaN(heightVal)) {
        resultsVal.innerHTML = "Please Enter valid Height value"
    } else if (weightVal === '' || weightVal < 0 || isNaN(weightVal)) {
        resultsVal.innerHTML = "Please Enter valid Weight value"
    } else {
        const detailsResults = (weightVal / ((heightVal * heightVal) / 10000)).toFixed(2)
        if (detailsResults < 18.6) {
            statusValueBMI = "Under Weight"
        } else if (detailsResults < 24.9) {
            statusValueBMI = "Normal Range"
        } else if (detailsResults > 24.9) {
            statusValueBMI = "Over Weight"
        }
        console.log(detailsResults);
        resultsVal.innerHTML = `<span>${detailsResults} <br/><span> Weight is: ${statusValueBMI}</span></span>`
    }
})