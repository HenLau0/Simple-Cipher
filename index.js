function translate() {
    var ed = document.getElementById('ed').value
    var normtext = document.getElementById('normtext').value
    const alstr = "abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz ";
    var ci1 = 0;
    var ci2 = 0;
    if (ed == "encode" || ed == "Encode" || ed == "e" || ed == "E"){
        alert("working")
        //first letters cipher encoding
        for (let i = -1; i < 28; i++) {
            if (normtext[0] == alstr[i]) {
                ci1 = i+1;
            }
        }
        for (let t = -1; t < 28; t++) {
            if (normtext[1] == alstr[t]) {
                ci2 = t+1;
                }
        }
        if (normtext[0] == "a" || normtext[0] == "A"){
            ci1 = 1
        }
        var encode = (ci2-ci1);
        alert(encode)
        //encoding string
        var finstr = [];
        finstr.push(normtext[0]);
        finstr.push(normtext[1]);
        alert(finstr)
        for (let r = -1; r < (length(normtext)+1); r++) {
            for (let f = -1; f < 27; f++) {
                if (normtext[r] == alstr[f]) {
                    finstr.push(alstr[(f+encode)]);
                }
            }
        }
        alert(finstr)
        /*for r in range(len(normtext)):
        for f in range(26):
            if normtext[r] == alstr[f]:
                finstr.append(alstr[f+encode])*/
}
}
document.getElementById('cipher-details').addEventListener("submit", function(e) {
    // This prevents the default form submission function from happening (HTML default)
    e.preventDefault();

    // Run your function
    translate();
  }
);