console.log("Hello!")



 let bigMacUS= 5.65 
 let bigMacNorway= 57
 let indexOfMac= bigMacNorway/bigMacUS
 let DollarCompareToNorwayKron= 8.72
 let totalIndex= ((indexOfMac-DollarCompareToNorwayKron)/DollarCompareToNorwayKron)*100
 console.log("Norway Krona is Overvalued " + totalIndex)



 let bigMacUSOne= 5.65 
 let bigMacSwiss= 6.5
 let indexOfMacOne= bigMacSwiss/bigMacUSOne
 let DollarCompareToSwissFrang= 0.93
 let totalIndexOne= ((indexOfMacOne-DollarCompareToSwissFrang)/DollarCompareToSwissFrang)*100
 console.log("Swiss Frang is Overvalued " + totalIndexOne)


 
 let bigMacUSTwo= 5.65 
 let bigMacSweden= 54
 let indexOfMacTwo= bigMacSweden/bigMacUSTwo
 let DollarCompareToSwedenKron= 8.8
 let totalIndexTwo= ((indexOfMacTwo-DollarCompareToSwedenKron)/DollarCompareToSwedenKron)*100
 console.log("Sweden Kron is Overvalued " + totalIndexTwo)


 let bigMacUSThree= 5.65 
 let bigMacArgentina= 380
 let indexOfMacThree= bigMacArgentina/bigMacUSThree
 let DollarCompareToArgentinaPesos= 100.3
 let totalIndexThree= ((indexOfMacThree-DollarCompareToArgentinaPesos)/DollarCompareToArgentinaPesos)*100
 console.log("Argentina Pesos is Undervalued " + totalIndexThree)

  console.log  (totalIndexOne>totalIndexThree)
  console.log  (totalIndex>totalIndexOne)
  console.log (totalIndex===totalIndexOne)
  console.log(totalIndexThree<totalIndexTwo)