function SendDataToGoogleSheets() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycby_J-BbkVwxwH0-7fNHyblMSLLKTKxCSMF7tsJvqNAhxCNnRTrZrrzCuSohaMXHJVmADQ/exec'

    let fd = getData(false)
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const Time = (hours+ ":"+minutes);
  console.log(Time)
  fd.append("Hour", Time);

    for (const [key, value] of fd) {
      console.log(`${key}: ${value}\n`);
    }

    fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: fd })
      // .then(response => { 
            // alert('Success!', response) })
      // .catch(error => {
            // alert('Error!', error.message)})
}
