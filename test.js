//Initialising the bot and the entire script of the bot
var botui = new BotUI('sreelakshmiaddepalli');

  botui.message.bot({ 
  delay: 2000,
  content: 'Hi There 👋'
  }).then(function(){
     return botui.message.bot({ 
      delay: 1000, // wait 1 sec.
      content: 'I am Sree Lakshmi Addepalli, a Software Engineer currently studying my Masters in Computer Science at Courant Institute of Mathematical Sciences, New York University 👩‍🎓'
     });
  }).then(function () {
        return botui.message.bot({ 
        delay: 1000, // wait 1 sec.
        content: 'What would you like to know about me?'
        });
  }).then(function () {
     return botui.action.button({ 
	  delay: 1000,
      addMessage: false,
      action: [{
        text: 'My Journey',
        value: 'journey'
      },{
        text: 'Philosophy',
        value: 'philosophy'
      },{
        text: 'Education',
        value: 'education'
      },{
        text: 'Areas of Interest',
        value: 'areasofinterest'
      },{
        text: 'Work Experience',
        value: 'workexperience'
      },{
        text: 'Internships',
        value: 'internships'
      },{
        text: 'Projects',
        value: 'projects'
      },{
        text: 'Hackathons',
        value: 'hackathons'
      },{
        text: 'Professional Development',
        value: 'professionaldevelopment'
      },{
        text: 'Accomplishments',
        value: 'accomplishments'
      },{
        text: 'Skills',
        value: 'skills'
      },{
        text: 'Languages I Speak',
        value: 'languages'
      },{
        text: 'Fun Facts About Me',
        value: 'funfactsaboutme'
      },{
        text: 'Contact Me',
        value: 'contactme'
      },{
        text: 'I have Known Enough!!!',
        value: 'knownme'
      }]
    });
  }).then(function (res) { 
  	 if(res.value == 'journey'){
      journey();
      } 
      else if(res.value == 'philosophy'){
      philosophy();
      } 
      else if(res.value == 'education'){
      education();
      } 
      else if(res.value == 'areasofinterest'){
      areasofinterest();
      } 
      else if(res.value == 'workexperience'){
      workexperience();
      } 
      else if(res.value == 'internships'){
      internships();
      } 
      else if(res.value == 'projects'){
      projects();
      } 
      else if(res.value == 'hackathons'){
      hackathons();
      } 
      else if(res.value == 'professionaldevelopment'){
      professionaldevelopment();
      } 
      else if(res.value == 'accomplishments'){
      accomplishments();
      } 
      else if(res.value == 'skills'){
      skills();
      } 
      else if(res.value == 'languages'){
      languages();
      } 
      else if(res.value == 'funfactsaboutme'){
      funfactsaboutme();
      } 
      else if(res.value == 'contactme'){
      end();
      } 
      else if(res.value == 'knownme'){
      end();
      }
     else {
      end();
      }
      
 });


var philosophy = function(){
  botui.message.bot({
   delay: 2000, 
   content: 'I  have always believed and worked along the lines of the motto " Ever tried, Ever failed, no matter, try again, fail again, fail better. 🤾🏼‍♀️'
  }).then(function(){
    return botui.message.bot({ 
    // show first message
    delay: 4000,
    content: 'I appreciate Hard work, Perseverance, Collaboration and connect to such people easily.😇'
    });
  }).then(function(){
    return botui.message.bot({ 
    // show first message
    delay: 2000,
    content: 'I feel that having a background in Computer Science 🖥️ helps you solve problems in the real world 🌎 along with making you feel empowered. 💪'
    });
    }).then(function(){
    return botui.message.bot({ 
    // show first message
    delay: 5000,
    content: 'My main aim is to develop solutions that can eradicate the problems of the old and needy people. 👵🏽 '
    });
  }).then(function(){
	return askoptions();
    });

}

