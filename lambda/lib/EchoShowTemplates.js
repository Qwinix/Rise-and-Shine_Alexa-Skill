'use strict';

module.exports.getTemplate = (type, params = null) => {
    var d = {};

    switch (type) {

        case 'BodyTemplate1':
            d = {
                'type': 'BodyTemplate1',
                'token': params.id,
                'backButton': 'VISIBLE',
                'backgroundImage': {
                    'contentDescription': 'Background Image',
                    'sources': [{
                        'url': params.backgroundImage
                    }]
                },
                'title': params.title,
                'textContent': {
                    'primaryText': {
                        'text': params.prePlayText,
                        'type': 'PlainText'
                    }
                }
            };
            break;

        case 'ResumeBodyTemplate1':
            d = {
                'type': 'BodyTemplate1',
                'token': params.id,
                'backButton': 'VISIBLE',
                'backgroundImage': {
                    'contentDescription': 'Background Image',
                    'sources': [{
                        'url': params.backgroundImage
                    }]
                },
                'title': 'Do you want to keep listening to',
                'textContent': {
                    'primaryText': {
                        'text': params.tagline.replace('.', '?'),
                        'type': 'PlainText'
                    }
                }
            };
            break;


        case 'ListTemplate2':
            d = {
                'type': 'ListTemplate2',
                'token': 'listToken1',
                'title': '  Rise and Shine',
                'backButton': 'VISIBLE',
                'backgroundImage': {
                    'contentDescription': 'Background Image',
                    'sources': [{
                        'url': 'https://s3.amazonaws.com/my-morning-meditation-prod/GUI/BG-Images/MS_Alexa_Skill_M_M_Meditation_Default_FireTV_BodyTemplate7_BG.png'
                    }]
                },
                'listItems': [{
                    'token': 0,
                    'image': {
                        'sources': [{
                            'url': 'https://s3.amazonaws.com/my-morning-meditation-prod/GUI/list-templates/MS_Alexa_Skill_M_M_Meditation_GoodMorning_FireTV_ListTemplate2.png'
                        }],
                        'contentDescription': 'Good Morning'
                    },
                    'textContent': {
                        'primaryText': {
                            'text': 'Good Morning',
                            'type': 'PlainText'
                        },
                        'secondaryText': {
                            'text': 'A five minute meditation',
                            'type': 'PlainText'
                        }
                    }
                }, {
                    'token': 1,
                    'image': {
                        'sources': [{
                            'url': 'https://s3.amazonaws.com/my-morning-meditation-prod/GUI/list-templates/MS_Alexa_Skill_M_M_Meditation_MornPractice_FireTV_ListTemplate2.png'
                        }],
                        'contentDescription': 'Morning Practice'
                    },
                    'textContent': {
                        'primaryText': {
                            'text': 'Morning Practice',
                            'type': 'PlainText'
                        },
                        'secondaryText': {
                            'text': 'A seven minute meditation',
                            'type': 'PlainText'
                        }
                    }

                }]
            };
            break;
    }
    return d;
};