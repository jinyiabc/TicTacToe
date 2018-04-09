var ticTacToe = angular.module('ticTacToe',['ngAnimate']);


ticTacToe.controller('ticController',['$scope','$animate',function($scope,$animate){

     $scope.positionStaus = [0,0,0,0,0,0,0,0,0];
     $scope.isReset = false;

     $scope.isShow = function(){
       return $scope.isReset;
     }

     $scope.nextGame = function(){
       $scope.isReset = false;
       $scope.isShow();
       $scope.reset();
     }

     $scope.reset = function(){
       $scope.positionStaus = [0,0,0,0,0,0,0,0,0];

       document.getElementById('pos0').innerHTML = '';
       document.getElementById('pos1').innerHTML = '';
       document.getElementById('pos2').innerHTML = '';
       document.getElementById('pos3').innerHTML = '';
       document.getElementById('pos4').innerHTML = '';
       document.getElementById('pos5').innerHTML = '';
       document.getElementById('pos6').innerHTML = '';
       document.getElementById('pos7').innerHTML = '';
       document.getElementById('pos8').innerHTML = '';
       $scope.isShow();
     }

     $scope.robotPlay = function(){
       $scope.positionAvailable = [];
       $scope.positionForHuman = [];
       $scope.positionForRobert = [];

       for(var i=0; i< 9; i++){
         if($scope.positionStaus[i] == 0){
           $scope.positionAvailable.push(i);
         } else if ($scope.positionStaus[i] == 1){
           $scope.positionForHuman.push(i);
         } else {
           $scope.positionForRobert.push(i);
         }
       }
       //console.log($scope.positionAvailable);
       //console.log($scope.positionForHuman);
       //console.log($scope.positionForRobert);

       for( var j=0; j<$scope.positionAvailable.length;j++){

             $scope.testify = $scope.positionForRobert.concat([$scope.positionAvailable[j]]).sort();
             console.log($scope.testify);
             if($scope.ruleCheck($scope.testify)){
               $scope.positionStaus[$scope.positionAvailable[j]] = 2;
               document.getElementById('pos'+$scope.positionAvailable[j].toString()).innerHTML = '&#9883';
               console.log("OOPS! You lose~ OLO");
               document.getElementById('promptWindow').innerHTML = 'OOPS! You lose~ OLO';
               $scope.isReset = true;
              $scope.reset();
              }
       }

       for( var j=0; j<$scope.positionAvailable.length;j++){

             $scope.testify = $scope.positionForHuman.concat([$scope.positionAvailable[j]]).sort();
             console.log($scope.testify);
             if($scope.ruleCheck($scope.testify)){
               $scope.positionStaus[$scope.positionAvailable[j]] = 2;
               document.getElementById('pos'+$scope.positionAvailable[j].toString()).innerHTML = '&#9883';
               return;
              }
       }

     $scope.number = Math.floor(Math.random()*$scope.positionAvailable.length);
     $scope.positionStaus[$scope.positionAvailable[$scope.number]] = 2;
     document.getElementById('pos'+$scope.positionAvailable[$scope.number].toString()).innerHTML = '&#9883';
     return;

     }

     $scope.ruleCheck = function(array1){
       $scope.isWin = false;
       if (array1.length < 3 ){
         $scope.isWin = false;
         return $scope.isWin;
       }
       // Consider Array length is larger than 3
       for( var k=0; k<array1.length-2; k++){
         array = [];
         array = array1.slice(k);
         console.log(array);
       //}
       if( array[0] == 4 || array[0] == 5 || array[0] == 7 || array[0] == 8 ){
         $scope.isWin = false;
       }
       if (array[0] == 6){                         // [6,7,8]
         if(array[1] == 7 && array[2] ==8){
           $scope.isWin = true;
           return $scope.isWin;
         }
       }
       if (array[0] == 3){                         // [3,4,5]
         if(array[1] == 4 && array[2] ==5){
           $scope.isWin = true;
           return $scope.isWin;
         }
       }
       if (array[0] == 2){                          // [2,4,6]
         for (var i=1; i< array.length-1; i++){
           if(array[i] == 4){
             for ( var j=i+1; j<array.length; j++){
               if(array[j] == 6){
                 $scope.isWin = true;
                 return $scope.isWin;
               }
             }
           }
           if(array[i] == 5){                        // [2,5,8]
             for ( var j=i+1; j<array.length; j++){
               if(array[j] == 8){
                 $scope.isWin = true;
                 return $scope.isWin;
               }
             }
           }
         }
       }

       if( array[0] == 1) {                         // [1,4,7]
         for (var i=1; i < array.length-1; i++){
           if(array[i] == 4){
             for ( var j=i+1; j<array.length; j++){
               if(array[j] == 7){
                 $scope.isWin = true;
                 return $scope.isWin;
               }
             }
           }
         }
       }

       if( array[0] == 0){
         if ( array[1] == 1 && array[2] == 2){     // [0,1,2]
           $scope.isWin = true;
           return $scope.isWin;
         }
         for (var i=1; i< array.length-1; i++){
            for ( var j=i+1; j<array.length; j++){
               if( array[i] == 3 && array[j] == 6){    // [0,3,6]
                 $scope.isWin = true;
                 return $scope.isWin;
               }
               if(array[i] == 4 && array[j] == 8){     // [0,4,8]
                 $scope.isWin = true;
                 return $scope.isWin;
               }
            }
         }
       }   // end of check 0
     }
       console.log($scope.isWin);
       return $scope.isWin;
    }             // end of ruleCheck



     $scope.pos0 = function(){
       if($scope.positionStaus[0] == 0){

               $scope.positionStaus[0] = 1;
               document.getElementById('pos0').innerHTML = '&#9806';
               $scope.positionAvailable = [];
               $scope.positionForHuman = [];
               $scope.positionForRobert = [];
               for(var i=0; i< 9; i++){
                 if($scope.positionStaus[i] == 0){
                   $scope.positionAvailable.push(i);
                 } else if ($scope.positionStaus[i] == 1){
                   $scope.positionForHuman.push(i);
                 } else {
                   $scope.positionForRobert.push(i);
                 }
               }

               //$scope.positionForHuman = [0,1,3,4,7];
               //console.log($scope.positionForHuman);

               if($scope.ruleCheck($scope.positionForHuman)){
                 console.log("Congratulation! You Win!");
                 document.getElementById('promptWindow').innerHTML = 'Congratulation! You Win!';
                 $scope.isReset = true;
                 return $scope.reset();
              } else if ($scope.positionAvailable.length == 0){
                console.log("You Tie, Not Bad~");
                document.getElementById('promptWindow').innerHTML = 'You Tie, Not Bad~';
                return $scope.reset();
              } else {
               $scope.robotPlay();
              }
       }
     };

     $scope.pos1 = function(){
       if($scope.positionStaus[1] == 0){

               $scope.positionStaus[1] = 1;
               document.getElementById('pos1').innerHTML = '&#9806';
               $scope.positionAvailable = [];
               $scope.positionForHuman = [];
               $scope.positionForRobert = [];
               for(var i=0; i< 9; i++){
                 if($scope.positionStaus[i] == 0){
                   $scope.positionAvailable.push(i);
                 } else if ($scope.positionStaus[i] == 1){
                   $scope.positionForHuman.push(i);
                 } else {
                   $scope.positionForRobert.push(i);
                 }
               }
               if($scope.ruleCheck($scope.positionForHuman)){
                 console.log("Congratulation! You Win!");
                 document.getElementById('promptWindow').innerHTML = 'Congratulation! You Win!';
                 $scope.isReset = true;
                 return $scope.reset();
              } else if ($scope.positionAvailable.length == 0){
                console.log("You Tie, Not Bad~");
                document.getElementById('promptWindow').innerHTML = 'You Tie, Not Bad~';
                $scope.isReset = true;
                return $scope.reset();
              } else {
               $scope.robotPlay();
              }

       }
     };

     $scope.pos2 = function(){

       if($scope.positionStaus[2] == 0){

             $scope.positionStaus[2] = 1;
             document.getElementById('pos2').innerHTML = '&#9806';
             $scope.positionAvailable = [];
             $scope.positionForHuman = [];
             $scope.positionForRobert = [];
             for(var i=0; i< 9; i++){
               if($scope.positionStaus[i] == 0){
                 $scope.positionAvailable.push(i);
               } else if ($scope.positionStaus[i] == 1){
                 $scope.positionForHuman.push(i);
               } else {
                 $scope.positionForRobert.push(i);
               }
             }
             if($scope.ruleCheck($scope.positionForHuman)){
               console.log("Congratulation! You Win!");
               document.getElementById('promptWindow').innerHTML = 'Congratulation! You Win!';
               $scope.isReset = true;
               return $scope.reset();
            } else if ($scope.positionAvailable.length == 0){
              console.log("You Tie, Not Bad~");
              document.getElementById('promptWindow').innerHTML = 'You Tie, Not Bad~';
              $scope.isReset = true;
              return $scope.reset();
            } else {
             $scope.robotPlay();
            }
        }
     };

     $scope.pos3 = function(){
       if($scope.positionStaus[3] == 0){

             $scope.positionStaus[3] = 1;
             document.getElementById('pos3').innerHTML = '&#9806';
             $scope.positionAvailable = [];
             $scope.positionForHuman = [];
             $scope.positionForRobert = [];
             for(var i=0; i< 9; i++){
               if($scope.positionStaus[i] == 0){
                 $scope.positionAvailable.push(i);
               } else if ($scope.positionStaus[i] == 1){
                 $scope.positionForHuman.push(i);
               } else {
                 $scope.positionForRobert.push(i);
               }
             }
             if($scope.ruleCheck($scope.positionForHuman)){
               console.log("Congratulation! You Win!");
               document.getElementById('promptWindow').innerHTML = 'Congratulation! You Win!';
               $scope.isReset = true;
               return $scope.reset();
            } else if ($scope.positionAvailable.length == 0){
              console.log("You Tie, Not Bad~");
              document.getElementById('promptWindow').innerHTML = 'You Tie, Not Bad~';
              $scope.isReset = true;
              return $scope.reset();
            } else {
             $scope.robotPlay();
            }
        }
     };

     $scope.pos4 = function(){
       if($scope.positionStaus[4] == 0){

             $scope.positionStaus[4] = 1;
             document.getElementById('pos4').innerHTML = '&#9806';
             $scope.positionAvailable = [];
             $scope.positionForHuman = [];
             $scope.positionForRobert = [];
             for(var i=0; i< 9; i++){
               if($scope.positionStaus[i] == 0){
                 $scope.positionAvailable.push(i);
               } else if ($scope.positionStaus[i] == 1){
                 $scope.positionForHuman.push(i);
               } else {
                 $scope.positionForRobert.push(i);
               }
             }
             if($scope.ruleCheck($scope.positionForHuman)){
               console.log("Congratulation! You Win!");
               document.getElementById('promptWindow').innerHTML = 'Congratulation! You Win!';
               $scope.isReset = true;
               return $scope.reset();
            } else if ($scope.positionAvailable.length == 0){
              console.log("You Tie, Not Bad~");
              document.getElementById('promptWindow').innerHTML = 'You Tie, Not Bad~';
              $scope.isReset = true;
              return $scope.reset();
            } else {
             $scope.robotPlay();
            }
        }
     };

     $scope.pos5 = function(){
       if($scope.positionStaus[5] == 0){

             $scope.positionStaus[5] = 1;
             document.getElementById('pos5').innerHTML = '&#9806';
             $scope.positionAvailable = [];
             $scope.positionForHuman = [];
             $scope.positionForRobert = [];
             for(var i=0; i< 9; i++){
               if($scope.positionStaus[i] == 0){
                 $scope.positionAvailable.push(i);
               } else if ($scope.positionStaus[i] == 1){
                 $scope.positionForHuman.push(i);
               } else {
                 $scope.positionForRobert.push(i);
               }
             }
             if($scope.ruleCheck($scope.positionForHuman)){
               console.log("Congratulation! You Win!");
               document.getElementById('promptWindow').innerHTML = 'Congratulation! You Win!';
               $scope.isReset = true;
               return $scope.reset();
            } else if ($scope.positionAvailable.length == 0){
              console.log("You Tie, Not Bad~");
              document.getElementById('promptWindow').innerHTML = 'You Tie, Not Bad~';
              $scope.isReset = true;
              return $scope.reset();
            } else {
             $scope.robotPlay();
            }
        }
     };

     $scope.pos6 = function(){
       if($scope.positionStaus[6] == 0){

           $scope.positionStaus[6] = 1;
           document.getElementById('pos6').innerHTML = '&#9806';
           $scope.positionAvailable = [];
           $scope.positionForHuman = [];
           $scope.positionForRobert = [];
           for(var i=0; i< 9; i++){
             if($scope.positionStaus[i] == 0){
               $scope.positionAvailable.push(i);
             } else if ($scope.positionStaus[i] == 1){
               $scope.positionForHuman.push(i);
             } else {
               $scope.positionForRobert.push(i);
             }
           }
           if($scope.ruleCheck($scope.positionForHuman)){
             console.log("Congratulation! You Win!");
             document.getElementById('promptWindow').innerHTML = 'Congratulation! You Win!';
             $scope.isReset = true;
             return $scope.reset();
          } else if ($scope.positionAvailable.length == 0){
            console.log("You Tie, Not Bad~");
            document.getElementById('promptWindow').innerHTML = 'You Tie, Not Bad~';
            $scope.isReset = true;
            return $scope.reset();
          } else {
           $scope.robotPlay();
          }
       }
     };

     $scope.pos7 = function(){

       if($scope.positionStaus[7] == 0){

             $scope.positionStaus[7] = 1;
             document.getElementById('pos7').innerHTML = '&#9806';
             $scope.positionAvailable = [];
             $scope.positionForHuman = [];
             $scope.positionForRobert = [];
             for(var i=0; i< 9; i++){
               if($scope.positionStaus[i] == 0){
                 $scope.positionAvailable.push(i);
               } else if ($scope.positionStaus[i] == 1){
                 $scope.positionForHuman.push(i);
               } else {
                 $scope.positionForRobert.push(i);
               }
             }
             if($scope.ruleCheck($scope.positionForHuman)){
               console.log("Congratulation! You Win!");
               document.getElementById('promptWindow').innerHTML = 'Congratulation! You Win!';
               $scope.isReset = true;
               return $scope.reset();
            } else if ($scope.positionAvailable.length == 0){
              console.log("You Tie, Not Bad~");
              document.getElementById('promptWindow').innerHTML = 'You Tie, Not Bad~';
              $scope.isReset = true;
              return $scope.reset();
            } else {
             $scope.robotPlay();
            }
        }
     };

     $scope.pos8 = function(){
       if($scope.positionStaus[8] == 0){

             $scope.positionStaus[8] = 1;
             document.getElementById('pos8').innerHTML = '&#9806';
             $scope.positionAvailable = [];
             $scope.positionForHuman = [];
             $scope.positionForRobert = [];
             for(var i=0; i< 9; i++){
               if($scope.positionStaus[i] == 0){
                 $scope.positionAvailable.push(i);
               } else if ($scope.positionStaus[i] == 1){
                 $scope.positionForHuman.push(i);
               } else {
                 $scope.positionForRobert.push(i);
               }
             }
             if($scope.ruleCheck($scope.positionForHuman)){
               console.log("Congratulation! You Win!");
               document.getElementById('promptWindow').innerHTML = 'Congratulation! You Win!';
               $scope.isReset = true;
               return $scope.reset();
            } else if ($scope.positionAvailable.length == 0){
              console.log("You Tie, Not Bad~");
              document.getElementById('promptWindow').innerHTML = 'You Tie, Not Bad~';
              $scope.isReset = true;
              return $scope.reset();
            } else {
             $scope.robotPlay();
            }
        }
     };






  }]);