var education = function(){
  botui.message.bot({
   delay: 2000, 
   content: 'I did my 10th grade from Apeejay School in Mumbai affiliated ️to CBSE Board and score a perfect CGPA of 10/10 then. 🏆'
  }).then(function(){
    return botui.message.bot({ 
    // show first message
    delay: 4000,
    content: 'Post that my 12th grade was from IITians Pace Junior Science College in Mumbai affiliated to HSC Board. I scored 88.5% and received INSPIRE scholarship for being in the top 1%. 🏆 '
    });
  }).then(function(){
    return botui.message.bot({ 
    // show first message
    delay: 6000,
    content: 'I pursued my Engineering in Computer Science from VESIT, Mumbai and achieved a CGPA of 9.07/10, standing in the top 10% of the Computer Science Department of around 240 students. 🏆' 
    });
    }).then(function(){
    return botui.message.bot({ 
    // show first message
    delay: 8000,
    content: 'Currently i am pursuing my Masters in Computer Science at Courant Institute of Mathematical Sciences affiliated to New York University. 🗽'
    });
  }).then(function(){
	return askoptions();
    });

}

var areasofinterest = function(){
  botui.message.bot({
   delay: 2000, 
   content: 'Having gone breath wise through various courses in my Undegrad and Grad school, I finally found my calling to build Products in these domains... ⌚'
  }).then(function(){
    return botui.message.bot({ 
    // show first message
    delay: 4000,
    content: 'As you might have guessed, ✔️ Natural Language Processing, ✔️ Big Data, ✔️ Machine Learning  and ✔️ Predictive Analytics.'
    });
  }).then(function(){
    return botui.message.bot({ 
    // show first message
    delay: 4000,
    content: 'Building products keep me hooked to ✔️ Software Development, ✔️ Cloud Computing and ✔️ Devops. ' 
    });
    }).then(function(){
	return askoptions();
    });

}

var languages = function(){
  botui.message.bot({
   delay: 2000, 
   content: ' I am proficient in speaking English and being from Mumbai 🚆, i am fluent in Hindi. '
  }).then(function(){
    return botui.message.bot({ 
    delay: 2000,
    content: 'I understand Telugu as it is my Native Language. 🇮🇳'
    });
  }).then(function(){
	return askoptions();
    });

}

var journey = function(){
  	botui.message.bot({
      delay: 1000,
      content: 'My Journey towards Masters Degree in Computer Science was rather well planned than a roller coaster!!!😊'
    }).then(function (){
    return botui.message.bot({ 
    delay: 2000,
    content: 'I was born in Delhi 🏛️ and later grew up in Mumbai 🎥 and have been living there for the past 16 years before moving to New York.🗽'
    })
    }).then(function(){
    return botui.message.bot({ 
    delay: 2000,
    content: 'Being the middle one of the 3 siblings 👨‍👩‍👧, I could easily camouflage from being the responsible elder sister for the younger sis and the obedient, understanding younger sister for my elder sis.'
    });
    }).then(function(){
    return botui.message.bot({ 
    delay: 5000,
    content: 'Logic ⁉️ had always intrigued me from my 6th grade where i was introduced to the world of computer programming 🖥️ and Mathematics ➗  being my favourite subject. My parents education (Mom an Phd from IIT Delhi in Mathematics and Dad an Double MTech Engineer in Computer Science from IIT Roorkee) 🎓 had an impact on my journey to pursue Engineering.'
    });
  }).then(function(){
	return botui.message.bot({ 
    delay: 11000,
    content: 'Following my passion I pursued my undergraduate in Computer Science 👩‍💻 from Mumbai University. It was here where I was formally introduced to the world of Computers 💻. Having Aced all the exams and standing in the top 10% of the Computer Science Department with a CGPA of 9.07/10 left me with more ambition ⛰️ to pursue the field further.'
    });
    }).then(function(){
 		return botui.message.bot({ 
    delay: 12000,
    content: 'Being the first Girl 👧🏻 to be placed and offered 2 On Campus jobs in Leading FinTech Companies, JP Morgan Chase 🏦 and Diebold Nixdorf 🏧 instilled a sense of direction 🧭 and vision to my future journey that i was going to travel. 🎢 '
    });
    }).then(function(){
	return botui.message.bot({ 
    delay: 10000,
    content: 'Having worked 2 Years as a Software Developer in Diebold Nixdorf 🏧  encouraged me to pursue my graduation in Computer Science at NYU.🗽'
    })
    }).then(function(){
	return askoptions();
    });
    
}

