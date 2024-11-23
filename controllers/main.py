from odoo import http

class seraAppController(http.Controller):
    @http.route('/sera_app', auth='user', website=True)
    def sera_app(self):
        return http.request.render('sera_app.sera_app_page', {})