var ed = document.getElementById('ed').value
var normtext = document.getElementById('normtext').value
if (ed == "encode" || ed == "Encode" || ed == "e" || ed == "E"){
    var ci1 = 0
    var ci2 = 0
    const alstr = "abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz "
    //first letters cipher encoding
    for (let i = 0; i < 28; i++) {
        ci1 = i+1
    }
    for (let i = 0; i < 28; i++) {
        ci2 = i+1
    }
    alert(ci1)
    alert(ci2)
    var encode = -(ci1-ci2)
    print(encode)
}