var workexperience = function(){ 
  return botui.message.bot({ 
      delay: 2000,
      content: 'Currently, I am working part time as a webmaster at NYU Linguistics Department, which involves updating the website events, courses and working on website functionalities. 👩‍💻 '
    }).then(function(){
        return botui.message.bot({ 
        delay: 4000,
        content: 'Prior to NYU Courant, I was working as a Software Developer at Diebold Nixdorf 🏧, a leading multinational financial and Retail Technology company.'
        });
    }).then(function(){
        return botui.message.bot({ 
        delay: 6000,
        content: 'In the last year of my work experience As part of the "Vynamic Insights" product an analytical solution for gaining insights through the ATM logs using ETL processes, I was responsible for developing continuous integration continuous deployment (CI-CD) pipeline automating the seamless building 🏗️  of the product as well as deploying it to the cloud. ☁️'
        });
    }).then(function(){
       return botui.message.bot({ 
       delay: 8000,
       content: 'During my first year, I contributed as a Developer for "Xpression product", a VOIP  ☎️ based Solution for ATMs by Solving defects, tasks of User stories in C# and Angular JS.'
       });
    }).then(function(){
	return askoptions();
    });  

}

var internships = function(){ 
  return botui.message.bot({ 
      delay: 2000,
      content: 'During January, 2018, I was working as a Data Science and Analytics intern ➕ under Dr. Sameer Mathur from IIM Lucknow. Various Harvard Business case studies were analysed using statistical methods 📊  and I Finished a Capstone Project titled “Big Mart Sales Analysis” 📈 which involved steps from Hypothesis generation, Data Exploration, Data cleaning using Random Forest, Feature Engineering, and Model generation for predicting the item outlet sales price using linear regression. 📉 '
    }).then(function(){
        return botui.message.bot({ 
        delay: 15000,
        content: 'During summer of 2015, I was a Decision Support System intern at Reliance Jio, where I Performed Data Analysis of the "Switch and Walk" 4g services for deriving business intelligence using SAP business objects (Xcelsius) 📊 and developed interactive dashboards that visualised factors affecting the company\'s sales. 📉'
        });
    }).then(function(){
        return botui.message.bot({ 
        delay: 10000,
        content: 'During summer of 2014, I Developed a web application using Java Server Faces ☕ and Richfaces framework technologies as a Summer Intern at Reliance Jio.'
        });
    }).then(function(){
       return botui.message.bot({ 
       delay: 6000,
       content: 'During summer of 2013, I  was trained in core Java, ☕ MySQL, JDBC, FILE I/O, Socket Programming and developed a chat application as a Summer Trainee at Reliance Jio.'
       });
    }).then(function(){
	return askoptions();
    });  

}

