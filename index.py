#Python here
normtext = input("What do you want to encode?: ")
ci1 = 0
ci2 = 0
alstr = "abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz "
#first letters cipher encoding
for i in range(27):
    if normtext[0] == alstr[i]:
        ci1 = i+1
for i in range(27):
    if normtext[1] == alstr[i]:
        ci2 = i+1
encode = -(ci1-ci2)
#encoding string
finstr = []
finstr.append(normtext[0])
finstr.append(normtext[1])
for r in range(len(normtext)):
    for f in range(26):
        if normtext[r] == alstr[f]:
            finstr.append(alstr[f+encode])
print(finstr)
finstr.remove(finstr[2])
finstr.remove(finstr[2])
print(finstr)
#print final string
for h in range(len(finstr)):
    print(str(finstr[h]))