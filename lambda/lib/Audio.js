/* CONSTANTS */
const RiseAndShineSkillConfig = require('../skillconfig.json');

module.exports.skill = {
    appId: RiseAndShineSkillConfig.appId,
    dynamoDBTableName: RiseAndShineSkillConfig.table_name,
};

module.exports.audioData = {
    "0": {
        'title': 'Good Morning',
        'type': 'freeMeditation',
        'id': 0,
        'tagline': 'Good Morning, a four minute meditation.',
        'prePlayText': 'Now playing Good Morning, a four minute meditation.',
        'url': 'https://s3.amazonaws.com/my-morning-meditation-audio/Good+Morning.mp3',
        'audioName': 'Good morning by Franko Heke',
        'cardTitle': 'good morning',
        'backgroundImage': 'https://s3.amazonaws.com/my-morning-meditation-prod/GUI/BG-Images/MS_Alexa_Skill_M_M_Meditation_GoodMorning_EchoShow_FireTV_Audioplayer_BG.png',
        'audioImage': 'https://s3.amazonaws.com/my-morning-meditation-prod/GUI/Audio-Images/MS_Alexa_Skill_M_M_Meditation_GoodMorning_EchoShow_FireTV_AudioPlayer_Art_Image.png',
        'cardText': 'Good Morning, a four minute meditation.'
    },
    "1": {
        'title': 'Morning Practice',
        'type': 'freeMeditation',
        'id': 1,
        'tagline': 'Morning Practice, a seven minute meditation.',
        'prePlayText': 'Now playing Morning Practice, a seven minute meditation.',
        'url': 'https://s3.amazonaws.com/my-morning-meditation-audio/Morning+Practice.mp3',
        'audioName': 'Morning Practice by Franko Heke.',
        'cardTitle': 'morning practice',
        'backgroundImage': 'https://s3.amazonaws.com/my-morning-meditation-prod/GUI/BG-Images/MS_Alexa_Skill_M_M_Meditation_MornPractice_EchoShow_FireTV_Audioplayer_BG.png',
        'audioImage': 'https://s3.amazonaws.com/my-morning-meditation-prod/GUI/Audio-Images/MS_Alexa_Skill_M_M_Meditation_MornPractice_EchoShow_FireTV_AudioPlayer_Art_Image.png',
        'cardText': 'Morning Practice, a seven minute meditation.'
    }
};

module.exports.meditation = {
    'good morning': 0,
    'morning practice': 1
};

exports.freeMeditations = [0, 1];