var projects = function(){

  return botui.message.bot({
   delay: 1000,
   content: 'I am currently working on a Project under Dr Ralph Grishman, for NLP Course which aims to build a Visual Question- Answering System❓ such that given an image and an question we use the domain of NLP(Natural Language Processing) and CV(Computer Vision) to solve the task.'
  }).then(function () {
      return botui.message.bot({ 
      delay: 5000, 
      content: 'I am also working under Dr.Suzanne K MCintosh for Big Data Course which aims to build a Deep Learning Based Opinion Mining for Bitcoin Price Prediction. 💲'
      })
    }).then(function () {
      return botui.message.bot({ 
      delay: 5000, 
      content: 'During Fall 2018, I worked under Dr. Anasse Bari for Predictive Analytics Course where we built an Anomaly detection system for credit card transactions in the Finance Sector. 💳'
      })
      }).then(function () {
      return botui.message.bot({ 
      delay: 5000, 
      content: 'During Spring 2016, I worked under Prof. Sujata Khedkar during my undergraduate final project where we did an real-time aspect based sentiment analysis on product reviews and then provided product Recommendations based on it. 📱'
      })
      }).then(function () {
      return botui.message.bot({ 
      delay: 4000, 
      content: 'More details of the these projects and other projects can be found on my linkedIn https://www.linkedin.com/in/sree-lakshmi-addepalli/ and you can drop me an email at sla410@nyu.edu 📧 to discuss further on these!!!'
      })
      }).then(function () {
		return askoptions();
});


}

var hackathons = function(){

  return botui.message.bot({
   delay: 1000,
   content: 'I was part of the BCG Digital Ventures Hackathon held in Los Angeles, Nov-2018 where we built a cloud ☁️ Fintech business idea that uses AI to automate the auto claims process for insurance companies🚗. We built an image recognition classifier for estimation of vehicle damage cost and fault prediction system with chatbot that guides user through the process. 🤖'
  }).then(function () {
      return botui.message.bot({ 
      delay: 7000, 
      content: 'I was also the part of the Diebold Nixdorf Hackathon held in Mumbai, Apr-2018 where we were the Runner up of R&D Hackathon, held across internal teams across the globe 🌎. We analysed Bank text messages and presented various infographics in an android app. 📱'
      })
    }).then(function () {
      return botui.message.bot({ 
      delay: 5000, 
      content: 'I was also the part of the J P Morgan Chase "Code for Good" Hackathon held in Mumbai, Jul-2015 where we were the semi-finalist of Hackathon. We developed a technical solution for a social problem faced by happy hearts Foundation 💜 where we automated manual process of monitoring building constructions, 🏗️ by collecting information from both laborers and partners having access to smartphones 📱 and analyzed and presented them as insights in a web application for the partners and android application for the laborers to predict the delay time. ⏱️'
      })
      }).then(function () {
      return botui.message.bot({ 
      delay: 10000, 
      content: 'More details of the these hackathons can be found on my linkedIn https://www.linkedin.com/in/sree-lakshmi-addepalli/ and you can drop me an email at sla410@nyu.edu 📧 to discuss further on these!!!'
      })
      }).then(function () {
		return askoptions();
});


}

var professionaldevelopment = function(){

  return botui.message.bot({
   delay: 1000, // wait 1 sec.
   content: '✔️ Artificial Intelligence Programming With Python Nano-degree,Udacity - May - 2018 - July - 2018'
  }).then(function () {
      return botui.message.bot({ // second one
      delay: 2000, // wait 1 sec.
      content: '✔️ Natural Language Foundations Nanodegree, Udacity - Feb - 2018 - April - 2018.',
      });
    }).then(function () {
      return botui.message.bot({ // second one
      delay: 2000, // wait 1 sec.
      content: '✔️ Social Media Data Analytics, Coursera, April-2017 - May-2017.',
      });
    }).then(function () {
      return botui.message.bot({ // second one
      delay: 2000, // wait 1 sec.
      content: '✔️ Single Page Web Applications - Angular JS, Coursera, Jan-2017 - Feb-2017.',
      });
    }).then(function () {
      return botui.message.bot({ // second one
      delay: 2000, // wait 1 sec.
      content: '✔️ Object Oriented Programming, Java, Coursera, Dec-2016 - Jan-2017.',
      });
    }).then(function () {
      return botui.message.bot({ // second one
      delay: 2000, // wait 1 sec.
      content: '✔️ Machine Learning Andrew Ng, Coursera, Oct-2016 - Dec-2016.',
      });
    }).then(function () {
      return askoptions();
    });


}

