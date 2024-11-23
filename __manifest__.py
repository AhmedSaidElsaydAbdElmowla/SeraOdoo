{
    'name': 'seraodoo',
    'version': '1.0',
    'summary': 'Simple sera Application',
    'depends': ['web'],
    'data': [
        'security/ir.model.access.csv',
        'security/record_rules.xml',
        'views/sera_templates.xml',
    ],
    'assets': {
        'web.assets_qweb': [
            'sera_app/static/src/xml/sera_app.xml',
        ],
        'web.assets_backend': [
            'sera_app/static/src/js/sera_app.js',
        ],
    },
    'application': True,
    'icon': 'static/description/icon.png',
}