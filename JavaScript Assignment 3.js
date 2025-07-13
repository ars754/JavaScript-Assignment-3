//Question-1
function countCharacters(S){
    let B=[0,0]
    for(let i=0;i<S.length;i++){
        if(S[i]==='A'){
           B[0]++ 
        }
        else if(S[i]==='D'){
            B[1]++
        }
    }
    return B
}
let S="AbaDdAD"
let result=countCharacters(S);
console.log(result[0],result[1]);
//Question-2
function CountHead(S)
{
    let result=''
    let counted=''
    for(let i=0;i<S.length;i++){
        let ch=S[i]
        let count=0
    
    if(counted.includes(ch)){
        continue;
    }   
    for(let j=0;j<S.length;j++){
        if(S[j]===ch){
            count++
        }
    }
    if(count>1){
        result +=ch+count
    }
    counted +=ch
    }
    return result;
}
let M="prepbytes"
let output=CountHead(M)
console.log(output);
//Question-3
function Count_Vowel(S)
{
    let count=0;
    let vowels="AEIOUaeiou"
    for(let i=0;i<S.length;i++){
        if(vowels.includes(S[i])){
            count++
        }
    }
    return count
}
let A="Prepbytes"
let output1=Count_Vowel(A)
console.log(output1);
//Question-4
function Concatenate_Strings(S1,S2)
{
    let S3=S1+S2
    return S3
}
let S1="Prep"
let S2="bytes"
let result1=Concatenate_Strings(S1,S2)
console.log(result1);
//Question-5
function findLength(S)
{
    let count=0
    while(S[count]!==undefined){
        count++
    }
    return count
}
let E="Manya"
let result2=findLength(E)
console.log(result2);
//Question-6
function Game_Winner(S)
{
    let aCount=0
    let dCount=0
    for(let i=0;i<S.length;i++){
        if(S[i]==='A'){
            aCount++
        }
        else{
            dCount++
        }
    }
    if(aCount>dCount){
        return "Aditya"
    }
    else if(dCount>aCount){
        return "Danish"
    }
    else{
        return "Draw"
    }
}
let S3="ADDAAADDDDD"
console.log(Game_Winner(S3))
let S4="ADDAAADD"
console.log(Game_Winner(S4));
//Question-7
function joinStrings(S,P)
{
    return S+P
}
let T="Prepbytes"
let R="Technologies"
let result3=joinStrings(T,R)
console.log(result3);
//Question-8
function Plain_Check(S)
{
    let reversed=''
    for(let i=S.length-1;i>=0;i--){
        reversed+=S[i]
    }
    if(S===reversed){
        return "True"
    }
    else{
        return "False"
    }
}
let input1="Naman"
console.log(Plain_Check(input1));
let input2="naman"
console.log(Plain_Check(input2));
//Question-9
function Reverse_String(S)
{
    let reversed=''
    for(let i=S.length-1;i>=0;i--){
        reversed+=S[i]
    }
    return reversed
}
let H="I am Manya Thapliyal"
let result4=Reverse_String(H)
console.log(result4);
//Question-10
function String_Match(S1,S2){
    if(S1===S2){
        return "Yes"
    }
    else{
        return"No"
    }
}
let J="Prepbytes"
let K="Prepbytes"
let result5=String_Match(J,K)
console.log(result5);
//Question-11
function Replace(S,pattern,text)
{
    return S.replace(pattern,text)
}
let G="Hi, I am You."
let pattern="You"
let text="Prepbytes"
let result6=Replace(G,pattern,text)
console.log(result6);
//Question-12
function Split_the_String(S){
    return S.split(" ").join("\n")
}
let F="I am Manya Thapliyal"
let result7=Split_the_String(F)
console.log(result7);
//Question-13
function Count_Vowels(S)
{
    let count=0
    let vowels="AEIOUaeiou"
    for(let i=0;i<S.length;i++){
        if(vowels.includes(S[i])){
            count++
        }
    }
    return count
}
function Count_Consonants(S)
{
    let count=0
    let vowels="AEIOUaeiou"
    for(let i=0;i<S.length;i++){
        let ch=S[i]
        if((ch>='A'&&ch<='Z')||(ch>='a'&&ch<='z')){
            if(!vowels.includes(ch)){
                count++
            }
        }
    }
    return count
}
let N="Prepbytes"
let vowels=Count_Vowels(N)
let consonants=Count_Consonants(N)
console.log(vowels,consonants);