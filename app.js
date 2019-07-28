// DIVERSITY CONTROLLER
var diversityController = (function(){

  var Gender = function(id,seniority,description,descriptionValue,value){
    this.id = id;
    this.seniority = seniority;
    this.description = description;
    this.descriptionValue = descriptionValue;
    this.value = value;
    this.percentage = -1;
  };

  Gender.prototype.calcPercentage = function(category,seniorTotals,juniorTotals) {
    if (this.seniority === 'senior' && seniorTotals > 0) {
      this.percentage = Math.round(Math.min(this.value/(seniorTotals * .7),1)*100);
      
  }else if (this.seniority === 'junior' && juniorTotals > 0){

    this.percentage = Math.round(Math.min(this.value/(juniorTotals * .7),1)*100);

  } else {
      this.percentage = -1;
  }
};

  Gender.prototype.getId = function() {
    return this.id;
  };

  Gender.prototype.getSeniority = function() {
    return this.seniority;
  };
  
  Gender.prototype.getDescription = function() {
    return this.description;
  };

  Gender.prototype.getDescriptionValue = function() {
    return this.descriptionValue;
  };

  Gender.prototype.getPercentage = function() {
    return this.percentage;
};
  


  var Industry = function(id,seniority,description,descriptionValue,value){
    this.id = id;
    this.seniority = seniority;
    this.description = description;
    this.descriptionValue = descriptionValue;
    this.value = value;
    this.percentage = -1;
  };

  Industry.prototype.calcPercentage = function(category,seniorTotals,juniorTotals) {
    if (this.seniority === 'senior' && seniorTotals > 0) {
      this.percentage = Math.round(Math.min(this.value/(seniorTotals * .7),1)*100);
  }else if (this.seniority === 'junior' && juniorTotals > 0){

    this.percentage = Math.round(Math.min(this.value/(juniorTotals * .7),1)*100);

  } else {
      this.percentage = -1;
  }
};

  Industry.prototype.getId = function() {
    return this.id;
  };

  Industry.prototype.getSeniority = function() {
    return this.seniority;
  };

  Industry.prototype.getDescription = function() {
    return this.description;
  };

  Industry.prototype.getDescriptionValue = function() {
    return this.descriptionValue;
  };

  Industry.prototype.getPercentage = function() {
    return this.percentage;
  };

  var WorkExp = function(id,seniority,description,descriptionValue,value){
    this.id = id;
    this.seniority = seniority;
    this.description = description;
    this.descriptionValue = descriptionValue;
    this.value = value;
    this.percentage = -1;
  };


  WorkExp.prototype.calcPercentage = function(category,seniorTotals,juniorTotals) {
    if (this.seniority === 'senior' && seniorTotals > 0) {
      this.percentage = Math.round(Math.min(this.value/(seniorTotals * .7),1)*100);
  }else if (this.seniority === 'junior' && juniorTotals > 0){

    this.percentage = Math.round(Math.min(this.value/(juniorTotals * .7),1)*100);

  } else {
      this.percentage = -1;
  }
};

  WorkExp.prototype.getId = function() {
    return this.id;
  };

  WorkExp.prototype.getSeniority = function() {
    return this.seniority;
  };

  WorkExp.prototype.getDescription = function() {
    return this.description;
  };

  WorkExp.prototype.getDescriptionValue = function() {
    return this.descriptionValue;
  };

  WorkExp.prototype.getPercentage = function() {
    return this.percentage;
  };

  var FunctionExp = function(id,seniority,description,descriptionValue,value){
    this.id = id;
    this.seniority = seniority;
    this.description = description;
    this.descriptionValue = descriptionValue;
    this.value = value;
    this.percentage = -1;
  };

  FunctionExp.prototype.calcPercentage = function(category,seniorTotals,juniorTotals) {
    if (this.seniority === 'senior' && seniorTotals > 0) {
      this.percentage = Math.round(Math.min(this.value/(seniorTotals * .7),1)*100);
  }else if (this.seniority === 'junior' && juniorTotals > 0){

    this.percentage = Math.round(Math.min(this.value/(juniorTotals * .7),1)*100);

  } else {
      this.percentage = -1;
  }
};

FunctionExp.prototype.getId = function() {
  return this.id;
};

FunctionExp.prototype.getSeniority = function() {
  return this.seniority;
};

FunctionExp.prototype.getDescription = function() {
  return this.description;
};

FunctionExp.prototype.getDescriptionValue = function() {
  return this.descriptionValue;
};


  FunctionExp.prototype.getPercentage = function() {
    return this.percentage;
  };
  

  var Companies = function(id,seniority,description,descriptionValue,value){
    this.id = id;
    this.seniority = seniority;
    this.description = description;
    this.descriptionValue = descriptionValue;
    this.value = value;
    this.percentage = -1;
  };

  Companies.prototype.calcPercentage = function(category,seniorTotals,juniorTotals) {
    if (this.seniority === 'senior' && seniorTotals > 0) {
      this.percentage = Math.round(Math.min(this.value/(seniorTotals * .7),1)*100);
  }else if (this.seniority === 'junior' && juniorTotals > 0){

    this.percentage = Math.round(Math.min(this.value/(juniorTotals * .7),1)*100);

  } else {
      this.percentage = -1;
  }
};

    Companies.prototype.getId = function() {
      return this.id;
    };

    Companies.prototype.getSeniority = function() {
      return this.seniority;
    };

    Companies.prototype.getDescription = function() {
      return this.description;
    };

    Companies.prototype.getDescriptionValue = function() {
      return this.descriptionValue;
    };

  Companies.prototype.getPercentage = function() {
    return this.percentage;
  };

  var Age = function(id,seniority,description,descriptionValue,value){
    this.id = id;
    this.seniority = seniority;
    this.description = description;
    this.descriptionValue = descriptionValue;
    this.value = value;
    this.percentage = -1;
  };

  Age.prototype.calcPercentage = function(category,seniorTotals,juniorTotals) {
    if (this.seniority === 'senior' && seniorTotals > 0) {
      this.percentage = Math.round(Math.min(this.value/(seniorTotals * .7),1)*100);
  }else if (this.seniority === 'junior' && juniorTotals > 0){

    this.percentage = Math.round(Math.min(this.value/(juniorTotals * .7),1)*100);

  } else {
      this.percentage = -1;
  }
};

  Age.prototype.getId = function() {
    return this.id;
  };

  Age.prototype.getSeniority = function() {
    return this.seniority;
  };

  Age.prototype.getDescription = function() {
    return this.description;
  };

  Age.prototype.getDescriptionValue = function() {
    return this.descriptionValue;
  };


  Age.prototype.getPercentage = function() {
    return this.percentage;
  };

  var Education = function(id,seniority,description,descriptionValue,value){
    this.id = id;
    this.seniority = seniority;
    this.description = description;
    this.descriptionValue = descriptionValue;
    this.value = value;
    this.percentage = -1;
  };

  Education.prototype.calcPercentage = function(category,seniorTotals,juniorTotals) {
    if (this.seniority === 'senior' && seniorTotals > 0) {
      this.percentage = Math.round(Math.min(this.value/(seniorTotals * .7),1)*100);
  }else if (this.seniority === 'junior' && juniorTotals > 0){

    this.percentage = Math.round(Math.min(this.value/(juniorTotals * .7),1)*100);

  } else {
      this.percentage = -1;
  }
};

  Education.prototype.getId = function() {
    return this.id;
  };

  Education.prototype.getSeniority = function() {
    return this.seniority;
  };

  Education.prototype.getDescription = function() {
    return this.description;
  };

  Education.prototype.getDescriptionValue = function() {
    return this.descriptionValue;
  };

  Education.prototype.getPercentage = function() {
    return this.percentage;
  };

  var Inclusivity = function(id,seniority,description,descriptionValue,value){
    this.id = id;
    this.seniority = seniority;
    this.description = description;
    this.descriptionValue = descriptionValue;
    this.value = value;
    this.percentage = -1;
  };

  Inclusivity.prototype.calcPercentage = function(category,seniorTotals,juniorTotals) {

    if (this.seniority === 'senior' && seniorTotals > 0) {
      this.percentage = Math.round(Math.min(this.value/(seniorTotals * .7),1)*100);
  }else if (this.seniority === 'junior' && juniorTotals > 0){

    this.percentage = Math.round(Math.min(this.value/(juniorTotals * .7),1)*100);

  } else {
      this.percentage = -1;
  }
};

    Inclusivity.prototype.getId = function() {
      return this.id;
    };

    Inclusivity.prototype.getSeniority = function() {
  return this.seniority;
    };

    Inclusivity.prototype.getDescription = function() {
    return this.description;
  };

  Inclusivity.prototype.getDescriptionValue = function() {
    return this.descriptionValue;
  };

  Inclusivity.prototype.getPercentage = function() {
    return this.percentage;
  };

  var Origin = function(id,seniority,description,descriptionValue,value){
    this.id = id;
    this.seniority = seniority;
    this.description = description;
    this.descriptionValue = descriptionValue;
    this.value = value;
    this.percentage = -1;
  };

  Origin.prototype.calcPercentage = function(category,seniorTotals,juniorTotals) {
    if (this.seniority === 'senior' && seniorTotals > 0) {
      this.percentage = Math.round(Math.min(this.value/(seniorTotals * .7),1)*100);
  }else if (this.seniority === 'junior' && juniorTotals > 0){

    this.percentage = Math.round(Math.min(this.value/(juniorTotals * .7),1)*100);

  } else {
      this.percentage = -1;
  }
};

    Origin.prototype.getId = function() {
      return this.id;
    };

    Origin.prototype.getSeniority = function() {
    return this.seniority;
    };

    Origin.prototype.getDescription = function() {
    return this.description;
    };

    Origin.prototype.getDescriptionValue = function() {
    return this.descriptionValue;
    };

  Origin.prototype.getPercentage = function() {
    return this.percentage;
  };

  var Country = function(id,seniority,description,descriptionValue,value){
    this.id = id;
    this.seniority = seniority;
    this.description = categoryLookupOfCountry[description];
    this.descriptionValue = descriptionValue;
    this.value = value;
    this.percentage = -1;
  };

  Country.prototype.calcPercentage = function(category,seniorTotals,juniorTotals) {
    if (this.seniority === 'senior' && seniorTotals > 0) {
      this.percentage = Math.round(Math.min(this.value/(seniorTotals * .7),1)*100);
  }else if (this.seniority === 'junior' && juniorTotals > 0){

    this.percentage = Math.round(Math.min(this.value/(juniorTotals * .7),1)*100);

  } else {
      this.percentage = -1;
  }
};

  Country.prototype.getId = function() {
    return this.id;
  };

  Country.prototype.getSeniority = function() {
  return this.seniority;
  };

  Country.prototype.getDescription = function() {
  return this.description;
  };

  Country.prototype.getDescriptionValue = function() {
  return this.descriptionValue;
  };

  Country.prototype.getPercentage = function() {
    return this.percentage;
  };

  // Calculate senior totals in a category
  var calcSeniorTotals = function(category){

  var seniorTotal = 0;
  
    data.allItems[category].forEach(function(cur){

      if(cur.getSeniority()=== 'senior'){
        seniorTotal += cur.value;
      }

    });
    data.totals[category].seniorTotals = seniorTotal;

    return seniorTotal;
     
  };

  // Calculate Junior totals in a category

  var calcJuniorTotals = function(category){

    
    var juniorTotal = 0;
      data.allItems[category].forEach(function(cur){
  
        if(cur.getSeniority()=== 'junior' ){
          juniorTotal += cur.value;
        }
  
      });
      
      data.totals[category].juniorTotals = juniorTotal;  
      return juniorTotal;
    };
  var calcGenderScore = function(category){

    /* Senior
      =ROUND(MIN(10*'Input Sheet'!H6,4.9)+MIN(10*'Input Sheet'!H7,4.9)+MIN(10*'Input Sheet'!H8,0.2),2)
    */

    /* Junior
      =ROUND(MIN(10*'Input Sheet'!I6,4.9)+MIN(10*'Input Sheet'!I7,4.9)+MIN(10*'Input Sheet'!I8,0.2),2)
    */
   var seniorscore = 0.0000;
   var juniorscore = 0.0000;
    data.allItems[category].forEach(function(cur){

      if(cur.getSeniority()=== 'senior' && cur.getDescriptionValue()==='male'){
        seniorscore += parseFloat((Math.min((data.score[category].weightage) * (cur.getPercentage()/100.0000),data.score[category].maleMinFactor)));
        
      }else if(cur.getSeniority()=== 'senior' && cur.getDescriptionValue()==='female'){
        seniorscore += parseFloat((Math.min((data.score[category].weightage) * (cur.getPercentage()/100.0000),(data.score[category].femaleMinFactor))).toFixed(2));
      }else if(cur.getSeniority()=== 'senior' && cur.getDescriptionValue()==='others'){
        seniorscore += parseFloat((Math.min((data.score[category].weightage) * (cur.getPercentage()/100.0000),(data.score[category].othersMinFactor))).toFixed(2));
      }else if(cur.getSeniority()=== 'junior' && cur.getDescriptionValue()==='male'){
        juniorscore += parseFloat((Math.min((data.score[category].weightage) * (cur.getPercentage()/100.0000),data.score[category].maleMinFactor)).toFixed(2));
      }else if(cur.getSeniority()=== 'junior' && cur.getDescriptionValue()==='female'){
        juniorscore += parseFloat((Math.min((data.score[category].weightage) * (cur.getPercentage()/100.0000),data.score[category].femaleMinFactor)).toFixed(2));
      }else if(cur.getSeniority()=== 'junior' && cur.getDescriptionValue()==='others'){
        juniorscore += parseFloat((Math.min((data.score[category].weightage) * (cur.getPercentage()/100.0000),data.score[category].othersMinFactor)).toFixed(2));
      }

    });
      
    data.score[category].seniorScore = parseFloat(seniorscore.toFixed(2));
    data.score[category].juniorScore = parseFloat(juniorscore.toFixed(2));

  };

  var calcIndustryScore = function(category){

    /* Senior
      =ROUND('Input Sheet'!H11/0.05,2)
    */
    /* Junior
      =ROUND('Input Sheet'!I11/0.05,2)
    */
   var seniorscore = 0.0000;
   var juniorscore = 0.0000;
    data.allItems[category].forEach(function(cur){

      if(cur.getSeniority()=== 'senior' && cur.getDescriptionValue()==='differentIndustry'){
        seniorscore += parseFloat((cur.getPercentage()/100.0000) * (1/(data.score[category].weightage)).toFixed(2));
      }else if(cur.getSeniority()=== 'junior' && cur.getDescriptionValue()==='differentIndustry'){
        juniorscore += parseFloat((cur.getPercentage()/100.0000) * (1/(data.score[category].weightage)).toFixed(2));
      }

    });
      
    data.score[category].seniorScore = parseFloat(seniorscore.toFixed(2));
    data.score[category].juniorScore = parseFloat(juniorscore.toFixed(2));

  };

  var calcWorkExpScore = function(category){

    /* Senior
      =ROUND(MIN(10*'Input Sheet'!H13,2)+MIN(10*'Input Sheet'!H14,2)+MIN(10*'Input Sheet'!H15,2)+MIN(10*'Input Sheet'!H16,2)+MIN(10*'Input Sheet'!H17,2),2)
    */
    /* Junior
      =ROUND(MIN(10*'Input Sheet'!I13,2)+MIN(10*'Input Sheet'!I14,2)+MIN(10*'Input Sheet'!I15,2)+MIN(10*'Input Sheet'!I16,2)+MIN(10*'Input Sheet'!I17,2),2)
    */
   var seniorscore = 0.0000;
   var juniorscore = 0.0000;
    data.allItems[category].forEach(function(cur){

      if(cur.getSeniority()=== 'senior'){
        seniorscore += parseFloat(Math.min((data.score[category].weightage) * (cur.getPercentage()/100.0000),data.score[category].minFactor).toFixed(2));
      }else if(cur.getSeniority()=== 'junior'){
        juniorscore += parseFloat(Math.min((data.score[category].weightage) * (cur.getPercentage()/100.0000),data.score[category].minFactor).toFixed(2));
      }

    });
      
    data.score[category].seniorScore = parseFloat(seniorscore.toFixed(2));
    data.score[category].juniorScore = parseFloat(juniorscore.toFixed(2));

  };
  
  var calcFunctionExpScore = function(category){

    /* Senior

      =ROUND(MIN(10*'Input Sheet'!H19,2)+MIN(10*'Input Sheet'!H20,2)+MIN(10*'Input Sheet'!H21,2)+MIN(10*'Input Sheet'!H22,2)+MIN(10*'Input Sheet'!H23,2),2)
    */

    /* Junior
    =ROUND(MIN(10*'Input Sheet'!I19,2)+MIN(10*'Input Sheet'!I20,2)+MIN(10*'Input Sheet'!I21,2)+MIN(10*'Input Sheet'!I22,2)+MIN(10*'Input Sheet'!I23,2),2)
    */

   var seniorscore = 0.0000;
   var juniorscore = 0.0000;
    data.allItems[category].forEach(function(cur){

      if(cur.getSeniority()=== 'senior'){
        seniorscore += parseFloat(Math.min(data.score[category].weightage * (cur.getPercentage()/100.0000),data.score[category].minFactor).toFixed(2)) ;
      }else if(cur.getSeniority()=== 'junior'){
        juniorscore += parseFloat(Math.min(data.score[category].weightage * (cur.getPercentage()/100.0000),data.score[category].minFactor).toFixed(2));
      }

    });
      
    data.score[category].seniorScore = parseFloat(seniorscore.toFixed(2));
    data.score[category].juniorScore = parseFloat(juniorscore.toFixed(2));

  };

  var calcCompanyScore = function(category){

    /* Senior
      =ROUND(MIN(10*'Input Sheet'!H25,2)+MIN(10*'Input Sheet'!H26,2)+MIN(10*'Input Sheet'!H27,2)+MIN(10*'Input Sheet'!H28,2)+MIN(10*'Input Sheet'!H29,2),2)
    */

    /* Junior
      =ROUND(MIN(10*'Input Sheet'!I25,2)+MIN(10*'Input Sheet'!I26,2)+MIN(10*'Input Sheet'!I27,2)+MIN(10*'Input Sheet'!I28,2)+MIN(10*'Input Sheet'!I29,2),2)
    */


   var seniorscore = 0.0000;
   var juniorscore = 0.0000;
    data.allItems[category].forEach(function(cur){

      if(cur.getSeniority()=== 'senior'){
        seniorscore += parseFloat(Math.min((data.score[category].weightage) * (cur.getPercentage()/100.0000),data.score[category].minFactor).toFixed(2));
      }else if(cur.getSeniority()=== 'junior'){
        juniorscore += parseFloat(Math.min((data.score[category].weightage) * (cur.getPercentage()/100.0000),data.score[category].minFactor).toFixed(2));
      }

    });
      
    data.score[category].seniorScore = parseFloat(seniorscore.toFixed(2));
    data.score[category].juniorScore = parseFloat(juniorscore.toFixed(2));

  };

  var calcAgeScore = function(category){

    /* Senior
      =ROUND(MIN(10*'Input Sheet'!H31,2)+MIN(10*'Input Sheet'!H32,2)+MIN(10*'Input Sheet'!H33,2)+MIN(10*'Input Sheet'!H34,2)+MIN(10*'Input Sheet'!H35,2),2)
    */

    /* Junior
      =ROUND(MIN(10*'Input Sheet'!I31,2)+MIN(10*'Input Sheet'!I32,2)+MIN(10*'Input Sheet'!I33,2)+MIN(10*'Input Sheet'!I34,2)+MIN(10*'Input Sheet'!I35,2),2)
    */


   var seniorscore = 0;
   var juniorscore = 0;
    data.allItems[category].forEach(function(cur){

      if(cur.getSeniority()=== 'senior'){
        seniorscore += parseFloat(Math.min((data.score[category].weightage) * (cur.getPercentage()/100.0000),data.score[category].minFactor).toFixed(2));
      }else if(cur.getSeniority()=== 'junior'){
        juniorscore += parseFloat(Math.min((data.score[category].weightage) * (cur.getPercentage()/100.0000),data.score[category].minFactor).toFixed(2));
      }

    });
      
    data.score[category].seniorScore = parseFloat(seniorscore.toFixed(2));
    data.score[category].juniorScore = parseFloat(juniorscore.toFixed(2));

  };

  var calcEducationScore = function(category){

    /* Senior
      =ROUND(MIN((20/3)*'Input Sheet'!H37,(4/3))+MIN((20/3)*'Input Sheet'!H38,(4/3))+MIN((80/9)*'Input Sheet'!H39,(4/3))+MIN((80/9)*'Input Sheet'!H40,(4/3))+MIN((80/3)*'Input Sheet'!H41,(4/3))+MIN((80/3)*'Input Sheet'!H42,(4/3))+MIN(10*'Input Sheet'!H43,2),2)
    */

    /* Junior
      =ROUND(MIN((20/3)*'Input Sheet'!I37,(4/3))+MIN((20/3)*'Input Sheet'!I38,(4/3))+MIN((80/9)*'Input Sheet'!I39,(4/3))+MIN((80/9)*'Input Sheet'!I40,(4/3))+MIN((80/3)*'Input Sheet'!I41,(4/3))+MIN((80/3)*'Input Sheet'!I42,(4/3))+MIN(10*'Input Sheet'!I43,2),2)
    */


   var seniorscore = 0.0000;
   var juniorscore = 0.0000;
    data.allItems[category].forEach(function(cur){

      if(cur.getSeniority()=== 'senior' && cur.descriptionValue==='bTech'){
        seniorscore += parseFloat(Math.min(data.score[category].bTech * (cur.getPercentage()/100.0000),data.score[category].minFactor).toFixed(2));
      }else if(cur.getSeniority()=== 'junior' && cur.descriptionValue==='bTech'){
        juniorscore += parseFloat(Math.min(data.score[category].bTech * (cur.getPercentage()/100.0000),data.score[category].minFactor).toFixed(2));
      }else if(cur.getSeniority()=== 'senior' && cur.descriptionValue==='bNontech'){
        seniorscore += parseFloat(Math.min(data.score[category].bNontech * (cur.getPercentage()/100.0000),data.score[category].minFactor).toFixed(2));
      }else if(cur.getSeniority()=== 'junior' && cur.descriptionValue==='bNontech'){
        juniorscore += Math.min(data.score[category].bNontech * (cur.getPercentage()/100.0000),data.score[category].minFactor).toFixed(2);
      }else if(cur.getSeniority()=== 'senior' && cur.descriptionValue==='mTech'){
        seniorscore += parseFloat(Math.min(data.score[category].mTech * (cur.getPercentage()/100.0000),data.score[category].minFactor).toFixed(2));
      }else if(cur.getSeniority()=== 'junior' && cur.descriptionValue==='mTech'){
        juniorscore += parseFloat(Math.min(data.score[category].mTech * (cur.getPercentage()/100.0000),data.score[category].minFactor).toFixed(2));
      }else if(cur.getSeniority()=== 'senior' && cur.descriptionValue==='mNontech'){
        seniorscore += parseFloat(Math.min(data.score[category].mNontech * (cur.getPercentage()/100.0000),data.score[category].minFactor).toFixed(2));
      }else if(cur.getSeniority()=== 'junior' && cur.descriptionValue==='mNontech'){
        juniorscore += parseFloat(Math.min(data.score[category].mNontech * (cur.getPercentage()/100.0000),data.score[category].minFactor).toFixed(2));
      }else if(cur.getSeniority()=== 'senior' && cur.descriptionValue==='pTech'){
        seniorscore += parseFloat(Math.min(data.score[category].pTech * (cur.getPercentage()/100.0000),data.score[category].minFactor).toFixed(2));
      }else if(cur.getSeniority()=== 'junior' && cur.descriptionValue==='pTech'){
        juniorscore += parseFloat(Math.min(data.score[category].pTech * (cur.getPercentage()/100.0000),data.score[category].minFactor).toFixed(2));
      }else if(cur.getSeniority()=== 'senior' && cur.descriptionValue==='pNontech'){
        seniorscore += parseFloat(Math.min(data.score[category].pNontech * (cur.getPercentage()/100.0000),data.score[category].minFactor).toFixed(2));
      }else if(cur.getSeniority()=== 'junior' && cur.descriptionValue==='pNontech'){
        juniorscore += parseFloat(Math.min(data.score[category].pNontech * (cur.getPercentage()/100.0000),data.score[category].minFactor).toFixed(2));
      }else if(cur.getSeniority()=== 'senior' && cur.descriptionValue==='mba'){
        seniorscore += parseFloat(Math.min(data.score[category].mba * (cur.getPercentage()/100.0000),data.score[category].mbaminFactor).toFixed(2));
      }else if(cur.getSeniority()=== 'junior' && cur.descriptionValue==='mba'){
        juniorscore += parseFloat(Math.min(data.score[category].mba * (cur.getPercentage()/100.0000),data.score[category].mbaminFactor).toFixed(2));
      }

    });
      
    data.score[category].seniorScore = parseFloat(seniorscore.toFixed(2));
    data.score[category].juniorScore = parseFloat(juniorscore.toFixed(2));

  };

  var calcInclusionScore = function(category){

    /* Senior
      ==ROUND(MIN(100*'Input Sheet'!H46,10),2)
    */

    /* Junior
      =ROUND(MIN(100*'Input Sheet'!I46,10),2)
    */


   var disabilityseniorscore = 0.0000;
   var disabilityjuniorscore = 0.0000;
   var lgbtqseniorscore = 0.0000;
   var lgbtqjuniorscore = 0.0000;
    data.allItems[category].forEach(function(cur){

      /*
        *inclusion:{
        disability : {
          seniorScore:0,
          juniorScore:0,  
          weightage:10.00,
          minFactor:2.00
        },
        lgbtq : {
          seniorScore:0,
          juniorScore:0,
          weightage:200.00,
          minFactor:2.00
        }
      },
      */

      if(cur.getSeniority()=== 'senior' && cur.descriptionValue==='disability'){
        disabilityseniorscore += parseFloat(Math.min(data.score[category].disability.weightage * (cur.getPercentage()/100.0000),data.score[category].disability.minFactor).toFixed(2));
      }else if(cur.getSeniority()=== 'junior' && cur.descriptionValue==='disability'){
        disabilityjuniorscore += parseFloat(Math.min(data.score[category].disability.weightage * (cur.getPercentage()/100.0000),data.score[category].disability.minFactor).toFixed(2));
      }else if(cur.getSeniority()=== 'senior' && cur.descriptionValue==='lgbtq'){
        lgbtqseniorscore += parseFloat(Math.min(data.score[category].lgbtq.weightage * (cur.getPercentage()/100.0000),data.score[category].lgbtq.minFactor).toFixed(2));
      }else if(cur.getSeniority()=== 'junior' && cur.descriptionValue==='lgbtq'){
        lgbtqjuniorscore += parseFloat(Math.min(data.score[category].lgbtq.weightage * (cur.getPercentage()/100.0000),data.score[category].lgbtq.minFactor).toFixed(2));
      }

    });
      
    data.score[category].disability.seniorScore = parseFloat(disabilityseniorscore.toFixed(2));
    data.score[category].disability.juniorScore = parseFloat(disabilityjuniorscore.toFixed(2));
    data.score[category].lgbtq.seniorScore = parseFloat(lgbtqseniorscore.toFixed(2));
    data.score[category].lgbtq.juniorScore = parseFloat(lgbtqjuniorscore.toFixed(2));


  };

  var calcOriginScore = function(category){

    /* Senior
      =ROUND(MIN('Input Sheet'!H48/16%,5/3)+MIN('Input Sheet'!H49/16%,5/3)+MIN('Input Sheet'!H50/16%,5/3)+MIN('Input Sheet'!H51/16%,5/3)+MIN('Input Sheet'!H52/16%,5/3)+MIN('Input Sheet'!H53/16%,5/3),2)
    */

    /* Junior
      =ROUND(MIN('Input Sheet'!I48/16%,5/3)+MIN('Input Sheet'!I49/16%,5/3)+MIN('Input Sheet'!I50/16%,5/3)+MIN('Input Sheet'!I51/16%,5/3)+MIN('Input Sheet'!I52/16%,5/3)+MIN('Input Sheet'!I53/16%,5/3),2)
    */


   var seniorscore = 0.0000;
   var juniorscore = 0.0000;
    data.allItems[category].forEach(function(cur){

      if(cur.getSeniority()=== 'senior'){
        seniorscore += parseFloat(Math.min(data.score[category].weightage * (cur.getPercentage()/100.0000),data.score[category].minFactor).toFixed(2));
      }else if(cur.getSeniority()=== 'junior'){
        juniorscore += parseFloat(Math.min(data.score[category].weightage * (cur.getPercentage()/100.0000),data.score[category].minFactor).toFixed(2));
      }

    });
      
    data.score[category].seniorScore = parseFloat(seniorscore.toFixed(2));
    data.score[category].juniorScore = parseFloat(juniorscore.toFixed(2));

  };

  var calcCountryScore = function(category){

     /* Senior
      =ROUND(MIN(10*'Input Sheet'!H55,2)+MIN(10*'Input Sheet'!H56,2)+MIN(10*'Input Sheet'!H57,2)+MIN(10*'Input Sheet'!H58,2)+MIN(10*'Input Sheet'!H59,2),2)
    */

    /* Junior
      =ROUND(MIN(10*'Input Sheet'!I55,2)+MIN(10*'Input Sheet'!I56,2)+MIN(10*'Input Sheet'!I57,2)+MIN(10*'Input Sheet'!I58,2)+MIN(10*'Input Sheet'!I59,2),2)
    */


   var seniorscore = 0.0000;
   var juniorscore = 0.0000;
    data.allItems[category].forEach(function(cur){

      if(cur.getSeniority()=== 'senior'){
        seniorscore += parseFloat(Math.min(data.score[category].weightage * (cur.getPercentage()/100.0000),data.score[category].minFactor).toFixed(2));
      }else if(cur.getSeniority()=== 'junior'){
        juniorscore += parseFloat(Math.min(data.score[category].weightage * (cur.getPercentage()/100.0000),data.score[category].minFactor).toFixed(2));
      }

    });
      
    data.score[category].seniorScore = parseFloat(seniorscore.toFixed(2));
    data.score[category].juniorScore = parseFloat(juniorscore.toFixed(2));

  };

  var calcFinalDiversityValue = function(){
    const industryMultiplier = 5.00; 
    const originMultiplier = 5.00;
    const genderMultiplier = 4.00;
    const functionMultiplier = 4.00;
    const companyMultiplier = 4.00;
    const countryMultiplier = 3.00;
    const ageMultiplier = 3.00;
    const educationMultiplier = 3.00;
    const workexpMultiplier = 2.00;
    const disabilityMultiplier = 1.00;
    const lgbtqMultiplier = 1.00;

    var finalIndustryScore = 0.00;
    var finalOriginScore = 0.00;
    var finalGenderScore = 0.00;
    var finalFunctionScore = 0.00;
    var finalCompanyScore = 0.00;
    var finalCountryScore = 0.00;
    var finalCountryScore = 0.00;
    var finalAgeScore = 0.00;
    var finalEducationScore = 0.00;
    var finalWorkexpScore = 0.00;
    var finalDisabilityScore = 0.00;
    var finalLgbtqScore = 0.00;
    var sumproduct = 0.00;
    var sumOfMultiplers = 0.00;
    var finalDiversity = 0.00;



    /*
    Industry Score=ROUND(((2*Metrices!C17)+Metrices!C19)/3,2)
    */
    finalIndustryScore = parseFloat(((2*data.score.industry.seniorScore)+data.score.industry.juniorScore)/3);
    /*
    Origin Score = ROUND(((2*Metrices!E17)+Metrices!E19)/3,2)
    */ 
    finalOriginScore = parseFloat(((2*data.score.origin.seniorScore)+data.score.origin.juniorScore)/3);
    /*
    gender score =ROUND(((2*Metrices!G17)+Metrices!G19)/3,2)
    */
    finalGenderScore = parseFloat(((2.00*data.score.gender.seniorScore)+data.score.gender.juniorScore)/3.00);
    /*
    function score = ROUND(((2*Metrices!I17)+Metrices!I19)/3,2)
    */
    finalFunctionScore = parseFloat(((2*data.score.functionexp.seniorScore)+data.score.functionexp.juniorScore)/3);
    /*
    company score = =ROUND(((2*Metrices!K17)+Metrices!K19)/3,2)
    */
    finalCompanyScore = parseFloat(((2*data.score.company.seniorScore)+data.score.company.juniorScore)/3);
    /*
    country score = =ROUND(((2*Metrices!M17)+Metrices!M19)/3,2)
    */
    finalCountryScore = parseFloat(((2*data.score.country.seniorScore)+data.score.country.juniorScore)/3);
    /*
    age score = =ROUND(((2*Metrices!O17)+Metrices!O19)/3,2)
    */
    finalAgeScore = parseFloat(((2*data.score.ageGroup.seniorScore)+data.score.ageGroup.juniorScore)/3);
    /*
    edu score = ROUND(((2*Metrices!Q17)+Metrices!Q19)/3,2)
    */
    finalEducationScore = parseFloat(((2*data.score.education.seniorScore)+data.score.education.juniorScore)/3);
    /*
    workexp Score = =ROUND(((2*Metrices!S17)+Metrices!S19)/3,2)
    */
    finalWorkexpScore = parseFloat(((2*data.score.workexp.seniorScore)+data.score.workexp.juniorScore)/3);
    /*
    * disability score = =ROUND(((2*Metrices!U17)+Metrices!U19)/3,2)
    */
    finalDisabilityScore = parseFloat(((2*data.score.inclusion.disability.seniorScore)+data.score.inclusion.disability.juniorScore)/3);
    /*
    lgbtq Score = =ROUND(((2*Metrices!U11)+Metrices!U13)/3,2)
    */
    finalLgbtqScore = parseFloat(((2*data.score.inclusion.lgbtq.seniorScore)+data.score.inclusion.lgbtq.juniorScore)/3);

    /*
    diversity = =ROUND(SUMPRODUCT($C$3:$M$3,C4:M4)/SUM($C$3:$M$3)/10,4)
    */

    sumproduct = parseFloat((industryMultiplier * finalIndustryScore)+
                     (originMultiplier * finalOriginScore)+
                     (genderMultiplier * finalGenderScore)+
                     (functionMultiplier * finalFunctionScore)+
                     (companyMultiplier * finalCompanyScore)+
                     (countryMultiplier * finalCountryScore)+
                     (ageMultiplier * finalAgeScore)+
                     (educationMultiplier * finalEducationScore)+
                     (workexpMultiplier * finalWorkexpScore)+
                     (disabilityMultiplier * finalDisabilityScore)+
                     (lgbtqMultiplier * finalLgbtqScore));
    
    sumOfMultiplers =  parseFloat(industryMultiplier + originMultiplier + genderMultiplier + functionMultiplier +
    companyMultiplier + countryMultiplier + ageMultiplier + educationMultiplier + workexpMultiplier +
    disabilityMultiplier + lgbtqMultiplier) ;
    
    
    finalDiversity = parseFloat((sumproduct/sumOfMultiplers)/10.00);

    data.finalDiversityScore  = finalDiversity.toFixed(2);
    return parseFloat(finalDiversity.toFixed(2));

  };





  var categoryLookupOfCountry = {

    "Liechtenstein":"1",
    "Monaco":"1",
    "Luxembourg":"1",
    "Bermuda":"1",
    "Greenland":"2",
    "Netherlands":"2",
    "French Polynesia":"3"
  };



  var data = {
    allItems : {
      gender : [],
      industry : [],
      workexp : [],
      functionexp : [],
      company : [],
      ageGroup : [],
      education : [],
      inclusion : [],
      origin : [],
      country : []
    },
    totals : {

      gender : {
        seniorTotals:0,
        juniorTotals:0,
        allPercentages:[]
      },         
      industry : {
        seniorTotals:0,
        juniorTotals:0,
        allPercentages:[]
      },
      workexp : {
        seniorTotals:0,
        juniorTotals:0,
        allPercentages:[]
      },
      functionexp : {
        seniorTotals:0,
        juniorTotals:0,
        allPercentages:[]
      },
      company : {
        seniorTotals:0,
        juniorTotals:0,
        allPercentages:[]
      },

      ageGroup : {
        seniorTotals:0,
        juniorTotals:0,
        allPercentages:[]
      },         
      education : {
        seniorTotals:0,
        juniorTotals:0,
        allPercentages:[]
      },
      inclusion : {
        seniorTotals:0,
        juniorTotals:0,
        allPercentages:[]
      },
      origin : {
        seniorTotals:0,
        juniorTotals:0,
        allPercentages:[]
      },
      country : {
        seniorTotals:0,
        juniorTotals:0,
        allPercentages:[]
      }
    },
    score : {

      gender : {
        seniorScore:0.0000,
        juniorScore:0.0000,
        maleMinFactor:4.9000,
        femaleMinFactor:4.9000,
        othersMinFactor:0.2000,
        weightage :10.0000
      },         
      industry : {
        seniorScore:0.0000,
        juniorScore:0.0000,
        weightage:0.0500,
        minFactor:2.0000
      },
      workexp : { 
        seniorScore:0.0000,
        juniorScore:0.0000,
        weightage:10.0000,
        minFactor:2.0000
      },
      functionexp : {
        seniorScore:0.0000,
        juniorScore:0.0000,
        weightage:10.00000,
        minFactor:2.0000
      },
      company : {
        seniorScore:0.0000,
        juniorScore:0.0000,
        weightage:10.0000,
        minFactor:2.0000
      },

      ageGroup : {
        seniorScore:0.0000,
        juniorScore:0.0000,
        weightage:10.0000,
        minFactor:2.0000
      },         
      education : {
        seniorScore:0.0000,
        juniorScore:0.0000,
        bTech:6.6667,
        bNontech:6.6667,
        mTech:8.8889,
        mNontech:8.8889,
        pTech:26.6667,
        pNontech:26.6667,
        mba:10.0000,
        minFactor:1.3333,
        mbaminFactor:2.0000

      },
      inclusion:{
        disability : {
          seniorScore:0.0000,
          juniorScore:0.0000,  
          weightage:10.0000,
          minFactor:2.0000
        },
        lgbtq : {
          seniorScore:0.0000,
          juniorScore:0.0000,
          weightage:200.0000,
          minFactor:10.0000
        }
      },
      
      origin : {
        seniorScore:0.0000,
        juniorScore:0.0000,
        weightage:.1600,
        minFactor:1.6667 
      },
      country : {
        seniorScore:0.0000,
        juniorScore:0.0000,
        weightage:10.0000,
        minFactor:2.0000 
      }

    },
    totalEmployee : 0,
    finalDiversityScore : 0.0000
  };

  return {

    addItem : function(seniority,category,description,descriptionValue,val,totalEmployees){

      var newItem,ID;
      
      data.totalEmployee = totalEmployees;

      var seniorCategoryTotal = calcSeniorTotals(category);
      var juniorCategoryTotal = calcJuniorTotals(category);

      var newTotal = seniorCategoryTotal + juniorCategoryTotal + val;
      
      // Create new ID
      if (data.allItems[category].length > 0){
        ID = data.allItems[category][data.allItems[category].length - 1].id + 1;
        
        
        
      }else{

        ID = 0;

      }

      
      // Create new item based on gender or ndustry or workexp or functionexp or company or agegroup or education or inclusion or origin,or countries category
      
      if(category === 'gender' && newTotal<=totalEmployees){
        
        // check if total employees is less than total employees in the category
          newItem = new Gender(ID,seniority,description,descriptionValue,val);
          // Push it into our data structure
          data.allItems[category].push(newItem);
          
          // return new element 
          return newItem;

        }else if (category === 'industry'){
          
          newItem = new Industry(ID,seniority,description,descriptionValue,val);
          // Push it into our data structure
          data.allItems[category].push(newItem);

          

          // return new element 
          return newItem;

        }else if (category === 'workexp' && newTotal<=totalEmployees){

          newItem = new WorkExp(ID,seniority,description,descriptionValue,val);
          // Push it into our data structure
          data.allItems[category].push(newItem);

          
          // return new element 
          return newItem;
         
      }else if (category === 'functionexp' && newTotal<=totalEmployees){

          newItem = new FunctionExp(ID,seniority,description,descriptionValue,val);
          // Push it into our data structure
          data.allItems[category].push(newItem);

          
          // return new element 
          return newItem;
        
      }else if (category === 'company' && newTotal<=totalEmployees){

          newItem = new Companies(ID,seniority,description,descriptionValue,val);
          // Push it into our data structure
          data.allItems[category].push(newItem);

          
          // return new element 
          return newItem;
        
      }else if (category === 'ageGroup' && newTotal<=totalEmployees){

          newItem = new Age(ID,seniority,description,descriptionValue,val);
          // Push it into our data structure
          data.allItems[category].push(newItem);

          
          // return new element 
          return newItem;
             
      }else if (category === 'education' && newTotal<=totalEmployees){

          newItem = new Education(ID,seniority,description,descriptionValue,val);
          // Push it into our data structure
          data.allItems[category].push(newItem);

          
          // return new element 
          return newItem;
            
      }else if (category === 'inclusion' && newTotal<=totalEmployees){

          newItem = new Inclusivity(ID,seniority,description,descriptionValue,val);
          // Push it into our data structure
          data.allItems[category].push(newItem);

          
          // return new element 
          return newItem;
        
      }else if (category === 'origin' && newTotal<=totalEmployees){

          newItem = new Origin(ID,seniority,description,descriptionValue,val);
          // Push it into our data structure
          data.allItems[category].push(newItem);

          
          // return new element 
          return newItem;
                
      }else if (category === 'country' && newTotal<=totalEmployees){

          newItem = new Country(ID,seniority,description,descriptionValue,val);
          // Push it into our data structure
          data.allItems[category].push(newItem);

          
          // return new element 
          return newItem;
          
      }else{
        alert("Your total employees count have exceeded under the current category");
        return;
      }
    },

    deleteItem: function(type, id) {
      var ids, index;
      
      // id = 6
      //data.allItems[type][id];
      // ids = [1 2 4  8]
      //index = 3
      
      ids = data.allItems[type].map(function(current) {
          return current.id;
      });

      index = ids.indexOf(id);

      if (index !== -1) {
          data.allItems[type].splice(index, 1);
      }
      
  },

    calculatePercentages: function(category) {
      var seniorCategoryCount = calcSeniorTotals(category);
      var juniorCategoryCount = calcJuniorTotals(category);
      data.allItems[category].forEach(function(cur) {
         cur.calcPercentage(category,seniorCategoryCount,juniorCategoryCount);
      });
  },

  calculateScore: function(category){
    
    if (category === 'gender'){
      
      calcGenderScore(category);
     

    }else if (category === 'industry'){

      calcIndustryScore(category);
      
    }else if(category === 'workexp'){

      calcWorkExpScore(category);
      
    }else if(category === 'functionexp'){

      calcFunctionExpScore(category);
      
    }else if(category === 'company'){

      calcCompanyScore(category);
      
    }else if(category === 'ageGroup'){

      calcAgeScore(category);
      
    }else if(category === 'education'){

      calcEducationScore(category);
      
    }else if(category === 'inclusion'){

      calcInclusionScore(category);

    }else if(category === 'origin'){

      calcOriginScore(category);
      
    }else if(category === 'country'){
      calcCountryScore(category);
    }

  },

  calculateDiversity : function(){
    calcFinalDiversityValue();
  },

  getPercentages: function(category) {
    var allPerc = data.allItems[category].map(function(cur) {

        return cur.getPercentage();
    });
    data.totals[category].allPercentages = allPerc;
    return data.totals[category].allPercentages;
},

  getDiversityScore : function(){

    return {
      diversityScore:data.finalDiversityScore
    }
  },
    
    testing : function(){
      console.log(data);
    }
  };

})();

