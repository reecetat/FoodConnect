let vue = function() {
      var quiz = {
        title: 'The Food Quiz',
        
        questions: [
          {
            text: "What's your all-time favorite food?",
            response: [
              {text: 'Chicken Shawarma', value: 'GrapeLeafExpress'},
              {text: 'Chicken Nuggets', value: 'McDonalds'},
              {text: 'Fettucini Alfredo', value: 'OliveGarden'},
              {text: 'Baby Back Ribs', value: 'CityBBQ'},
            ]
          }, {
            text: "What's your favorite comfort dish?",
            response: [
              {text: 'Spaghetti', value: 'OliveGarden'},
              {text: 'Hamburger', value: 'McDonalds'},
              {text: 'Pulled Pork', value: 'CityBBQ'},
              {text: 'Grape Leaves', value: 'GrapeLeafExpress'},
            ]
          }, {
            text: "What is the best kind of pizza?",
            response: [
              {text: 'Meat Lovers', value: 'CityBBQ'},
              {text: 'Pita Bread Pizza', value: 'GrapeLeafExpress'},
              {text: 'Stromboli', value: 'OliveGarden'},
              {text: 'Chicacgo Style', value: 'McDonalds'},
            ]
          }, {
            text: "Do you prefer",
            response: [
              {text: 'Quick in and out', value: 'McDonalds'},
              {text: 'Passionate staff', value: 'GrapeLeafExpress'},
              {text: 'Community meals', value: 'CityBBQ'},
              {text: 'Fine dining', value: 'OliveGarden'},
            ]
          }, {
            text: "What is your ideal price range?",
            response: [
              {text: '20$+', value: 'OliveGarden'},
              {text: '$1-$5', value: 'McDonalds'},
              {text: '$8-$12', value: 'GrapeLeafExpress'},
              {text: '$12-$15', value: 'CityBBQ'},
            ]
          }
        ]
      };

      new Vue({
        el: '#app',
        data: {
          quiz: quiz,
          questionIndex: 0,
          responseTracker: {
            GrapeLeafExpress: 0,
            McDonalds: 0,
            OliveGarden: 0,
            CityBBQ: 0
          },
          userResponses: []
        },
        methods: {
          next(value) {
            if(value == 'GrapeLeafExpress') {
              this.responseTracker.GrapeLeafExpress++;
            } else if(value == 'McDonalds') {
              this.responseTracker.McDonalds++;
            } else if(value == 'OliveGarden') {
              this.responseTracker.OliveGarden++;
            } else if (value == 'CityBBQ') {
              this.responseTracker.CityBBQ++;
            }

            this.questionIndex++;
          },
          prev() {
            this.questionIndex--;
          },
          restart(){
            this.questionIndex = 0;

            this.responseTracker.GrapeLeafExpress = 0;
            this.responseTracker.McDonalds
= 0;
            this.responseTracker.OliveGarden
= 0;
  this.responseTracker.CityBBQ
= 0;
          },
          result() {
            let obj = this.responseTracker;
            return Object.keys(obj).reduce(function(a, b){ return obj[a] > obj[b] ? a : b });
          }
        }
      });
    }

    vue();