var skills = function(){
  botui.message.bot({
   delay: 1000, // wait 1 sec.
   content: ' ⭕ Programming languages - Java, C#, Python, R, Javascript, Scala, Ocaml, C++'
  }).then(function(){
    return botui.message.bot({ 
    // show first message
    delay: 1000,
    content: '⭕ Web Development - HTML5, CSS3, AngularJs, NodeJS, Web API framework, XML, JSON, Web Services'
    });
  }).then(function(){
    return botui.message.bot({ 
    delay: 3000,
    content: '⭕ Devops - Jenkins, Git, Jira'
    });
  }).then(function(){
    return botui.message.bot({ 
    // show first message
    delay: 3000,
    content: '⭕ Cloud - Microsoft Azure,Amazon AWS, IBM'
    });
  }).then(function(){
    return botui.message.bot({ 
    delay: 3000,
    content: '⭕ Databases - MySQL, MSSQL, Oracle'
    });
  }).then(function(){
    return botui.message.bot({ 
    delay: 3000,
    content: '⭕ Data Science - Pandas, NumPy, Matplotlib, NLTK, Weka, RapidMiner, Knime'
    });
  }).then(function(){
    return botui.message.bot({ 
    delay: 3000,
    content: '⭕ Databases - MySQL, MSSQL, Oracle'
    });
  }).then(function(){
    return botui.message.bot({ 
    delay: 3000,
    content: '⭕ Desktop Applications - Java Swings, WPF, Winforms, Tkinter'
    });
  }).then(function(){
    return botui.message.bot({ 
    delay: 3000,
    content: '⭕ Mobile Development - Android'
    });
  }).then(function(){
    return botui.message.bot({ 
    delay: 3000,
    content: '⭕ Others - Agile Development, Confluence'
    });
  }).then(function () {
		return askoptions();
});

}

var accomplishments = function(){

  return botui.message.bot({
   delay: 1000, // wait 1 sec.
   content: '🏅 PyTorch Scholarship Recipient by Udacity and Facebook for deep learning with Pytorch. November 2018.'
  }).then(function () {
      return botui.message.bot({ // second one
      delay: 3000, // wait 1 sec.
      content: '🏅 Part of the Team "Connected Insights" that won the Best Team for Software Development in IDC Mumbai in the Year 2017.',
      });
    }).then(function () {
      return botui.message.bot({ // second one
      delay: 3000, // wait 1 sec.
      content: '🏅 Received Appreciation Certificate and Prize Money for the outstanding contribution in the automation of the installation process of Developer Workbench, a software simulator of the Terminal(ATMs) as a part of Xpression Product. September 2017.',
      });
    }).then(function () {
      return botui.message.bot({ // second one
      delay: 3000, // wait 1 sec.
      content: '🏅 Secured the First position in the Technical Paper Presentation on the Topic "3D searching". CSI - VESIT March 2015.',
      });
    }).then(function () {
      return botui.message.bot({ // second one
      delay: 3000, // wait 1 sec.
      content: '🏅 Secured Second position in the project competition for the project "Library management using RFID Technology". ISTE-VESIT April 2014.',
      });
    }).then(function () {
      return botui.message.bot({ // second one
      delay: 3000, // wait 1 sec.
      content: '🏅 Secured the First Position in Technical Paper Presentation on the Topic "Li-Fi Technology". CSI-VESIT March 2014.',
      });
    }).then(function () {
      return botui.message.bot({ // second one
      delay: 3000, // wait 1 sec.
      content: '🏅 Scholarship of Higher Education(SHE) under Innovation in Science pursuit for inspired research (INSPIRE) for being in top 1% for 12th Grade. March - 2012',
      });
    }).then(function () {
      return askoptions();
    });


}