// UI CONTROLLER
var UIController = (function(){

  var DOMstrings = {
    container: '.container',
    companyDescription: '.add__companydescription',
    companyNameId : '#companyname',
    totalEmployeesId : '#totalemployees',
    inputEmployeeType : '.add__emptype',
    inputSeniorityId : '#seniority',
    inputDiversityCategory : '.add__category',
    inputDiversityCategoryId : '#category',
    inputDescription : '.add__description',
    inputDescriptionId :'#description',
    inputValue : '.add__value',
    inputBtn : '.add__btn',
    gender : '.gender',
    industry : '.industry',
    workexp : '.workexp',
    functionexp : '.functionexp',
    company : '.company',
    ageGroup : '.ageGroup',
    education : '.education',
    inclusion : '.inclusion',
    origin : '.origin',
    country : '.country',
    genderContainer : '.gender__list',
    industryContainer : '.industry__list',
    workexpContainer : '.workexp__list',
    functionContainer : '.functionexp__list',
    companyContainer : '.company__list',
    ageGroupContainer : '.ageGroup__list',
    educationContainer : '.education__list',
    inclusionContainer : '.inclusion__list',
    originContainer : '.origin__list',
    countryContainer : '.country__list',
    genderPercLabel: '.gender__percentage',
    industryPercLabel: '.industry__percentage',
    workexpPercLabel: '.workexp__percentage',
    functionexpPercLabel: '.functionexp__percentage',
    companyPercLabel: '.company__percentage',
    ageGroupPercLabel: '.ageGroup__percentage',
    educationPercLabel: '.education__percentage',
    inclusionPercLabel: '.inclusion__percentage',
    originPercLabel: '.origin__percentage',
    countryPercLabel: '.country__percentage',
    diversityPercLabel: '.item__percentage',
    dateLabel: '.diversity__title--month',
    diversityScoreLabel: '.diversity__value'


  };

  var addOptionsToDropDown= function(selectedOption,elementId){

  var options = {
      junior : {
        // Text value for Categories
      text : ['Select One--','GENDER','INDUSTRY','WORK EXPERIENCE','FUNCTION EXPOSURES','COMPANY EXPOSURES','AGE GROUP','EDUCATION','INCLUSION FACTORS','PLACE OF ORIGIN','COUNTRIES'],

      // DropDwon Option Value for Categories
      value :['','gender','industry','workexp','functionexp','company','ageGroup','education','inclusion','origin','country']
      },

      senior : {
        // Text value for Categories
      text : ['Select One--','GENDER','INDUSTRY','WORK EXPERIENCE','FUNCTION EXPOSURES','COMPANY EXPOSURES','AGE GROUP','EDUCATION','INCLUSION FACTORS','PLACE OF ORIGIN','COUNTRIES'],

      // DropDwon Option Value for Categories
      value : ['','gender','industry','workexp','functionexp','company','ageGroup','education','inclusion','origin','country']
      },
      gender : {
        text :['Select One--','MALE','FEMALE','OTHERS'],
        value:['','male','female','others']
      },
      industry : {
        text: ['Select One--','Same Past Industry','Different Past Industry'],
        value:['','sameIndustry','differentIndustry']
      },
      
      workexp : {
      seniorworkexp : {
        text:['Select One--','less than 10 years','10-15 years','15-20 years','20-25 years','more than 25 years'],
        value:['','lessthan10years','tentofifteenyears','fifteentotwentyyears','twentytotwentyfiveyears','morethantwentyfiveyears']
      },
      juniorworkexp :{
        text : ['Select One--','less Than 2 years','2-5 years','5-10 years','10-13 years','more than 13 years'],
        value:['','lessthan2years','twotofiveyears','fivetotenyears','tentothirteenyears','morethanthirteenyears']
      }
      },      
      functionexp : {
        text : ['Select One--','1 Function','2 Functions','3 Functions','4 Functions','More than 4 Functions'],
        value:['','onefunction','twofunctions','threefunctions','fourfunctions','fivefunctions']
      },
      company : {
        text : ['Select One--','1 Company','2 Comapnies','3 Comapnies','4 Comapnies','More than 4 Comapnies'],
        value:['','onecompany','twocompanies','threecompanies','fourcompanies','fivecompanies']
      },
      ageGroup : {
      seniorageGroup:{
        text:['Select One--','less Than 30 years','30-35 years','35-40 years','40-45 years','more than 45 years'],
        value:['','lessThan30Years','30-35years','35-40years','40-45years','morethan45years']
      },
      juniorageGroup:{
        text:['Select One--','less Than 24 years','24-27 years','27-30 years','30-33 years','more than 33 years'],
        value:['','lessThan24years','24-27years','27-30years','30-33years','morethan33years']
      }
      },
      
      education:{
        text : ['Select One--','Bachelor + Technical','Bachelor + Non-Technical','Master + Technical','Master + Non-Technical','PhD + Technical','PhD + Non-Technical','MBA'],
        value:['','bTech','bNontech','mTech','mNontech','pTech','pNontech','mba']
      },
      inclusion:{
        text : ['Select One--','LGBTQ+ Employees','Employees with Disability','Others'],
        value:['','lgbtq','disability','others']
      },
      origin:{
        text : ['Select One--','South + South-Eastern Asia','Central + Eastern Asia','Western Asia','Oceania & Pacific','Europe','Russia','North America','Central America','Latin America','Africa'],
        value:['','1','2','3','4','5','6','7','8','9','10']
      },
      country:{
        text:['Select One--','Liechtenstein','Monaco','Luxembourg','Bermuda','Greenland','Netherlands','French Polynesia'],
        value:['','1','2','3','4','5','6','7']
      }
    };
    addDropList (selectedOption,options,elementId);

  };

  var addDropList = function(selectedOption,optionObj,domElementId,empType){

    var ddl,ddlTextArr,ddlValArr,options;
    
    ddl = document.getElementById(domElementId);

    if(selectedOption==='workexp' || selectedOption ==='ageGroup'){
      var empType = document.querySelector(DOMstrings.inputEmployeeType).selectedOptions[0].value;
      var subSelectedOption = empType + selectedOption;
      ddlTextArr = optionObj[selectedOption][subSelectedOption]['text'];
      ddlValArr = optionObj[selectedOption][subSelectedOption]['value'];
    }else{
      ddlTextArr = optionObj[selectedOption]['text'];
      ddlValArr = optionObj[selectedOption]['value'];
    }
    
    options = ""
    ddlTextArr.forEach(function(item,index){
      var txt = item;
      
      var value = ddlValArr[index];
      
      if(index == 0){
        options += '<option value="' + `${value}` + '" disabled selected>' + `${txt}`+'</option>';  
      }else{
        options += '<option value="' + `${value}` + '">' + `${txt}`+'</option>';
      }
      
    });

    ddl.innerHTML = options;
  };

  var formatNumber = function(num, type) {
    var numSplit, int, dec, type;
    /*
        + or - before number
        exactly 2 decimal points
        comma separating the thousands

        2310.4567 -> + 2,310.46
        2000 -> + 2,000.00
        */

    num = Math.abs(num);
    num = num.toFixed(2);

    numSplit = num.split('.');

    int = numSplit[0];
    if (int.length > 3) {
        int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3); //input 23510, output 23,510
    }

    dec = numSplit[1];

    return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;

};


var nodeListForEach = function(list, callback) {
    for (var i = 0; i < list.length; i++) {
        callback(list[i], i);
    }
};

  return {
    getInput : function(){
            
        return {
              companyName : document.querySelector(DOMstrings.companyNameId).value,
              totalEmployees : parseInt(document.querySelector(DOMstrings.totalEmployeesId).value),
              seniority : document.querySelector(DOMstrings.inputEmployeeType).selectedOptions[0].value, // Will be either senior or junior
              diversityCategory : document.querySelector(DOMstrings.inputDiversityCategory).value, // will be gender,industry,workexp,functionexp,company,agegroup,education,inclusion,origin,countries
            // TO DO : Get the value of description
              description : document.querySelector(DOMstrings.inputDescription).selectedOptions[0].text,
              descriptionValue : document.querySelector(DOMstrings.inputDescription).selectedOptions[0].value,
              value : parseInt(document.querySelector(DOMstrings.inputValue).value) 
      };
      
    },

    addListItem : function(obj, category){

      var html,newHtml,element ;

      // Create HTML string with placeholder text
      if (category === 'gender'){
        element = DOMstrings.genderContainer;
        html = '<div class="item diversityclearfix" id="gender-%id%"><div class="item__description">%seniority% %description%</div><div class="right diversityclearfix"><div class="item__value">%value%</div><div class="gender__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }else if (category === 'industry'){
        element = DOMstrings.industryContainer;
        html =  '<div class="item diversityclearfix" id="industry-%id%"><div class="item__description">%seniority% %description%</div><div class="right diversityclearfix"><div class="item__value">%value%</div><div class="industry__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }else if(category === 'workexp'){
        element = DOMstrings.workexpContainer;
        html = '<div class="item diversityclearfix" id="workexp-%id%"><div class="item__description">%seniority% %description%</div><div class="right diversityclearfix"><div class="item__value">%value%</div><div class="workexp__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }else if(category === 'functionexp'){
        element = DOMstrings.functionContainer;
        html = '<div class="item diversityclearfix" id="functionexp-%id%"><div class="item__description">%seniority% %description%</div><div class="right diversityclearfix"><div class="item__value">%value%</div><div class="functionexp__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }else if(category === 'company'){
        element = DOMstrings.companyContainer;
        html = '<div class="item diversityclearfix" id="company-%id%"><div class="item__description">%seniority% %description%</div><div class="right diversityclearfix"><div class="item__value">%value%</div><div class="company__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }else if(category === 'ageGroup'){
        element = DOMstrings.ageGroupContainer;
        html = '<div class="item diversityclearfix" id="ageGroup-%id%"><div class="item__description">%seniority% %description%</div><div class="right diversityclearfix"><div class="item__value">%value%</div><div class="ageGroup__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }else if(category === 'education'){
        element = DOMstrings.educationContainer;
        html = '<div class="item diversityclearfix" id="education-%id%"><div class="item__description">%seniority% %description%</div><div class="right diversityclearfix"><div class="item__value">%value%</div><div class="education__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }else if(category === 'inclusion'){
        element = DOMstrings.inclusionContainer;
        html = '<div class="item diversityclearfix" id="inclusion-%id%"><div class="item__description">%seniority% %description%</div><div class="right diversityclearfix"><div class="item__value">%value%</div><div class="inclusion__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }else if(category === 'origin'){
        element = DOMstrings.originContainer;
        html = '<div class="item diversityclearfix" id="origin-%id%"><div class="item__description">%seniority% %description%</div><div class="right diversityclearfix"><div class="item__value">%value%</div><div class="origin__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }else if(category === 'country'){
        element = DOMstrings.countryContainer;
        html = '<div class="item diversityclearfix" id="country-%id%"><div class="item__description">%seniority% Category- %description%</div><div class="right diversityclearfix"><div class="item__value">%value%</div><div class="country__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }

      
      // Replace the place holder text with some actual data
        
        newHtml = html.replace('%id%',obj.id);
        newHtml = newHtml.replace('%seniority%',obj.seniority.toUpperCase());
        newHtml = newHtml.replace('%description%',obj.description);
        newHtml = newHtml.replace('%value%',obj.value);

      // Insert the HTML into DOM
      document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);

    },

    addDropDownList: function(selectedOption,element){

      return addOptionsToDropDown(selectedOption,element);

    },

    deleteListItem: function(selectorID) {
            
      var el = document.getElementById(selectorID);
      el.parentNode.removeChild(el);
      
  },

    clearFields : function(selectors){

      var fields,fieldsArr;

      fields = document.querySelectorAll(selectors);
      
      fieldsArr = Array.prototype.slice.call(fields);

      fieldsArr.forEach(function(current){

        
        current.value="";
      });

    },

    displayPercentages: function(percentages,category) {

      var fields;

      if (category === 'gender'){
        fields = document.querySelectorAll(DOMstrings.genderPercLabel);
      }else if (category === 'industry'){
        fields = document.querySelectorAll(DOMstrings.industryPercLabel);
      }else if(category === 'workexp'){
        fields = document.querySelectorAll(DOMstrings.workexpPercLabel);
      }else if(category === 'functionexp'){
        fields = document.querySelectorAll(DOMstrings.functionexpPercLabel);
      }else if(category === 'company'){
        fields = document.querySelectorAll(DOMstrings.companyPercLabel);
      }else if(category === 'ageGroup'){
        fields = document.querySelectorAll(DOMstrings.ageGroupPercLabel);
      }else if(category === 'education'){
        fields = document.querySelectorAll(DOMstrings.educationPercLabel);
      }else if(category === 'inclusion'){
        fields = document.querySelectorAll(DOMstrings.inclusionPercLabel);
      }else if(category === 'origin'){
        fields = document.querySelectorAll(DOMstrings.originPercLabel);
      }else if(category === 'country'){
        fields = document.querySelectorAll(DOMstrings.countryPercLabel);
      }
            
      
      
      nodeListForEach(fields, function(current, index) {
          
          if (percentages[index] > 0) {
              //current.textContent = percentages[index] + '%';
          } else {
              //current.textContent = '---';
          }
      });
      
  },

  displayDiversity: function(obj){

    document.querySelector(DOMstrings.diversityScoreLabel).textContent = obj.diversityScore;

  },
    
    displayMonth: function() {
      var now, months, month, year;
      
      now = new Date();
      //var christmas = new Date(2016, 11, 25);
      
      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      month = now.getMonth();
      
      year = now.getFullYear();
      document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;
  },

  getDOMstrings : function(){

    return DOMstrings;
  }
  };

})();

