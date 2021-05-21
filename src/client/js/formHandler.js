function handleSubmit(event) {

  // Prevents the form from behaving in a typical behavior because we want to 
  // control the action of the form for example to validate the link provided by the user
  event.preventDefault();

  let formText = document.getElementById("url").value;

  // If the link is properly structured the function continues to receive the value received 
  // from the user and selects the appropriate field according to its ID and replaces the 
  // content by using innerHTML.

  if (Client.isValidUrl(formText)) {
    console.log("::: Form Submitted :::");

    postData("http://localhost:8081/api", { url: formText }).then(function (
      res
    ) {
      document.getElementById("polarity").innerHTML =
        "Polarity: " + getPolarity(res.score_tag);
      document.getElementById(
        "agreement"
      ).innerHTML = `Agreement: ${res.agreement}`;
      document.getElementById(
        "subjectivity"
      ).innerHTML = `Subjectivity: ${res.subjectivity}`;
      document.getElementById(
        "confidence"
      ).innerHTML = `Confidence: ${res.confidence}`;
      document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
    });
  } else {
    alert("The URL should be in a format http://www...");
  }
}

// A simple asynchronous function that sends a request to api according to 
// the parameters in the documentation of the meaning cloud requested

const postData = async (url = "", data = {}) => {
  console.log("Analyzing:", data);
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    console.log("Data received:", newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

// I wanted to build a function that checks the polarity but does not use the if else block... 
// because there are a lot of parameters it does not look good and it is difficult to understand the logic. 
// I therefore chose to use a  object literal that extracts the polarity according to what is obtained.

function getPolarity(score) {
  let polarity = {
    "P+": "strong positive",
    P: "positive",
    NEW: "neutral",
    N: "negative",
    "N+": "strong negative",
    NONE: "no sentiment",
  };
  return polarity[score];
}

export { handleSubmit };
export { getPolarity };