var funfactsaboutme = function(){

  return botui.message.bot({
   delay: 1000,
   content: 'I have a twin sister who is also pursuing her Masters in Computer Science at NYU, Courant. 👯'
  }).then(function () {
      return botui.message.bot({ // second one
      delay: 3000,
      type: 'embed',
      content: 'https://media.giphy.com/media/JFC9WFhRcHAVq/giphy.gif'
      });
    }).then(function () {
      return botui.message.bot({ // second one
      delay: 4000,
      content: 'My Role Models include my Mom 👩, Rafael Nadal 🎾 and Elon Musk. 🚀'
      });
    }).then(function () {
      return botui.message.bot({ // second one
      delay: 3000,
      content: 'I have played Handball twice at National Level for CBSE meet and am a Silver Medalist 🥈'
      });
    }).then(function () {
      return botui.message.bot({ // second one
      delay: 3000,
      content: 'I was the captain of Girls team ⛹️‍♀️ in Computer Science Department in my Undergrad and have won the intra-college throwball tournament twice. ⚽ '
      });
    }).then(function () {
      return botui.message.bot({ // second one
      delay: 5000,
      content: 'Apart from being a sportsperson,🏓 during my leisure i am an avid book reader.📘'
      });
    }).then(function () {
      return askoptions();
    });


}
 
var end = function () {
  botui.message.bot({
      delay: 1000,
      content: 'Shoot me a mail at sla410@nyu.edu or connect with me at https://www.linkedin.com/in/sree-lakshmi-addepalli/ 😊'
    }).then(function (){
      return botui.message.bot({ 
      delay: 1000,
      content: 'If you are in New York, I am always down for coffee ☕' ,
  });
        
  });
}

var askoptions = function ()  {
  botui.message.bot({
      delay: 4000,
      content: 'What would you like to know more about me?'
    }).then(function () {
     return botui.action.button({ 
	  delay: 1000,
      addMessage: false,
      action: [{
        text: 'My Journey',
        value: 'journey'
      },{
        text: 'Philosophy',
        value: 'philosophy'
      },{
        text: 'Education',
        value: 'education'
      },{
        text: 'Areas of Interest',
        value: 'areasofinterest'
      },{
        text: 'Work Experience',
        value: 'workexperience'
      },{
        text: 'Internships',
        value: 'internships'
      },{
        text: 'Projects',
        value: 'projects'
      },{
        text: 'Hackathons',
        value: 'hackathons'
      },{
        text: 'Professional Development',
        value: 'professionaldevelopment'
      },{
        text: 'Accomplishments',
        value: 'accomplishments'
      },{
        text: 'Skills',
        value: 'skills'
      },{
        text: 'Languages I Speak',
        value: 'languages'
      },{
        text: 'Fun Facts About Me',
        value: 'funfactsaboutme'
      },{
        text: 'Contact Me',
        value: 'contactme'
      },{
        text: 'I have Known Enough!!!',
        value: 'knownme'
      }]
    });
  }).then(function (res) { 
  	 if(res.value == 'journey'){
      journey();
      } 
      else if(res.value == 'philosophy'){
      philosophy();
      } 
      else if(res.value == 'education'){
      education();
      } 
      else if(res.value == 'areasofinterest'){
      areasofinterest();
      } 
      else if(res.value == 'workexperience'){
      workexperience();
      } 
      else if(res.value == 'internships'){
      internships();
      } 
      else if(res.value == 'projects'){
      projects();
      } 
      else if(res.value == 'hackathons'){
      hackathons();
      } 
      else if(res.value == 'professionaldevelopment'){
      professionaldevelopment();
      } 
      else if(res.value == 'accomplishments'){
      accomplishments();
      } 
      else if(res.value == 'skills'){
      skills();
      } 
      else if(res.value == 'languages'){
      languages();
      } 
      else if(res.value == 'funfactsaboutme'){
      funfactsaboutme();
      } 
      else if(res.value == 'contactme'){
      end();
      } 
      else if(res.value == 'knownme'){
      end();
      }
     else {
      end();
      }
 });
}
