// GLOBAL APP CONTROLLER

var controller = (function(diversityCtrl,UICtrl){

  var setUpEventListeners = function(){
    

    
    var DOM = UICtrl.getDOMstrings();

    // Listen to events for input change of employee type
    document.querySelector(DOM.inputEmployeeType).addEventListener('input',function(event){

      var clearFieldsSelectors = DOM.inputDiversityCategory + ', ' + DOM.inputDescription + ', ' + DOM.inputValue;
      var seniorityID = event.target.value;
      var ddlElement = 'category';

      UICtrl.clearFields(clearFieldsSelectors);
      UICtrl.addDropDownList(seniorityID,ddlElement);
    },false);

    // Listen to events for input change of Category type

    document.querySelector(DOM.inputDiversityCategory).addEventListener('input',function(event){
      var clearFieldsSelectors = DOM.inputDescription + ', ' + DOM.inputValue;
      
      var categoryId = event.target.value;
      var ddlElement =  'description';
      
      UICtrl.addDropDownList(categoryId,ddlElement);
    },false);


    document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);

    document.addEventListener('keypress',function(event){

    if(event.keyCode === 13 || event.which === 13){
      ctrlAddItem();
        }
    });

    
    document.querySelector(DOM.gender).addEventListener('click', ctrlDeleteItem);
    document.querySelector(DOM.industry).addEventListener('click', ctrlDeleteItem);
    document.querySelector(DOM.workexp).addEventListener('click', ctrlDeleteItem);
    document.querySelector(DOM.functionexp).addEventListener('click', ctrlDeleteItem);
    document.querySelector(DOM.company).addEventListener('click', ctrlDeleteItem);
    document.querySelector(DOM.ageGroup).addEventListener('click', ctrlDeleteItem);
    document.querySelector(DOM.education).addEventListener('click', ctrlDeleteItem);
    document.querySelector(DOM.inclusion).addEventListener('click', ctrlDeleteItem);
    document.querySelector(DOM.origin).addEventListener('click', ctrlDeleteItem);
    document.querySelector(DOM.country).addEventListener('click', ctrlDeleteItem);
    
    



  };
  
  var updatePercentages = function(category){

    // 1. Calculate percentages
    diversityCtrl.calculatePercentages(category);
        
    // 2. Read percentages from the budget controller
    var percentages = diversityCtrl.getPercentages(category);
    
    // 3. Update the UI with the new percentages  
    UICtrl.displayPercentages(percentages,category);
  };


  var updateDiversity = function(category){

    
    // 1. Calculate the score for individual category

    diversityCtrl.calculateScore(category);

    // 2. Calculate the final diversity

    diversityCtrl.calculateDiversity();

    // 3. Returns the diversity

    var diversity = diversityCtrl.getDiversityScore();

    
    // 4. Display the diversity on the UI .
    UICtrl.displayDiversity(diversity);
    //console.log(diversity);

  };

  var ctrlAddItem = function(){

    var input, newItem;
    // 1. Get the field data
    input = UICtrl.getInput();
    
    if(input.seniority !== "" && input.diversityCategory !== "" && input.description != "" && !isNaN(input.totalEmployees) && input.totalEmployees>0 && !isNaN(input.value) && input.value>0){

      // 2. Add the item to diversity controller
    newItem = diversityCtrl.addItem(input.seniority,input.diversityCategory,input.description,input.descriptionValue ,input.value,input.totalEmployees);

    // 3. Add the item to UI
    var DOM = UICtrl.getDOMstrings();
    UICtrl.addListItem(newItem,input.diversityCategory);

    // 4. Clear the value field

    UICtrl.clearFields(DOM.inputValue);

    // 5. Calculate and update percentages
    
    updatePercentages(input.diversityCategory);

    // 5. Calculate and Update Diversity

    updateDiversity(input.diversityCategory);
    }
  };

  var ctrlDeleteItem = function(event) {
    var itemID, splitID, type, ID;
    
    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
    
    if (itemID) {
        
        //inc-1
        splitID = itemID.split('-');
        type = splitID[0];
        ID = parseInt(splitID[1]);
        
        // 1. delete the item from the data structure
        diversityCtrl.deleteItem(type, ID);
        
        // 2. Delete the item from the UI
        UICtrl.deleteListItem(itemID);
        
        // 3. Calculate and update percentages
    
        updatePercentages(type);

        // 4. Calculate and Update Diversity

        updateDiversity(type);
    }
};
  return {

    init : function(){
          console.log("Application was started");
          UICtrl.displayMonth();
          UICtrl.displayDiversity({
            diversityScore: 0.00.toFixed(2)
        });
          setUpEventListeners();
    }
  };

  
})(diversityController,UIController);

controller.init();

