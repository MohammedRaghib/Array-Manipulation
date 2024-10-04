function manipulateArray() {
    const arrayInput = document.getElementById("arrayInput").value;
    const parsedArray = arrayInput.split(" ");
    parsedArray.map(Number);
    const doubledArr = parsedArray.map(x => x * 2);
    const filteredArr = doubledArr.filter(x => x > 10);
    const sumOfRemaining = filteredArr.reduce((acc, x) => acc + x, 0);
    document.getElementById("result").textContent = "The final sum is: " + sumOfRemaining;
}